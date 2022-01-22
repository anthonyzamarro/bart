const axios = require('axios');
const Cheerio = require('cheerio');

const getHTML = async () => {
    try {
        const html = await axios.default.get('https://simpsons.fandom.com/wiki/List_of_chalkboard_gags');
        extractChalkBoardGag(html.data);
    } catch (error) {
        console.log(error);
    };
};

const extractChalkBoardGag = (html) => {
    const $ = Cheerio.load(html);
    const nodes = $('.wikitable tbody tr td b');
    const gags = [];
    for (let index = 0; index < nodes.length; index++) {
        gags.push($(nodes[index]).html());
    };
    console.log(gags.length);
};

getHTML();