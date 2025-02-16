import { useSelector } from 'react-redux';
import { Post } from '../Post/Post';
import { Pagination } from '../Pagination/Pagination';
import styles from "./postscontainer.module.css"
import { Search } from '../Search/Search';
import { TagsSelect } from '../TagsSelect/TagsSelect';

export function PostContainer({dbWorker}) {
    const postsSelector = useSelector(state => state.posts?.posts || []);

    return (
        <div className={styles.postsUpperContainer}>
            <div style={{width: "100%", display: "flex"}}>
                <TagsSelect dbWorker={dbWorker}></TagsSelect>
                <Search dbWorker={dbWorker}></Search>
            </div>
            <div className={styles.postsContainer}>
                {
                    postsSelector.length > 0 &&
                    postsSelector.map(post => {
                        return (
                            <Post
                                title={post.title}
                                imgUrl={post.postImageUrl}
                                craft={post.craft}
                                description={post.description}
                                account={post.account}
                                date={post.date}
                                id={post.id}
                            />
                        )
                    })
                }
            </div>
            <Pagination dbWorker={dbWorker}></Pagination>
        </div>
    )

}