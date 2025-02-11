import styles from "./palette.module.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useSpring, animated } from '@react-spring/web'


export function Palette({ name, id, emoji, colors }) {
    const navigate = useNavigate();
    const [focused, setFocused] = useState(false);

    const focusAnimation = useSpring({
    //   transform: focused ? "scale(1.05)" : "scale(1)",
      boxShadow: focused ? "0px 5px 10px 5px rgba(0, 0, 0, 0.25)" : "0px 0px 0px 0px rgba(0,0,0,0.25)",
      config: { tension: 300, friction: 12 },
    });

    const selectedPalette = () => {
        navigate("/color-picker?id=" + id)
    }

    // useEffect(() => {
    //     console.log(focused);
    // }, [setFocused])

    return (
        <animated.div tabIndex={0} id={id} onMouseEnter={() => setFocused(true)} onMouseLeave={() => setFocused(false)} style={{...focusAnimation }} onClick={selectedPalette} className={styles.paletteContainer}>
            <div className={styles.colorsContainer}>
                {
                    colors.map(color => {
                        return (
                            <div className={styles.color} style={{ backgroundColor: color.color }}></div>
                        )
                    })
                }
            </div>
            <div className={styles.bottomContainer}>
                <p className={styles.bottomText}>
                    {
                        name
                    }
                </p>
                <p className={styles.bottomText}>
                    {
                        emoji
                    }
                </p>
            </div>
        </animated.div>
    )

}