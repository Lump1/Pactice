import { useEffect, useState } from "react";
import { Palette } from "../Palette/Palette"
import { getPaletteObj } from "../../Workers/jsonWorker";
import styles from "./home.module.css"
import { useSelector } from "react-redux";

// function temp_func() {
//     let jsonFile = JSON.parse(process.env.PUBLIC_URL + "/localData/pallete.json");
//     let palette = jsonFile.find(obj => {
//         if (obj.id == id) return obj;
//     });
// }

export function Home(props) {
    const [palettes, setPalettes] = useState([]);
    const intObj = useSelector(state => state.palette.interractObj);

    useEffect(() => {
        if (Array.isArray(intObj)) {
            setPalettes(intObj);
        } else {
            setPalettes([]);
        }
    }, [intObj]);


    return (
        <div className={styles.upperContainer}>
            <div className={styles.mainContainer}>
                {
                    palettes.map(item => {
                        return (
                            <Palette name={item.paletteName} id={item.id} emoji={item.emoji} colors={item.colors}></Palette>
                        )
                    })
                }
            </div>
        </div>

    )
}