async function getPaletteObj(url = process.env.PUBLIC_URL + "/localData/pallete.json") {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
}

export { getPaletteObj }