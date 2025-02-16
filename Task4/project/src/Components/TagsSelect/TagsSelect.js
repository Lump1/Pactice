import { useSelector } from "react-redux"
import styles from "./tags.module.css"

export function TagsSelect({ dbWorker }) {
    const tags = useSelector(state => state.posts?.tags);
    const actPageSelector = useSelector(state => state.posts?.actualPage);
    const filtersSelector = useSelector(state => state.posts?.searchFilters);

    const inputChanged = (event) => {
        const value = event.target.value;

        if (value === "") {
            dbWorker.clearFilter("theme");
        }

        let actFilters = { ...filtersSelector, theme: value };

        dbWorker.getPosts(actPageSelector, actFilters);
    };

    return (
        <div className={styles.customSelectContainer}>
            <select className={styles.customSelect} onChange={(ev) => inputChanged(ev)}>
                <option value="" disabled selected>Pick the option</option>
                {
                     tags.length > 0 && 
                     tags.map(tag => {
                        return (<option option={tag} >{tag}</option>)
                    })
                }
            </select>
        </div>
    )
}