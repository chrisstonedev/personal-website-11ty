module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addFilter("firstParagraph", (post) => {
    return post.substring(0, post.indexOf('</p>') + 4);
  });
  return {
    dir: {
      input: 'src', output: 'public',
    }
  }
}