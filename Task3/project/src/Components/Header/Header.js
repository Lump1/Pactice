import styles from "./header.module.css"
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchBoolState } from "../../redux/Slices/settingsSlice.ts";

export function Header({ paletteName }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const soundState = useSelector(state => state.settings.isSoundOn);

    useEffect(() => {
        console.log(soundState);
    }, [soundState])

    return (
        <div className={styles.header}>
            <div className={styles.backButton} onClick={() => navigate("/")}>← Back</div>
            <div className={styles.paletteName}>{paletteName}</div>
            <div className={styles.soundButton} onClick={() => dispatch(switchBoolState("isSoundOn"))}>{soundState ? "🔈" : "🔇"}</div>
        </div>
    )
}