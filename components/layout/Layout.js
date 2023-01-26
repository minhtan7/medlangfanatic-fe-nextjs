import Head from "next/head"
import { CourseHeader, MainHeader } from "./Header"

import Footer from "./Footer"
import { useEffect, useState } from "react"


const metaDecorator = {
    hostname: "https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app"
}

export default function Layout({ title, description, children }) {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])
    return loaded && (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <link rel='canonical' href="https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app" />
                {/* <link rel='canonical' href={metaDecorator.hostname + window.location.pathname + window.location.search} /> */}
                {/* <meta
                    property="og:url"
                    content={metaDecorator.hostname + window.location.pathname + window.location.search}
                /> */}
                <meta
                    property="og:url"
                    content="https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app"
                />
                <meta property="og:title" content={title} />
                <meta property="og:image" content="https://res.cloudinary.com/tanvo/image/upload/v1674322596/medlangfanatic/courses/mavl/mavl-thumbnail_ker6a6.svg" />
                <meta property="og:description" content={description} />
            </Head>
            <MainHeader />
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "Med Lang Fanatic",
    description: "Med Lang Fanatic | Khóa học tiếng Anh Y khoa online. Cải thiện khả năng ngoại ngữ và nâng cao kỹ năng giao tiếp trong Y khoa.",
}
