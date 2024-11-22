
import PostItem from "@components/blog/PostItem"
import { useState } from "react"

import client from "database"
import { useRouter } from "next/router"
import Link from "next/link"

const filters = {
    all: () => {
        return function (e) {
            return true
        }
    },
    anyTags: (tags) => {
        return function (e) {
            return e.fields?.tags?.some(tag => tags.includes(tag.fields.name));
        }
    },
    allTags: (tags) => {
        return function (e) {
            return tags.every(testingName =>
                e.fields?.tags?.some(tag => tag.fields.name === testingName)
            );
        }
    }

}


export default function blog({ posts }) {
    const [isCompact, setCompact] = useState(false)
    const [filter, setFilter] = useState(filters.all())
    const router = useRouter()

    let filteredPosts;
    if (router.query.filter) {

        filteredPosts = posts.filter(filters.anyTags([router.query.filter]))
    } else {
        filteredPosts = posts;
    }
    return (
        <main id="content">
            <div className={`blog-list ${isCompact ? 'compact' : ''}`}>
                <div className="topbar">


                    <div className="active-filters">
                        <div className={`active-filter ${router.query.filter ? '' : 'hide'}`}>
                            {router.query.filter}
                            <Link class="material-symbols-outlined" aria-label="clear filters" href={'blog'} >
                               
                                    close
                              
                            </Link>
                        </div>
                    </div>
                    <div class="toggle-container">

                        <input type="radio" name="toggle" id="option1" checked={!isCompact} />
                        <input type="radio" name="toggle" id="option2" checked={isCompact} />


                        <div class="slider"></div>


                        <label for="option1" onClick={() => setCompact(false)}>Pretty</label>
                        <label for="option2" onClick={() => setCompact(true)}>Compact</label>
                    </div>
                </div>
                {filteredPosts.map((p) => (<PostItem post={p} />))}
            </div>

        </main>

    )
}


export async function getStaticProps() {
    const response = await client.getEntries({ content_type: 'post' })
    const posts = response.items

    return {
        props: {
            posts,
        },
    }
}
