import Head from "next/head";
import Link from "next/link";

export default function Music() {
    return (
        <div>
        <Head>
            <title>Jonathan Songs</title>
            <meta name="keywords" content="Jonathan, Ribeiro, Galli, Portfolio, Music, Songs, Composer, Composition, Guitar, Soundtrack, Funk, Groove, Orchestra" />
            <meta name="description" content="The Jonathan Galli's music portfolio website." />
            <meta name="author" content="Jonathan Galli" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container">
            <div>Soon...</div>
            <Link href="/">
                <a>Back</a>
            </Link>
        </div>
        </div>
    )
}