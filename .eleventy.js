const sharp = require("sharp");

module.exports = function (eleventyConfig) {
	const inputDirectory = 'src';
	const outputDirectory = 'public';
	eleventyConfig.addPassthroughCopy(`./${inputDirectory}/img/`, {dot: false});
	eleventyConfig.addPassthroughCopy(`./${inputDirectory}/style.css`);
	eleventyConfig.addPassthroughCopy(`./${inputDirectory}/favicon.ico`);
	eleventyConfig.addPassthroughCopy(`./${inputDirectory}/_redirects`);

	const markdownIt = require('markdown-it');
	const md = markdownIt({html: true, linkify: false, typographer: true})
			.use(require('markdown-it-footnote'))
			.use(require('markdown-it-attrs'))
			.use(require('markdown-it-external-links'), {externalClassName: 'external-link'});
	md.renderer.rules.footnote_block_open = () => (
			'<h2>References</h2>\n' +
			'<ol class="references-list">\n'
	);
	eleventyConfig.addFilter('renderMarkdownLinks', string => {
		return md.render(string);
	});
	eleventyConfig.addFilter('htmlDate', date => {
		let isoDate = date?.toISOString().substring(0, 10);
		return isoDate ? `<time datetime="${isoDate}">${isoDate}</time>` : '';
	});
	eleventyConfig.addAsyncShortcode('generateOpenGraphImage', async (title, slug, description, pageUrl, pageTag) => {
		let openGraphImageOutputDirectory = `img/preview`;
		let filename = slug || 'index';

		function createTextSvgFromString(textContent, maxCharsPerRow, topY, lineHeight, fontSizeInPt, fontWeight) {
			let textRows = [];
			let words = textContent.split(/(?<=[^a-zA-Z0-9()<>"'])/);
			let textRow = '';
			words.forEach((word) => {
				if (textRow.length + word.length >= maxCharsPerRow) {
					textRows.push(textRow);
					textRow = '';
				}
				textRow += word;
			});
			textRows.push(textRow);

			return textRows.reduce((textSvg, row, i) => {
				return textSvg + `<text font-family="Verdana" x="50" y="${topY + (i * lineHeight)}" fill="#003" font-size="${fontSizeInPt}pt" font-weight="${fontWeight}">${row}</text>`;
			}, '');
		}

		let urlText = '';
		if (pageUrl !== '/') {
			let sectionName = pageTag || pageUrl?.replaceAll('/', '');
			sectionName = sectionName.charAt(0).toUpperCase() + sectionName?.slice(1);
			let underlineLength = 10;
			switch (sectionName) {
				case 'Thoughts':
					underlineLength = 190;
					break;
				case 'Speaking':
					underlineLength = 185;
					break;
				case 'Projects':
					underlineLength = 165;
					break;
				case 'Contact':
					underlineLength = 155;
					break;
			}
			urlText = `<text font-family="Verdana" x="1150" y="590" fill="#00f" font-size="36pt" font-weight="700" text-anchor="end">${sectionName}</text>
<line stroke="fuchsia" stroke-width="5" x1="${1150 - underlineLength}" y1="610" x2="1150" y2="610"/>
<text font-family="Verdana" x="420" y="590" fill="#00f" font-size="36pt" font-weight="400">/</text>
<text font-family="Verdana" x="445" y="590" fill="#00f" font-size="36pt" font-weight="400">${slug}</text>`;
		}

		let svg = `<svg width="1200" height="628" viewbox="0 0 1200 628" xmlns="http://www.w3.org/2000/svg">
	<rect x="0" y="0" width="1200" height="528" rx="0" ry="0" fill="#ddf" />
	<rect x="0" y="528" width="1200" height="100" rx="0" ry="0" fill="#cce" />
	<g>
		${(createTextSvgFromString(title, 30, 100, 70, 60, 700))}
		${(createTextSvgFromString(description, 55, 300, 50, 36, 400))}
		<text font-family="Verdana" x="150" y="590" fill="#00f" font-size="36pt" font-weight="${pageUrl === '/' ? 700 : 400}">chrisstone.dev</text>
		${urlText}
	</g>
</svg>`;

		const profileImage = await sharp(`./${inputDirectory}/img/chris-stone-square.png`)
				.resize({width: 100, height: 100, fit: 'contain'})
				.toBuffer();

		await sharp(Buffer.from(svg))
				.resize(1200, 628)
				.composite([{input: profileImage, top: 528, left: 0}])
				.png()
				.toFile(`./${outputDirectory}/${openGraphImageOutputDirectory}/${filename}.png`);

		return `/${openGraphImageOutputDirectory}/${filename}.png`;
	});
	eleventyConfig.setLibrary('md', md);
	return {dir: {input: inputDirectory, output: outputDirectory}};
}