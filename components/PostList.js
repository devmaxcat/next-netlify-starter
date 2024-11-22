import PostItem from './PostItem'
import styles from './PostList.module.css'

export default function PostList({ posts }) {

    return (
        <div className={styles.post_list}>

            {posts.map((post) => <PostItem post={post}></PostItem>)}

        </div>
    )
}
