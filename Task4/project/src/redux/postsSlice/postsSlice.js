import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: {},
    pagesCount: 0,
    actualPage: 0,
    searchFilters: {},
    tags: {}
};

const postssSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            if (state.posts == undefined) console.error("There's no state! action: " + action.payload);
            else {
                state.posts = action.payload;
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setPagesCount: (state, action) => {
            state.pagesCount = action.payload;
        },
        setActPage: (state, action) => {
            state.actualPage = action.payload;
        },
        setFilters: (state, action) => {
            state.searchFilters = action.payload;
        },
        clearFilterByName: (state, action) => {
            if(Object.keys(state.searchFilters).includes(action.payload))
                delete state.searchFilters[action.payload];
        },
        setTags: (state, action) => {
            state.tags = action.payload;
        }
    },
});

export const { addPost, setPosts, setPagesCount, setActPage, setFilters, clearFilterByName, setTags } = postssSlice.actions;
export default postssSlice.reducer;