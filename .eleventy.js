const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Add header anchor and footnotes plugins to markdown-it
  const markdownLib = markdownIt({html: true, typographer: true});
  markdownLib.use(markdownItFootnote).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", markdownLib);

  // Enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Copy anything in assets/ verbatim
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      layouts: "_layouts"
    }
  }
};
