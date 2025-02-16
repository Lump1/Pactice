import { useSelector } from "react-redux";
import styles from "./search.module.css";

export function Search({ dbWorker }) {
    const actPageSelector = useSelector(state => state.posts?.actualPage);
    const filtersSelector = useSelector(state => state.posts?.searchFilters);

    const inputChanged = (event) => {
        const value = event.target.value;

        if (value === "") {
            dbWorker.clearFilter("searchValue");
        }

        let actFilters = { ...filtersSelector, searchValue: value };

        dbWorker.getPosts(actPageSelector, actFilters);
    };

    return (
        <div className={styles.searchBar}>
            <input 
                className={styles.inputBar} 
                onChange={inputChanged} 
                placeholder="Search..."
            />
        </div>
    );
}
