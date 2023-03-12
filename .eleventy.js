function nthIndexOf(string, searchString, occurrence) {
	let index = -1;
	for (let i = 0; i < occurrence; i++) {
		index = string.indexOf(searchString, ++index);
		if (index === -1) return -1;
	}
	return index;
}

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/style.css');
	eleventyConfig.addPassthroughCopy('./src/favicon.ico');
	eleventyConfig.addFilter('mostRecentRevisions', (post) => {
		let index = nthIndexOf(post, '<li>', 3);
		return index < 0 ? post : post.substring(0, index) + '</ul>';
	});

	const markdownIt = require('markdown-it');
	const md = markdownIt({html: true, linkify: true})
		.use(require('markdown-it-footnote'))
		.use(require('markdown-it-attrs'))
		.use(function (md) {
			/** @param {{raw:string,text:string,url:string}} match */
			let normalizeLinks = match => {
				const parts = match.raw.slice(2, -2).split('|');
				parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, '');
				match.text = (parts[1] || parts[0]).trim();
				match.url = `/thoughts/${parts[0].trim()}/`;
			};
			md.linkify.add('[[', {
				validate: /^\s?([^\[\]|\n\r]+)(\|[^\[\]|\n\r]+)?\s?]]/,
				normalize: normalizeLinks,
			});
		})
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