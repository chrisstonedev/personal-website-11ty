/**
 * @param {string[]} outboundLinkUrls
 * @param {string} currentPagePath
 * @returns {boolean}
 */
export function otherPageLinksToThisOne(outboundLinkUrls, currentPagePath) {
	return outboundLinkUrls.some(link => link.localeCompare(currentPagePath, undefined, {sensitivity: 'accent'}) === 0);
}

/**
 * @param {string} paragraph
 * @param {string} currentPagePath
 * @returns {string}
 */
export function generatePreview(paragraph, currentPagePath) {
	function replacer(match, p1, p2) {
		if (p2 === currentPagePath) {
			return '**' + p1 + '**';
		}
		return p1;
	}

	const regex = /\[(.*?)]\((.*?)\)/g
	return paragraph.replace(regex, replacer);
}