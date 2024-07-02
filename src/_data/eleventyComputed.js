const {otherPageLinksToThisOne, generatePreview} = require("./utils");
module.exports = {
	/** @param {{collections: {thoughts: array, speaking: array}, page: {filePathStem: string}}} data */
	backlinks: (data) => {
		const backlinks = [];

		for (const otherPage of data.collections.thoughts.concat(data.collections.speaking)) {
			const paragraphs = otherPage.template.frontMatter.content.split('\n');
			let backlinkFound = false;
			for (const paragraph of paragraphs) {
				const outboundLinksInMarkdownFormat = paragraph.match(/\[[^\[\]|\n\r]+]\([^\[\])|\n\r]+\)/g) || [];
				const outboundLinkUrls = outboundLinksInMarkdownFormat.map(link => link.slice(1, -1).split('](')[1]);
				if (otherPageLinksToThisOne(outboundLinkUrls, data.page.filePathStem)) {
					backlinks.push({
						url: otherPage.url,
						title: otherPage.data.title,
						preview: generatePreview(paragraph, data.page.filePathStem),
					});
					backlinkFound = true;
					break;
				}
				if (backlinkFound) {
					break;
				}
			}
		}
		return backlinks;
	}
}