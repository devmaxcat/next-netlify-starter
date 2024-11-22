import Image from 'next/image'
import styles from './PostItem.module.css'
import generateAvatar from 'profile-generator-js';



export default function PostItem({ post }) {
    console.log(post.fields)
    return (
        <div className={styles.post_item}>

            <div className={styles.cover_image}>
                <ContingentImage className={styles.cover_image} src={post.fields?.image?.fields?.file?.url}></ContingentImage>
              
            </div>
            <div className={styles.post_info}>

                <div className='bar'>
                    <div className={styles.title}>
                        {post.fields.title}
                    </div>

                </div>

                <div className={styles.description}>
                    {post.fields.description}
                </div>
                <div className='y-spacer'>

                </div>
                <div className='bar left'>
                    {post.fields.tags?.map((tag) => (<div className={styles.tag}>{tag.fields.name}</div>))}
                </div>
            </div>



        </div>
    )
}
