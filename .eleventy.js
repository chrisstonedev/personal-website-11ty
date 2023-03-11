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
	eleventyConfig.addFilter("mostRecentRevisions", (post) => {
		let index = nthIndexOf(post, '<li>', 3);
		return index < 0 ? post : post.substring(0, index) + '</ul>';
	});
	return {dir: {input: 'src', output: 'public'}};
}