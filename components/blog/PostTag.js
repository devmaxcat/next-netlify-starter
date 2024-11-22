import Link from "next/link";

export default function PostTag({tag}) {
    return (
        <Link aria-label={`show other posts tagged with ${tag.fields.name}`} href={`/blog?filter=${tag.fields.name}`} className="post-tag">
            #{tag.fields.name}
        </Link>
    )
}