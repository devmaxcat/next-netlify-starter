import Image from "next/image";
import Link from "next/link";
import PostTag from "./PostTag";
import ContingentImage from "@components/ContingentImage";




export default function PostItem({ post, isCompact }) {
    return (
        <div className="blog-post-item" aria-label={post.fields.title} >
            <Link aria-hidden tabIndex={-1} href={`/blog/${post.fields.slug}`}> 
            <ContingentImage unique={post.fields.slug} className="blog-cover" width={3000} height={1000} src={'https:' + post.fields?.image?.fields?.file?.url} loading="lazy"></ContingentImage>
                {/* <Image className="blog-cover" width={3000} height={1000} alt={post.fields.image.fields.description} src={'https:' + post.fields.image.fields.file.url} loading="lazy"></Image> */}
            </Link>
            <div>
                <Link href={`/blog/${post.fields.slug}`} className="blog-title">
                    {post.fields.title}
                </Link>
                <div className="blog-description">
                    {post.fields.description}
                </div>
                <div className="blog-tags">
                    {post.fields?.tags?.map((t) => (<PostTag tag={t} />))}
                </div>

            </div>



        </div>
    )
}