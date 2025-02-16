import store from "../redux/store";
import {} from "lowdb"
import { setPosts, setPagesCount, setFilters, clearFilterByName, setTags } from "../redux/postsSlice/postsSlice";      

export class dbWorker {
    baseUrl: string;

    constructor(url = "http://localhost:3001/") {
        this.baseUrl = url;
    }

    async getPosts(pageNumber : number = 0, filters : object = {}) {
        let requestLink = this.baseUrl + `posts/${pageNumber}/filters?`;
        this.#setFilters(filters);

        Object.keys(filters).forEach(key => {
            requestLink += `${key}=${filters[key]}&`;
        });

        await fetch(requestLink).then(async (data) => {
            const jsonData = await data.json();
            this.#setPostsState(jsonData["posts"]);
            this.#setPagesState(jsonData["pagesCount"])
        }).catch(error => console.log(error));
    }

    async getPagesCount() {
        let requestLink = this.baseUrl + "posts/pageCount";
        fetch(requestLink).then(async (data) => {
            const jsonData = await data.json();
            this.#setPagesState(jsonData["pagesCount"]);
        }).catch(error => console.log(error));
    }

    async getAllTags() {
        let requestLink = this.baseUrl + "posts/tags";
        fetch(requestLink).then(async (data) => {
            const jsonData = await data.json();
            console.log(jsonData);
            this.#setAllTags(jsonData);
        }).catch(error => console.log(error));
    }

    clearFilter(filterName : string) {
        this.#clearFilter(filterName);
    }

    

    #setPostsState(posts: object): void {
        store.dispatch(setPosts(posts));
    }
    #setPagesState(pagesCount: number) {
        store.dispatch(setPagesCount(pagesCount))
    }
    #setFilters(filters: object) {
        store.dispatch(setFilters(filters));
    }
    #setAllTags(tags: object) {
        store.dispatch(setTags(tags));
    }
    #clearFilter(filterName: string) {
        store.dispatch(clearFilterByName(filterName));
    }
}