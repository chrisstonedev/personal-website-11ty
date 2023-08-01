const fs = require('fs');
const path = require('path');
const sharp = require("sharp");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/img/');
	eleventyConfig.addPassthroughCopy('./src/style.css');
	eleventyConfig.addPassthroughCopy('./src/favicon.ico');

	const markdownIt = require('markdown-it');
	const md = markdownIt({html: true, linkify: false, typographer: true})
			.use(require('markdown-it-footnote'))
			.use(require('markdown-it-attrs'))
			.use(require('markdown-it-external-links'), {externalClassName: 'external-link',});
	eleventyConfig.addFilter('renderMarkdownLinks', string => {
		return md.render(string);
	});
	eleventyConfig.addFilter('htmlDate', date => {
		let isoDate = date?.toISOString().substring(0, 10);
		return isoDate ? `<time datetime="${isoDate}">${isoDate}</time>` : '';
	});
	eleventyConfig.addAsyncShortcode("GenerateSocialImage", async (title, slug, description, pageUrl, pageTag) => {
		const sep = path.sep;
		let targetPreviewPath = `/img/preview`;
		const targetDir = path.normalize(`./public${targetPreviewPath}`);
		const initDir = path.isAbsolute(targetDir) ? sep : '';
		targetDir.split(sep).reduce((parentDir, childDir) => {
			const curDir = path.resolve(parentDir, childDir);
			if (!fs.existsSync(curDir)) {
				fs.mkdirSync(curDir);
			}
			return curDir;
		}, initDir);

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

			return textRows.reduce((textSvg, row, i) =>
					textSvg + `<text style="font-family: sans-serif;" x="50" y="${topY + (i * lineHeight)}" fill="#003" font-size="${fontSizeInPt}pt" font-weight="${fontWeight}">${row}</text>`, ''
			);
		}

		const titleText = createTextSvgFromString(title, 35, 100, 70, 60, 700);
		const descriptionText = createTextSvgFromString(description, 65, 300, 50, 36, 400);

		let urlText = `<text style="font-family: sans-serif;" x="150" y="590" fill="#00f" font-size="36pt" font-weight="${pageUrl === '/' ? 700 : 400}">chrisstone.dev</text>`;
		if (pageUrl !== '/') {
			let sectionName = '';
			let underlineLength = 10;
			sectionName = pageTag || pageUrl?.replaceAll('/', '');
			sectionName = sectionName.charAt(0).toUpperCase() + sectionName?.slice(1);
			switch (sectionName) {
				case 'Thoughts':
					underlineLength = 165;
					break;
				case 'Speaking':
					underlineLength = 160;
					break;
				case 'Projects':
					underlineLength = 140;
					break;
				case 'Contact':
					underlineLength = 135;
					break;
			}
			urlText += `<text style="font-family: sans-serif;" x="1150" y="590" fill="#00f" font-size="36pt" font-weight="700" text-anchor="end">${sectionName}</text>`;
			urlText += `<line style="stroke: fuchsia; stroke-width: 5px;" x1="${1150 - underlineLength}" y1="610" x2="1150" y2="610"/>`;
			urlText += `<text style="font-family: sans-serif;" x="395" y="590" fill="#00f" font-size="36pt" font-weight="400">/ ${slug}</text>`;
		}

		let svg = `<svg width="1200" height="628" viewbox="0 0 1200 628" xmlns="http://www.w3.org/2000/svg">
	<rect x="0" y="0" width="1200" height="528" rx="0" ry="0" fill="#ddf" />
	<rect x="0" y="528" width="1200" height="100" rx="0" ry="0" fill="#cce" />
	<g>
		${titleText}
		${descriptionText}
		${urlText}
	</g>
</svg>`;

		const profileImage = await sharp("./src/img/chris-stone-square.png")
				.resize({width: 100, height: 100, fit: 'contain'})
				.toBuffer();

		await sharp(Buffer.from(svg))
				.resize(1200, 628)
				.composite([{input: profileImage, top: 528, left: 0}])
				.png()
				.toFile(`${targetDir}/${filename}.png`);

		return targetPreviewPath + `/${filename}.png`;
	});
	eleventyConfig.setLibrary('md', md);
	return {dir: {input: 'src', output: 'public'}};
}