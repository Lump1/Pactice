import styles from "./colorPicker.module.css"
import { getPaletteObj } from "../../Workers/jsonWorker";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Color } from "../Color/Color";
import { Header } from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { use } from "react";

export function ColorPicker(props) {
    const [paletteObj, setPaletteObj] = useState({ colors: [] });
    const [searchParams] = useSearchParams();
    const paletteReduxObject = useSelector((state) => state.palette.interractObj);
    let id = searchParams.get("id");

    useEffect(() => {
        if(paletteReduxObject.length == 0) return;

        const foundPalette = paletteReduxObject.find(obj => obj.id == id);
        if (foundPalette != undefined) {
            setPaletteObj(foundPalette);
        }
    }, [paletteReduxObject, searchParams]);

    return (
        <div className={styles.mainContainerUpper}>
            <Header paletteName={paletteObj.paletteName}></Header>
            <div className={styles.mainContainer}>
                {paletteObj.colors.length != 0 && paletteObj.colors.map(color => (
                    <Color key={color.color} color={color.color} colorName={color.name} />
                ))}
            </div>
        </div>

    );
}
