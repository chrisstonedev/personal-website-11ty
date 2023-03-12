const wikiLinkRegExp = /\[\[\s?([^\[\]|\n\r]+)(\|[^\[\]|\n\r]+)?\s?]]/g

function caselessCompare(a, b) {
	return a.normalize().toLowerCase() === b.normalize().toLowerCase();
}

/** @type {import('@11ty/eleventy').Eleventy} */
module.exports = {
	layout: 'thought.njk',
	tags: 'thoughts',
	eleventyComputed: {
		backlinks: (data) => {
			const thoughts = data.collections.thoughts;
			const currentFileSlug = data.page.filePathStem.replace('/thoughts/', '');
			const backlinks = [];
			for (const thought of thoughts) {
				const thoughtContent = thought.template.frontMatter.content;
				const outboundLinks = (thoughtContent.match(wikiLinkRegExp) || []).map(link =>
					link.slice(2, -2).split('|')[0].replace(/.(md|markdown)\s?$/i, '').trim()
				);
				if (!outboundLinks.some(link => caselessCompare(link, currentFileSlug))) {
					continue;
				}
				const indexWhereFirstParagraphEnds = thoughtContent.indexOf('\n\n');
				const preview = thoughtContent.substring(0, indexWhereFirstParagraphEnds);
				backlinks.push({url: thought.url, title: thought.data.title, preview});
			}
			return backlinks;
		},
	},
}