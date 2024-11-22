import client from "database"

import Image from "next/image"
import { useRouter } from "next/router"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Link from "next/link"
import PostTag from "@components/blog/PostTag"
import RichTextRenderer from "@components/blog/RichTextRenderer"
import moment from "moment/moment"
import ContingentImage from "@components/ContingentImage"



export default function blogPage({ post }) {
    const router = useRouter()
    return (
        <>


            <main id="content">
                <div className="blog-content">
                    <button className="back-button no-style" type="button" onClick={() => router.back()}>
                        <span class="material-symbols-outlined">
                            arrow_back
                        </span>
                    </button>
                    <h1>
                        {post.fields.title}
                    </h1>
                    <div className="blog-info-bar">
                        <div className="blog-date">
                            {moment().format('MMM Do, YYYY')}
                        </div>
                        <div className="blog-tags">
                            {post.fields?.tags?.map((t) => (<PostTag tag={t} />))}
                        </div>

                    </div>


                    
                    <ContingentImage unique={post.fields.slug} className="blog-cover" width={3000} height={1000} src={'https:' + post.fields?.image?.fields?.file?.url} loading="lazy"></ContingentImage>




                    <RichTextRenderer className="blog-body" richTextDocument={post.fields.content}></RichTextRenderer>
                </div>


            </main>

        </>

    )
}


export async function getStaticPaths() {
    const respone = await client.getEntries({ content_type: 'post' })

    const posts = respone.items

    const paths = posts.map((e) => ({
        params: { slug: e.fields.slug }
    }))

    return { paths, fallback: false }

}

export async function getStaticProps({ params }) {
    const response = await client.getEntries({ 'fields.slug': params.slug, content_type: 'post' })
    const post = response.items[0]

    return {
        props: {
            post,
        },
    }
}