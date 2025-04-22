/**
 * @param {string[]} outboundLinkUrls
 * @param {string} currentPagePath
 */
export function otherPageLinksToThisOne(outboundLinkUrls, currentPagePath) {
	return outboundLinkUrls.some(link => link.localeCompare(currentPagePath, undefined, {sensitivity: 'accent'}) === 0);
}

/**
 * @param {string} paragraph
 * @param {string} currentPagePath
 */
export function generatePreview(paragraph, currentPagePath) {
	function replacer(match, squareBracketContents, _, parenthesesContents) {
		if (parenthesesContents === currentPagePath) {
			return `**${squareBracketContents}**`;
		}
		if (parenthesesContents === undefined) {
			return '';
		}
		return squareBracketContents;
	}

	const regex = /\[([^\]]*)](\((.*?)\))?/g
	return paragraph.replace(regex, replacer);
}