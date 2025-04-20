import {generatePreview, otherPageLinksToThisOne} from "./utils.js";

export async function backlinks(data) {
	const backlinks = [];

	for (const otherPage of [...data.collections.thoughts, ...data.collections.speaking]) {
		const pageTemplate = await otherPage.template.read();
		const paragraphs = pageTemplate.content.split('\n');
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