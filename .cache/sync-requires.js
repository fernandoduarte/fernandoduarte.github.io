const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/helendempsey/Documents/GitHub/fernandoduarte.github.io/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/helendempsey/Documents/GitHub/fernandoduarte.github.io/src/pages/index.js"))),
  "component---src-pages-social-media-js": hot(preferDefault(require("/Users/helendempsey/Documents/GitHub/fernandoduarte.github.io/src/pages/socialMedia.js")))
}

