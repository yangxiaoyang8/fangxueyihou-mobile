# Mobile build

The published mobile page uses one classic JavaScript bundle, with styles and the startup guard embedded in HTML. A phone therefore needs only the HTML and one JavaScript request to start the scene. Texture requests begin after the first rendered frame.

To rebuild after changing source files:

```sh
npm install
npm run build
```

Publish the generated `index.html` and `scene-mobile.bundle.js` together, plus any changed source/assets. Never publish a new HTML bundle URL before the matching bundle is available. Update the bundle query version for each release.

The mobile target is `yangxiaoyang8/fangxueyihou-mobile`. This local directory's Git origin points to the separate desktop repository, so check the destination before publishing.
