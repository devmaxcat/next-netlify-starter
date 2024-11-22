export default function BlogList({ posts }) {
    { posts.map((p) => (<PostItem post={p} />)) }
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