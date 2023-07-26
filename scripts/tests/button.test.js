/**
 * @jest-environment jsdom
 */

// NPM i jest-nevironment-jsdom as installing command (Jest-28 does not include JSDOM)

const buttonClick = require("../button");

beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html','utf-8');
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test('H1 should exist', () => {
        expect(document.getElementsByTagName('h1').length).toBe(1);
    });
});