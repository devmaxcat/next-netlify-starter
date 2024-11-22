import Image from "next/image";

export default function about() {
    return (
        <main id="content" className="about">
              <h1>About</h1>
            <div className="flex">
                <div>
                <p>
                    I'm <strong>Chance</strong>, an aspiring software developer with strong conceptual understanding of programming and experience with multiple applications and platforms.
                </p>
                <p>
                    I'm always trying to learn new things, better myself, and bring up others.
                </p>
                <p>Currently I'm learning C++.</p>
                </div>
                <Image className="self-art" width={1000} height={1000} src={'/me.webp'}></Image>
             
            </div>

           

        </main>
    )
}