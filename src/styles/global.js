const prismToken = (t) => {
  return {
    // PrismJS syntax highlighting token styles
    // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
    ".token": {
      display: `inline-block`,
    },
    ".token.comment, .token.block-comment, .token.prolog, .token.doctype, .token.cdata": {
      color: t.colors.code.comment,
    },
    ".token.property, .token.tag, .token.boolean, .token.number, .token.function-name, .token.constant, .token.symbol": {
      color: t.colors.code.tag,
    },
    ".token.punctuation": {
      color: t.colors.code.punctuation,
    },
    ".token.selector, .token.attr-name, .token.string, .token.char, .token.function, .token.builtin": {
      color: t.colors.code.selector,
    },
    ".token.operator, .token.entity, .token.url, .token.variable": {
      color: t.colors.code.add,
    },
    ".token.atrule, .token.attr-value, .token.keyword": {
      color: t.colors.code.keyword,
    },
    ".token.inserted": {
      color: t.colors.code.add,
    },
    ".token.deleted": {
      color: t.colors.code.remove,
    },
    ".token.regex, .token.important": {
      color: t.colors.code.regex,
    },
    ".token.class-name": {
      color: t.colors.code.class,
    },
    ".language-css .token.string, .style .token.string": {
      color: t.colors.code.cssString,
    },
    ".token.important": {
      fontWeight: t.fontWeights.body,
    },
    ".token.bold": {
      fontWeight: t.fontWeights.bold,
    },
    ".token.italic": {
      fontStyle: `italic`,
    },
    ".token.entity": {
      cursor: `help`,
    },
    ".token.plain": {
      color: t.colors.code.text,
    },
    ".token-line": {
      marginLeft: `-${t.space[3]}`,
      marginRight: `-${t.space[3]}`,
      paddingRight: t.space[3],
    },
    ".token-line > span.token:empty::after": {
      minHeight: `1em`,
      display: `inline-block`,
      content: `""`,
    },
    ".namespace": {
      opacity: 0.7,
    },
    // PrismJS plugin styles
    ".token.tab:not(:empty):before, .token.cr:before, .token.lf:before": {
      color: t.colors.code.invisibles,
    },
  };
};

const gatsbyHighlight = (t) => {
  return {
    // gatsby-remark-prismjs styles
    ".gatsby-highlight": {
      fontSize: t.fontSizes[1],
      background: t.colors.code.bg,
      color: t.colors.text,
      position: `relative`,
      WebkitOverflowScrolling: `touch`,
      overflow: `auto`,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: t.space[3],
    },
    ".gatsby-highlight-code-line": {
      background: t.colors.code.lineHighlightBackground,
      marginLeft: `-${t.space[6]}`,
      marginRight: `-${t.space[6]}`,
      paddingLeft: t.space[5],
      paddingRight: t.space[6],
      borderLeft: `${t.space[1]} solid ${t.colors.code.lineHighlightBorder}`,
      display: `block`,
    },
    ".gatsby-highlight pre::-webkit-scrollbar": {
      width: t.space[2],
      height: t.space[2],
    },
    ".gatsby-highlight pre::-webkit-scrollbar-thumb": {
      background: t.colors.code.scrollbarThumb,
    },
    ".gatsby-highlight pre::-webkit-scrollbar-track": {
      background: t.colors.code.scrollbarTrack,
    },
    '.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class*="language-"]': {
      wordSpacing: `normal`,
      wordBreak: `normal`,
      overflowWrap: `normal`,
      lineHeight: 1.5,
      tabSize: 4,
      hyphens: `none`,
    },
  };
};

export const globalStyles = (t) => {
  return {
    ...prismToken(t),
    ...gatsbyHighlight(t),
    "*": {
      boxSizing: `inherit`,
    },
    body: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
    },
    a: {
      transition: `all 0.3s ease-in-out`,
      color: t.colors.text,
    },
    "p > code, li > code": {
      backgroundColor: t.colors.code.bg,
      color: t.colors.code.text,
      paddingLeft: t.space[2],
      paddingRight: t.space[2],
      paddingTop: t.space[1],
      paddingBottom: t.space[1],
    },
    ".prism-code": {
      fontSize: t.fontSizes[1],
      padding: t.space[3],
      webkitOverflowScrolling: `touch`,
      backgroundColor: `transparent`,
      overflow: `initial`,
      float: `left`,
      minWidth: `100%`,
      marginBottom: 0,
      '&[data-linenumber="false"]': {
        ".token-line": {
          paddingLeft: t.space[3],
        },
      },
    },
    ".line-number-style": {
      display: `inline-block`,
      width: `3em`,
      userSelect: `none`,
      opacity: 0.3,
      textAlign: `center`,
      position: `relative`,
    },
    "pre.language-": {
      marginTop: 0,
    },
    "pre.language-noLineNumbers": {
      marginTop: 0,
    },
    'pre[class*="language-"]:before': {
      backgroundColor: t.colors.code.bgLanguage,
      borderRadius: `0 0 0.25rem 0.25rem`,
      color: t.colors.code.textLanguage,
      fontSize: `12px`,
      letterSpacing: `0.025rem`,
      padding: `0.1rem 0.5rem`,
      position: `absolute`,
      left: `1rem`,
      textAlign: `right`,
      textTransform: `uppercase`,
      top: 0,
    },
    "pre[class~='language-java']:before": {
      content: `'java'`,
    },
    "pre[class~='language-shell']:before": {
      content: `'shell'`,
    },
    ".code-title": {
      background: t.colors.code.bg,
      borderBottom: `1.5px solid ${t.colors.code.border}`,
      color: t.colors.code.text,
      padding: `${t.space[2]} ${t.space[4]} ${t.space[2]}`,
      fontSize: t.fontSizes[0],
      marginTop: t.space[2],
      fontFamily: `monospace`,
    },
    [`@media (min-width: ${t.breakpoints[2]})`]: {
      ".gatsby-highlight,.code-title": {
        marginLeft: `-${t.space[3]}`,
        marginRight: `-${t.space[3]}`,
      },
    },
  };
};
