//! Builds a project with a price tag pinned to two points in a video using
//! Emaki's own tracking (motion_ui::tracking), then saves it.
//! trackclip VIDEO OUT.emaki P1X P1Y P2X P2Y TAGX TAGY
use motion_animation::{AnimProperty, Animation, Easing, Value};
use motion_core::{CanvasSettings, ClipTiming, Color, ImageFit, Layer, LayerContent, TextAlign, TextData, TextResize, Vec2, VideoData};
use motion_project::{Document, Project};
use motion_ui::tracking::{Pick, Session};
use std::path::PathBuf;

fn main() {
    let a: Vec<String> = std::env::args().collect();
    let f = |i: usize| a[i].parse::<f64>().unwrap();
    let (video, out) = (PathBuf::from(&a[1]), PathBuf::from(&a[2]));
    let (p1, p2, tag) = (Vec2::new(f(3), f(4)), Vec2::new(f(5), f(6)), Vec2::new(f(7), f(8)));

    let canvas = CanvasSettings { width: 1280, height: 720, frame_rate: 30, duration: 6.0, background: Color::BLACK, transparent_background: false };
    let mut d = Document::new(Project::new("Café table", canvas));
    let asset = d.import_video(&video).expect("import video");
    let content = LayerContent::Video(VideoData { asset, fit: ImageFit::Fill, corner_radius: 0.0, clip: ClipTiming::at(0.0), volume: 1.0 });
    let mut v = Layer::new(d.alloc_layer_id(), "Café table", content);
    v.transform.size = Vec2::new(1280.0, 720.0);
    v.transform.position = Vec2::new(640.0, 360.0);
    let vid = d.add_layer(v, None, None).unwrap();

    // The tag: a cream card with the drink and its price.
    let (w, h) = (300.0, 76.0);
    let mut g = Layer::group(d.alloc_layer_id());
    g.name = "Price tag".into();
    g.transform.size = Vec2::new(w, h);
    g.transform.position = tag;
    let gid = d.add_layer(g, None, None).unwrap();
    let mut card = Layer::rectangle(d.alloc_layer_id(), Color::from_rgba8(0xfb, 0xf3, 0xe4, 0xff));
    if let LayerContent::Rectangle(r) = &mut card.content {
        r.corner_radius = 14.0;
    }
    card.name = "Card".into();
    card.transform.size = Vec2::new(w, h);
    card.transform.position = Vec2::new(w / 2.0, h / 2.0);
    d.add_layer(card, Some(gid), None).unwrap();
    let text = TextData {
        text: "Flat white  $4.80".into(),
        font_size: 34.0,
        font_weight: 600,
        color: Color::from_rgba8(0x1f, 0x1b, 0x16, 0xff),
        align: TextAlign::Center,
        resize: TextResize::Fixed,
        ..TextData::default()
    };
    let mut t = Layer::text(d.alloc_layer_id(), text);
    t.transform.size = Vec2::new(w, 44.0);
    t.transform.position = Vec2::new(w / 2.0, h / 2.0);
    d.add_layer(t, Some(gid), None).unwrap();
    let fade = Animation::new(d.alloc_animation_id(), gid, AnimProperty::Opacity, Value::Number(0.0), Value::Number(1.0))
        .with_timing(0.2, 0.5)
        .with_easing(Easing::Linear);
    d.add_animation(fade).unwrap();

    // Track: two points picked at 0 s, followed to the end at 30 fps.
    let mut pick = Pick::new(vid, gid);
    pick.two = true;
    let (mut s, job) = Session::start(&d, pick, &[p1, p2], 0.0, 6.0, 30, egui::Context::default()).expect("start tracking");
    let found = loop {
        if let Some(r) = job.finish() {
            break r.expect("tracking");
        }
        std::thread::sleep(std::time::Duration::from_millis(50));
    };
    let from = s.merge(0.0, found);
    s.apply(&mut d, from).expect("apply");
    eprintln!("{}", s.note());
    eprintln!("frames {}, to check {}", s.samples.len(), s.problems().len());
    motion_project::format::save(d.project(), &out).expect("save");
}
