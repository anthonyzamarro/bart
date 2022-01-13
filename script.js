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
    const pageOneLinks = JSON.parse(pageOne)?.query.pages['49387265'].links;
    const pageTwoLinks = JSON.parse(pageTwo)?.query.pages['49387265'].links;
    buildUrls({ pageOneLinks });
};

const buildUrls = ({ pageOneLinks }) => {
    const pageUrls = pageOneLinks.map(link => {
        return `https://en.wikipedia.org/wiki/api.php?action=query&titles=${link.title}&prop=pageprops&format=json&origin=*`
    });
    console.log(pageUrls);
};

getAllLinks();


/**
 * shape of data
 * 
 * title: string - title of episode
 * pageid: number - id of page
 * link: string - URL of wikipedia page √ 
 * 
 */