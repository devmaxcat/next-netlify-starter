


import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import Link from 'next/link'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <head>

                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
            </head>
            <body>
                <div className='accessibility-skip'>
                    <Link tabIndex={1} href={'#content'}>
                        Skip to main content
                    </Link>

                </div>

                <Main />
                {/* <Image alt='' className="note-a" width={150} height={150} src={'/Note1.svg'}></Image>
                <Image alt='' className="note-b" width={150} height={150} src={'/Note2.svg'}></Image>
                <Image alt='' className="note-c" width={150} height={150} src={'/Note3.svg'}></Image> */}
                <NextScript />
            </body>
        </Html>
    )
}
