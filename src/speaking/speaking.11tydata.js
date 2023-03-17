module.exports = {
	layout: 'talk.njk',
	tags: 'speaking',
	eleventyComputed: {
		backlinks: (data) => {
			const backlinks = [];
			for (const talk of data.collections.thoughts.concat(data.collections.speaking)) {
				const talkContent = talk.template.frontMatter.content;
				const outboundLinks = (talkContent.match(/\[[^\[\]|\n\r]+]\([^\[\])|\n\r]+\)/g) || [])
					.map(link => link.slice(1, -1).split('](')[1]);
				if (!outboundLinks.some(link => link.localeCompare(data.page.filePathStem, undefined, {sensitivity: 'accent'}) === 0)) {
					continue;
				}
				const indexWhereFirstParagraphEnds = talkContent.indexOf('\n\n');
				const preview = talkContent.substring(0, indexWhereFirstParagraphEnds);
				backlinks.push({url: talk.url, title: talk.data.title, preview});
			}
			return backlinks;
		},
	},
}