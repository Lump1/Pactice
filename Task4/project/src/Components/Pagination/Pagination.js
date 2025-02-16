import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./pagination.module.css";
import store from "../../redux/store";
import { setActPage } from "../../redux/postsSlice/postsSlice";

export function Pagination({dbWorker}) {
    const [contentState, setContent] = useState([]);
    const pagesSelector = useSelector(state => state.posts?.pagesCount);
    const actPageSelector = useSelector(state => state.posts?.actualPage);
    const actFilters = useSelector(state => state.posts?.searchFilters);

    useEffect(() => {
        const content = [];
        for (let i = 0; i < pagesSelector; i++) {
            content.push(
                <div onClick={() => store.dispatch(setActPage(i))} className={actPageSelector == i ? styles.pagSelectedElement : styles.pagElement}>{i + 1}</div>
            );
        }

        setContent(content);
    }, [pagesSelector, actPageSelector]);

    useEffect(() => {
        dbWorker.getPosts(actPageSelector, actFilters);
    }, [actPageSelector])

    return (
        <div className={styles.pagContainer}>
            {
                contentState
            }
        </div>
    )
}