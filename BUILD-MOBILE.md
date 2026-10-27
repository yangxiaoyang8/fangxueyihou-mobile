# Mobile build

The published mobile page embeds the bundled JavaScript, styles and startup guard in HTML. A phone needs only the HTML response to start the scene, with no separate startup script or stylesheet requests. Texture requests begin after the first rendered frame.

To rebuild after changing source files:

```sh
npm install
npm run build
```

Publish the generated `index.html`, plus any changed source/assets. Keep `scene-mobile.bundle.js` as the generated build artifact. Update the page query version for each release.

The mobile target is `yangxiaoyang8/fangxueyihou-mobile`. This local directory's Git origin points to the separate desktop repository, so check the destination before publishing.
