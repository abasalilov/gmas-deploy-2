module.exports = {
  cache: {
    cacheId: "electrode-react-sample-material-ui",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrode-react-sample-material-ui",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
