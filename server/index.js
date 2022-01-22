const axios = require('axios');
const Cheerio = require('cheerio');

const getHTML = async () => {
    try {
        const html = await axios.default.get('https://simpsons.fandom.com/wiki/List_of_chalkboard_gags');
        const gags = extractChalkBoardGag(html.data);
        if (gags.length) {
            return gags;
        } else {
            console.log('something wrong extracting data');
        };
    } catch (error) {
        console.log(error);
    };
};

const extractChalkBoardGag = (html) => {
    const gags = [];
    const $ = Cheerio.load(html);
    const nodes = $('.wikitable tbody tr td b');
    for (let index = 0; index < nodes.length; index++) {
        gags.push($(nodes[index]).html());
    };
    // console.log(gags);
    return gags;
};

exports.data = getHTML();
