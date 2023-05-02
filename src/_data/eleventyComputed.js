module.exports = {
	/** @param {{collections: {thoughts: array, speaking: array}, page: {filePathStem: string}}} data */
	backlinks: (data) => {
		const backlinks = [];

		/**
		 * @param {string[]} outboundLinkUrls
		 * @param {string} currentPagePath
		 * @returns {boolean}
		 */
		const otherPageLinksToThisOne = (outboundLinkUrls, currentPagePath) => outboundLinkUrls.some(link =>
				link.localeCompare(currentPagePath, undefined, {sensitivity: 'accent'}) === 0
		);

		for (const otherPage of data.collections.thoughts.concat(data.collections.speaking)) {
			const otherContent = otherPage.template.frontMatter.content;
			const outboundLinksInMarkdownFormat = otherContent.match(/\[[^\[\]|\n\r]+]\([^\[\])|\n\r]+\)/g) || [];
			const outboundLinkUrls = outboundLinksInMarkdownFormat.map(link => link.slice(1, -1).split('](')[1]);
			if (otherPageLinksToThisOne(outboundLinkUrls, data.page.filePathStem)) {
				backlinks.push({url: otherPage.url, title: otherPage.data.title});
			}
		}
		return backlinks;
	}
}