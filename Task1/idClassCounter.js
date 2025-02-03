export default class idClassCounter {
    idsMap = new Map();

    async EnumerateAll() {
        var body = document.getElementsByTagName("body");
        
        this.#enumerate(body[0]);
    }
    async EnumerateSpecific(startElement) {
        this.#enumerate(startElement);
    }

    async EnumerateAllSpecificById(elementId) {
        document.querySelectorAll("#" + elementId).forEach(item => this.#enumerate(item));
    }

    // static addEventToEnumerable(elementShortId, type, event, ...eventArgs) {
    //     var index = 1;
    //     var element;

    //     do {
    //         element = document.getElementById(elementShortId + "-" + index);
    //         if(element == null) {
    //             break;
    //         }

    //         element.addEventListener(type, event);
    //     } while(true)
    // }

    #enumerate(node) {
        const returnEnumarate = (chNodes) => {
            if(chNodes == null) return;

            for(let i = 0; i < chNodes.length; i++) {
                this.#enumerate(chNodes[i]);
            }
        };

        if(node == undefined) {
            return;
        }

        if((node.id == null || node.id == "" || node.id == undefined) && (node.classList == undefined || node.classList.length == 0)) {
            return returnEnumarate(node.childNodes);
        }

        var nodeIdArr = node.id.split('.');
        if(nodeIdArr[0] == "automatic") {
            node.id = nodeIdArr[1] + this.#increaseMapper(nodeIdArr[1]);
        }

        for(let i = 0; i < node.classList.length; i++) {
            let splitedClass = node.classList[i].split(".");
            if(splitedClass[0] == "automatic"){
                node.classList.splice(i, 1);
                node.classList.push(splitedClass[1] + '-' + this.#increaseMapper(splitedClass[1]))
            }
        }

        returnEnumarate(node.childNodes);
    }

    #increaseMapper(element) {
        let nodeIdInMapper = this.idsMap.get(element);

            if(nodeIdInMapper == undefined) {
                nodeIdInMapper = 0;
            } 

            this.idsMap.set(element, nodeIdInMapper + 1);
            return nodeIdInMapper + 1;
    }
}