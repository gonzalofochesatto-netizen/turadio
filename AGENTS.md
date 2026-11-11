# Architecture
- Prerender the homepage from the existing React tree in Vite's build pipeline and hydrate it in the browser; this keeps static HTML and interactive content in sync without a framework migration.
- Include collapsed FAQ answers in hidden DOM and use the static-render context for animation initialization; crawlers receive complete visible page content without changing accordion behavior.
- Scroll page content inside the root above a reserved strip for floating controls, and observe that root for navbar state; fixed controls cannot cover content during scrolling.