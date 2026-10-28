# Mobile build

The published mobile page embeds the bundled JavaScript, styles and startup guard in HTML. A phone needs only the HTML response to start the scene, with no separate startup script or stylesheet requests. Texture requests begin after the first rendered frame.

To rebuild after changing source files:

```sh
npm install
npm run build
```

Publish the generated `index.html`, plus any changed source/assets. Keep `scene-mobile.bundle.js` as the generated build artifact. Update the page query version for each release.

The mobile target is `yangxiaoyang8/fangxueyihou-mobile`. This local directory's Git origin points to the separate desktop repository, so check the destination before publishing.

## Mobile texture assets
Run `npm run textures` to generate `textures/mobile/` from the retained originals in `textures/fast/`. Normal and roughness maps use a 512 pixel limit; product art uses 1024, and atlases/signs/bookcases may retain up to 1536. WebP quality is 78 for surfaces and 84 for artwork; if recompression increases the file size, the original WebP is retained. Mobile downloads prefer this directory with the original image as a fallback. Do not delete original art.

Build replacements must use callback functions: a replacement string interprets dollar sequences inside minified shader source and can accidentally inject old HTML. The builder rejects duplicate block markers and parses every inline script. Building twice must produce identical HTML.

Readiness means both a rendered scene and decoded managed textures, followed by two rendering frames. The CSS-only shop animation and blurred canvas remain during pending/failed initial images. A failed texture exposes retry and must not count as ready. Near shops construct their normal detailed room without requiring an entry click; distant shops keep their inexpensive furnishings.
