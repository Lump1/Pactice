import idClassCounter from "./idClassCounter.js";

var Enumerator = new idClassCounter();
await Enumerator.EnumerateAllSpecificById("enumerable")

var index = 1;
var element;

const event = (index, plusElement) => {
    let changeElement = document.getElementById("changeableTextFreqQuestion" + index);
    if(changeElement.style == null || changeElement.style.display == "none") {
        changeElement.style.display = "block";
        plusElement.style.rotate = "45deg";
    }
    else {
        changeElement.style.display = "none"
        plusElement.style.rotate = "0deg";
    }
};

do {
    let tempInd = index;

    element = document.getElementById("changeableTextExploreButt" + tempInd);

    let tempElement = element;

    if(element == null) {
        break;
    }

    element.addEventListener("click", (e) => event(tempInd, tempElement));

    index += 1;

} while(element != null)


