const pxtoviewport = require("postcss-px-to-viewport");
const path = require("path");
module.exports = {
  webpack: {
    alisa: {
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@api": path.resolve(__dirname, "./src/api"),
    },
  },
  style: {
    postcss: {
      plugins: [
        pxtoviewport({
          viewportWidth: 375,
        }),
      ],
    },
  },
};
