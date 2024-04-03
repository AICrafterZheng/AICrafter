module.exports = {
      ...require("nextra")({
        theme: "nextra-theme-docs",
        themeConfig: "./theme.config.jsx",
        latex: true,
        titleSuffix:
        "What's next for AI agentic workflows ft. Andrew Ng of AI Fund",
      })()
    };