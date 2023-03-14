module.exports = {
	layout: 'thought.njk',
	tags: 'thoughts',
	eleventyComputed: {
		backlinks: (data) => {
			const backlinks = [];
			for (const thought of data.collections.thoughts.concat(data.collections.speaking)) {
				const thoughtContent = thought.template.frontMatter.content;
				const outboundLinks = (thoughtContent.match(/\[[^\[\]|\n\r]+]\([^\[\]|\n\r]+\)/g) || [])
					.map(link => link.slice(1, -1).split('](')[1]);
				if (!outboundLinks.some(link => link.localeCompare(data.page.filePathStem, undefined, {sensitivity: 'accent'}) === 0)) {
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