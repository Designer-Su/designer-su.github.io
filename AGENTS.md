<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Mockup Rendering Guidelines
When displaying mobile screenshots inside device frames (e.g. iPhone mockups in Solution sections):
- **Top Notch Margin**: Position the image absolutely at the bottom with a height constraint (e.g. `absolute bottom-0 left-0 w-full h-[calc(100%-1.5rem)]`) to leave a `1.5rem` (24px) white background gap at the top. This keeps the screenshot content from being covered by the absolute positioned camera notch/bezel.
- **Fitting Fit-to-Screen**: Always use `object-contain object-top` style instead of `object-cover` so that the bottom navigation bar of the screenshot fits inside the frame without getting cropped.
