module.exports = {
	/**
	 * @param {string[]} outboundLinkUrls
	 * @param {string} currentPagePath
	 * @returns {boolean}
	 */
	otherPageLinksToThisOne: (outboundLinkUrls, currentPagePath) => {
		return outboundLinkUrls.some(link => link.localeCompare(currentPagePath, undefined, {sensitivity: 'accent'}) === 0);
	}
}