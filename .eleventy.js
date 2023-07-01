module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/img/');
	eleventyConfig.addPassthroughCopy('./src/style.css');
	eleventyConfig.addPassthroughCopy('./src/favicon.ico');

	const markdownIt = require('markdown-it');
	const md = markdownIt({html: true, linkify: false, typographer: true})
		.use(require('markdown-it-footnote'))
		.use(require('markdown-it-attrs'))
		.use(require('markdown-it-external-links'), {externalClassName: 'external-link',});
	eleventyConfig.addFilter('renderMarkdownLinks', string => {
		return md.render(string);
	});
	eleventyConfig.addFilter('htmlDate', date => {
		let isoDate = date?.toISOString().substring(0, 10);
		return isoDate ? `<time datetime="${isoDate}">${isoDate}</time>` : '';
	});
	eleventyConfig.setLibrary('md', md);
	return {dir: {input: 'src', output: 'public'}};
}