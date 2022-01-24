export const fetchData = async () => {
    try {
        const gag = await fetch("/api")
            .then((res) => res.json())
            .then((data) => data.randomGag);
        return gag
    } catch (error) {
        console.log(`fetch error ${error}`);
    }
}