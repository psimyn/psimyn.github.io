module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias('default', 'layouts/default.html');
  eleventyConfig.addLayoutAlias('full_width', 'layouts/full_width.html');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.html');

  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));

  return {
    dir: {
      input: './',
      output: './_site'
    }
  }
}
