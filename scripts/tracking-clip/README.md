# Tracking clip

How `public/showcase/price-tag-tracking.mp4` was made, with Emaki's own tracking.

1. Footage: `node render.mjs file://$PWD/scene.html frames 180` (Chromium; needs `SCRATCH` set to a temp folder),
   then `ffmpeg -framerate 30 -i frames/f%04d.png -vf "noise=alls=6:allf=t,gblur=sigma=0.6,format=yuv420p" -c:v libx264 -crf 16 cafe-table.mp4`.
   It prints the two points to track and the tag's place at 0 s.
2. Project: put `main.rs` in a crate with this `Cargo.toml` (paths point at the app repo; copy its `Cargo.lock`
   and build with `CARGO_TARGET_DIR` set to the app's `target` to reuse its build), then
   `trackclip cafe-table.mp4 price-tag.emaki 789.9 378.0 874.2 552.3 633 231`.
3. Export: `Emaki.AppImage --export price-tag.emaki raw.mp4 --width 1280 --height 720 --fps 30` with throwaway
   `XDG_*` folders, then encode as in the main README.
