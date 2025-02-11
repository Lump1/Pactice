import { PickedColor } from "../PickedColor/PickedColor";
import { useState, useEffect } from "react";
import { useSpring, animated } from '@react-spring/web'
import { useSelector } from "react-redux";
import { useSound } from 'use-sound';
import styles from "./color.module.css";

export function Color({ color, colorName }) {
    const [isPicked, setIsPicked] = useState(false);
    const [isPickedAnimation, setIsPickedAnim] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [sound] = useSound(process.env.PUBLIC_URL + "/localData/src_notify.mp3", {
        volume: 0.25,
    })
    const isSound = useSelector(state => state.settings.isSoundOn);
    const AnimatedPickedColor = animated(PickedColor);
    
    const focusAnimation = useSpring({
        opacity: isFocused ? 0.9 : 0,
        config: { tension: 100, friction: 12 }
    })
    
    const pickedTransition = useSpring({
        opacity: isPickedAnimation ? 1 : 0,
        config: { tension: 100, friction: 12 }
    })

    useEffect(() => {
        if (isPicked) {
            navigator.clipboard.writeText(color);
            
            if(isSound == true) sound();

            setIsPickedAnim(true);
            const timeout1 = setTimeout(() => setIsPickedAnim(false), 1500);
            const timeout2 = setTimeout(() => setIsPicked(false), 2000);
            return () => {clearTimeout(timeout1); clearTimeout(timeout2);};
        }
    }, [isPicked]);

    return (
        <div onClick={() => setIsPicked(true)} onMouseEnter={() => setIsFocused(true)} onMouseLeave={() => setIsFocused(false)} className={styles.color} id={colorName} style={{ backgroundColor: color }}>
            <animated.div className={styles.copyButton} style={{...focusAnimation}}>COPY</animated.div>
            <div className={styles.colorName}>{colorName[0].toUpperCase().toString() + colorName.substring(1, colorName.length)}</div>

            {isPicked && <AnimatedPickedColor style={{...pickedTransition}} color={color} colorName={colorName} />}
        </div>
    );
}
