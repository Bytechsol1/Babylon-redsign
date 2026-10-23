# Babylon — Beauty, engineered.

A responsive, buildless redesign of the supplied Babylon HTML. The visual direction combines warm ivory, the official logo’s midnight navy (#1C1E57), and amber gold (#EDAE2F), oversized editorial typography, and conceptual cosmetic still-life imagery.

## Open and edit

The finished page is `dist/index.html`, with `dist/styles.css`, `dist/app.js`, and images in `dist/assets/`. With Node.js 20.11 or newer, run `npm run dev` and visit `http://127.0.0.1:4173`. You can also open the HTML directly or run `node server.mjs`. Use `npm start` to start the same local server.

No package installation or build step is required. Fonts load from Google Fonts, with system fallbacks. The supplied source is preserved as `original.html`.

## Included interactions

- Responsive navigation, with Escape-to-close and accessible state.
- Formulation accordions with coordinated conceptual material illustrations.
- Application-sector tabs with arrow-key, Home, and End navigation.
- FAQ and case-study disclosures.
- Project brief dialog with native form validation. It prepares an email to the technical address from the original HTML; the visitor reviews and sends it in their own email app. A text download is provided as a fallback. No messages are automatically sent and no server collection is configured.

## Validation

JavaScript syntax, duplicate IDs, local asset existence, all 21 nonempty internal anchors, and HTTP serving were checked. No connected browser was available in the execution environment, so visual layout and browser interaction QA remain unverified. Responsive breakpoints cover small phones, tablets, and desktop. Reduced-motion preferences are respected.

Scientific capabilities, contact addresses, and case-study metrics are based on the supplied HTML; this redesign does not independently certify those claims. The IP ownership note retains the commercial-milestone condition from the original.

## Official brand identity

The supplied 181 × 136 px logo is used unchanged as `dist/assets/babylon-logo.png` in the header, footer, and favicon. Navy `#1C1E57` and gold `#EDAE2F` were sampled from its pixels. White logo backgrounds preserve the original artwork without recoloring, tracing, or AI reconstruction.

## Image provenance

- `dist/assets/laboratory.jpg`: laboratory image retained from the supplied HTML.
- `dist/assets/hero-navy.png`: current hero, edited from the initial artwork using the built-in Image Generation tool to match the official navy brand color. This is conceptual cosmetic packaging artwork, not a photograph of a Babylon facility or actual product range. The initial `dist/assets/hero.png` is retained.

Brand-color edit prompt:

> Use case: precise-object-edit. Edit this existing cosmetic still-life hero artwork ONLY to align its sculptural props with the actual Babylon brand palette: deep midnight navy #1C1E57 and warm amber gold #EDAE2F. Change the dusty blue arch and blue vertical cylinder to rich matte midnight navy #1C1E57 with physically natural highlights and shadows. Preserve every object, arrangement, proportion, framing, texture, photographic realism, lighting, background, amber glass bottle, jar, chrome sphere, and cream smear exactly as in the input. Keep the existing warm ivory and natural amber gold tones. The only intended change is the color of the blue architectural props to dark navy. Do not add logos, words, text, new objects, or additional decoration. Same portrait aspect ratio.

Final image prompt:

> Use case: product-mockup. Asset type: editorial hero artwork for Babylon cosmetic formulation science website. Create an exceptionally art-directed photographic still life, portrait 4:5 composition. Warm pale ivory seamless studio, large muted dusty cobalt-blue sculptural arch / curved cylindrical pedestal toward rear right, a tall amber glass serum bottle with matte black dropper on a cream monolithic cube at lower center, a frosted translucent cosmetic jar with black lid in foreground right, clear laboratory glass cylinder with pale yellow liquid behind left, a tiny chrome sphere and one smooth white cream smear on an ivory disk. Carefully composed surreal postmodern arrangement with architectural geometry, sophisticated beauty laboratory campaign. Strong direct side sunlight, beautiful crisp long shadows, tactility, real photographic textures, amber and pale citron highlights. Background edge to edge softly warm pale ivory, objects occupy central 75%, strong optical clarity. No text, no typography, no logos, no people, no watermark. This is conceptual packaging imagery, not a real facility. Premium medium-format product photography, subtle analog grain, high detail.
