const {otherPageLinksToThisOne} = require("../src/_data/utils");
const {backlinks} = require("../src/_data/eleventyComputed");
const {test, expect, describe} = require("@jest/globals");

test('something hopefully works', () => {
	const data = {
		collections: {
			thoughts: [
				{
					data: {title: 'Good Title'},
					template: {
						frontMatter: {
							content: 'content that includes a link to [testing backlinks](/testing-backlinks).',
						},
					},
					url: '/good-test',
				}, {
					data: {title: 'Bad Title'},
					template: {
						frontMatter: {
							content: 'content that does not include a link to any page.',
						},
					},
					url: '/bad-test',
				}
			],
			speaking: [],
		},
		page: {filePathStem: '/testing-backlinks'},
	};
	expect(backlinks(data)).toStrictEqual([{url: '/good-test', title: 'Good Title'}]);
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