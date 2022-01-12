const getAllLinks = async () => {
    const pageOneLinks = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&pageids=49387265&prop=links&pllimit=max&format=json&origin=*`
        ).then(res => res.json())
        .then(data => JSON.stringify(data))
        .catch(error => console.log(`error: ${error}`));
    const pageTwoLinks = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&pageids=49387265&prop=links&format=json&origin=*&pllimit=max&plcontinue=49387265%7C0%7CThe_Bonfire_of_the_Manatees`
    ).then(res => res.json())
        .then(data => JSON.stringify(data))
        .catch(error => console.log(`error: ${error}`))
    
    console.log(`Page One:\n`, pageOneLinks);
    console.log(`Page Two:\n`,pageTwoLinks);
}

getAllLinks();