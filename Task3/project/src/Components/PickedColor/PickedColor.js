import { useState } from "react";
import styles from "./pickedColor.module.css"

export function PickedColor({color, name, style}) {
    const wordsForSelect = ["PASTE ME!", "RIGHT ONE!", "COPIED!", "IT'LL ROCK!", "GOT IT!"];
    const [randomWord] = useState(wordsForSelect[Math.floor(Math.random() * wordsForSelect.length)]);
    
    return (
        <div className={styles.mainContainer} style={{...style, backgroundColor: color}}>
            <div className={styles.contentContainer}>
                <p className={styles.maintext}>
                    {randomWord}
                </p>
            </div>
            <p className={styles.subtext}>
                {`${color}`}
            </p>
        </div>
    )
}