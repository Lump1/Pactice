"use strict";

function searchByName(searchValue, data, difPercentage) {
    const searchedData = data
        .filter(post => post && post.title)
        .sort((post1, post2) => compareTwoStrings(post1.title, searchValue) - compareTwoStrings(post2.title, searchValue));
    return searchedData;
}
function compareTwoStrings(str1, str2) {
    const charFreq1 = {};
    const charFreq2 = {};
    for (const char of str1)
        charFreq1[char.toLowerCase()] = (charFreq1[char.toLowerCase()] || 0) + 1;
    for (const char of str2)
        charFreq2[char.toLowerCase()] = (charFreq2[char.toLowerCase()] || 0) + 1;
    const allChars = new Set([...Object.keys(charFreq1), ...Object.keys(charFreq2)]);
    let totalDifference = 0;
    for (const char of allChars) {
        totalDifference += Math.abs((charFreq1[char] || 0) - (charFreq2[char] || 0));
    }
    return totalDifference / (str1.length + str2.length);
}
function sortByType(data, sortType) {
    switch (sortType) {
        case "date":
            return data.sort((post1, post2) => Date.parse(post1.date) - Date.parse(post2.date));
        case "name":
            return data.sort((post1, post2) => ('' + post1.title).localeCompare(post2.title));
        default:
            return data;
    }
}

export { sortByType, searchByName}
