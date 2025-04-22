import {describe, expect, test} from "@jest/globals";
import {generatePreview, otherPageLinksToThisOne} from "../src/_data/utils.js";
import {backlinks} from "../src/_data/eleventyComputed.js";

describe('backlinks tests', () => {
	test('standard test', async () => {
		const data = {
			collections: {
				notes: [
					{
						data: {title: 'Good Title'},
						template: {
							read: async () => ({
								content: 'Good Title is an article about things.\n\n' +
										'It contains [content](/content) that includes a link to [testing backlinks](/testing-backlinks).',
							}),
						},
						url: '/good-test',
					}, {
						data: {title: 'Bad Title'},
						template: {
							read: async () => ({
								content: 'content that does not include a link to any page.',
							}),
						},
						url: '/bad-test',
					}
				],
				speaking: [],
			},
			page: {filePathStem: '/testing-backlinks'},
		};
		const expected = {
			url: '/good-test',
			title: 'Good Title',
			preview: 'It contains content that includes a link to **testing backlinks**.'
		};
		expect(await backlinks(data)).toStrictEqual([expected]);
	});
});

describe('otherPageLinksToThisOne tests', () => {
	test.each([
		['/testing-backlinks', true],
		['/Testing-Backlinks', true],
		['/testing backlinks', false],
		['/testing_backlinks', false],
		['/tésting-baçklinks', false],
		['/testing-backlinks-and-other-things', false],
		['/other-things-and-testing-backlinks', false],
	])(`when checking if '%s' links to '/testing-backlinks', it should be %s`,
			(arg, expected) => {
				expect(otherPageLinksToThisOne([`${arg}`], '/testing-backlinks')).toBe(expected);
			}
	);
});

describe('generatePreview tests', () => {
	test.each([
		['Remove link to [other page](/other-page).', 'Remove link to other page.'],
		['Remove links to [multiple](/multiple) [pages](/pages).', 'Remove links to multiple pages.'],
		['Adds bold to [matched page](/matched-page).', 'Adds bold to **matched page**.'],
		['**Title** adds bold to [matched page](/matched-page).', '**Title** adds bold to **matched page**.'],
		['**Title**[^1] adds bold to [matched page](/matched-page).', '**Title** adds bold to **matched page**.'],
	])(`when checking if '%s' links to '/testing-backlinks', it should be %s`,
			(paragraph, expected) => {
				expect(generatePreview(paragraph, '/matched-page')).toBe(expected);
			}
	);
});