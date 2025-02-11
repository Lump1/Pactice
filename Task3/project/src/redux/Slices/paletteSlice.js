import { createSlice } from "@reduxjs/toolkit";
import { getPaletteObj } from "../../Workers/jsonWorker";

const initialState = {
    interractObj: {length: 0},
};

const paletteSlice = createSlice({
    name: "palette",
    initialState,
    reducers: {
        setObject: (state, action) => {
            state.interractObj = action.payload;
        }
        // getFullObject: (state) => {
        //     return state.interractObj;
        // },
        // getPaletteById: (state, action) => {
        //     const foundPalette = state.interractObj.find(obj => obj.id == action.payload);
        //     if (foundPalette != undefined) {
        //         return foundPalette;
        //     }

        //     throw new Error("Palette wasn't founded");
        // }
    },
});

export const { setObject } = paletteSlice.actions;
export default paletteSlice.reducer;