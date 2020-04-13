import baseTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    modes: {
      ...baseTheme.colors.modes,
      dark: {
        ...baseTheme.colors.modes.dark,
        code: {
          bgInline: "#1E1E1E",
          bg: "#1E1E1E",
          text: "#9CDCFE",
          remove: "rgb(206, 145, 120)",
          add: "rgb(181, 206, 168)",
          selector: "rgb(215, 186, 125)",
          tag: "rgb(78, 201, 176)",
          keyword: "rgb(86, 156, 214)",
          comment: "rgb(106, 153, 85)",
          punctuation: "rgb(212, 212, 212)",
          regex: "rgb(181, 206, 168)",
          cssString: "rgb(206, 145, 120)",
          class: "rgb(78, 201, 176)",
          bgLanguage: "black",
          textLanguage: "white",
          border: `#2c2c2c`,
        },
      },
    },
    code: {
      bgInline: "#f6f8fa",
      bg: "#f6f8fa",
      text: "#393A34",
      remove: "#d73a49",
      add: "#36acaa",
      selector: "rgb(215, 58, 73)",
      tag: "#00009f",
      keyword: "rgb(0, 0, 159)",
      comment: "#999988",
      punctuation: "#393A34",
      regex: "#36acaa",
      cssString: "#e3116c",
      class: "#393A34",
      bgLanguage: "white",
      textLanguage: "black",
      border: "#ececec"
    },
  },
};
