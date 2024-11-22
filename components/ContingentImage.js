'use client'

import Image from "next/image";
import generateAvatar from "profile-generator-js";
import { useEffect, useState } from "react";

export default function ContingentImage({className, src, width, height, alt, loading, unique }) {
    const [source, setSource] = useState('');
    console.log(source)
    useEffect(() => {
        if (src && src !== 'https:undefined') {
            setSource(src)
        } else {
            if (typeof document !== 'undefined') {
                setSource(generateAvatar(unique || alt,' '));
            }
        }
    }, [src])

    return (
        <Image className={className} src={source} width={width} height={height} alt={alt} loading={loading} />
    )
}