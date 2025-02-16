import styles from "./sorting.module.css"
import { useSelector } from "react-redux";

export function Sorting({ dbWorker }) {
    const actPageSelector = useSelector(state => state.posts?.actualPage);
    const filtersSelector = useSelector(state => state.posts?.searchFilters);

    const inputChanged = (event) => {
        const value = event.target.value;

        if (value === "") {
            dbWorker.clearFilter("sortType");
        }

        let actFilters = { ...filtersSelector, sortType: value };

        dbWorker.getPosts(actPageSelector, actFilters);
    };

    return (
        <div className={styles.customSelectContainer}>
            <select className={styles.customSelect} onChange={(ev) => inputChanged(ev)}>
                <option value="" selected>Pick the option</option>
                <option value="name">Sort by name</option>
                <option value="date">Sort by date</option>
            </select>
        </div>
    )
}