const getAllLinks = async () => {
    // test case for single title search
    // const test = await fetch(`
    // https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=revisions&rvprop=content&rvsection=0&titles=$pringfield_(or,_How_I_Learned_to_Stop_Worrying_and_Love_Legalized_Gambling)
    // `
    // ).then(res => res.json())
    //     // .then(data => console.log(data));
    //     .then(data => console.log(data.query.pages['1831030'].revisions[0]['*']));

    const pageOne = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&pageids=49387265&prop=links&pllimit=max&format=json&origin=*`
        ).then(res => res.json())
        .then(data => JSON.stringify(data))
        .catch(error => console.log(`error: ${error}`));
    const pageTwo = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&pageids=49387265&prop=links&format=json&origin=*&pllimit=max&plcontinue=49387265%7C0%7CThe_Bonfire_of_the_Manatees`
    ).then(res => res.json())
        .then(data => JSON.stringify(data))
        .catch(error => console.log(`error: ${error}`));

    parseJsonData([pageOne, pageTwo]);
};


const parseJsonData = ([pageOne, pageTwo]) => {
    const pageOneTitles = JSON.parse(pageOne)?.query.pages['49387265'].links;
    const pageTwoTitles = JSON.parse(pageTwo)?.query.pages['49387265'].links;
    buildUrls(pageOneTitles.concat(pageTwoTitles));
};

const buildUrls = (allTitles) => {
    // 682 links in total
    const pageUrls = allTitles.map(title =>
        `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&titles=${normalize(title.title)}`
    );
    // getPageData(pageUrls);
};

const normalize = (title) => {
    /* take care of 
        - spaces 
        - single quote '
        - question mark ?
        - ampersand &
        - double quote -- every title is wrapped in single quotes, unless there is 
                          an apostrophe in the title
    */
    // console.log(title);
    const temp = []
    for (let index = 0; index < title.length; index++) {
        let element = title[index];
        switch (element) {
            case ' ':
                element = '_';
                break;
            case '\'':
                element = '%27';
                break;
            case '?':
                element = '%3F';
                break;
            case '&':
                element = '%26';
                break;
            case '"':
                element = '%22';
                break;
            default:
                break;
        }

        temp.push(element)
    }
    return temp.join('');

};

const getPageData = async (urls) => {
    // "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&titles=A_Streetcar_Named_Marge"
    // "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&titles=A_Tale_of_Two_Springfields"
    // "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&titles=Adam_I._Lapidus"
    // "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&titles=Al_Jean"
    // "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&titles=Alan_Smart"
    // "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&titles=All%27s_Fair_in_Oven_War"
    // "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=content&rvsection=0&titles=All_About_Lisa"
    console.log(urls);
    const pageOne = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&pageids=49387265&prop=links&pllimit=max&format=json&origin=*`
    ).then(res => res.json())
        .then(data => JSON.stringify(data))
        .catch(error => console.log(`error: ${error}`));
}

getPageData();


getAllLinks();


/**
 * shape of data
 * 
 * title: string - title of episode √
 * pageid: number - id of page
 * link: string - URL of wikipedia page √
 * 
 * 
 * 
 * normalize url so that fetching is faster √
 * visit each URL and get pageid
 * store episode info in either DB or Google Sheet file
 * 
 * 
 * 
 */