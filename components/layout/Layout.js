import Head from "next/head"
import { CourseHeader, MainHeader } from "./Header"

import Footer from "./Footer"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"


const metaDecorator = {
    hostname: "https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app"
}

export default function Layout({ title, description, children }) {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])
    const router = useRouter()
    const path = router.pathname.split("/")[1]
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                {/* <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                {/* <link rel='canonical' href={metaDecorator.hostname + window.location.pathname + window.location.search} /> */}
                {/* <meta
                    property="og:url"
                    content={metaDecorator.hostname + window.location.pathname + window.location.search}
                /> */}
                {/* <meta
                    property="og:url"
                    content="https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app"
                />
                <meta property="og:title" content={title} />
                <meta property="og:image" content="https://res.cloudinary.com/tanvo/image/upload/v1674322596/medlangfanatic/courses/mavl/mavl-thumbnail_ker6a6.svg" />
                <meta property="og:description" content={description} /> */}
                <link rel='canonical' href="https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app" key="canonical" />
                <meta property="og:title" content={title} key="ogtitle" />
                <meta property="og:description" content="a description" key="ogdesc" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/tanvo/image/upload/v1674322596/medlangfanatic/courses/mavl/mavl-thumbnail_ker6a6.svg"
                    key="ogimage"
                />
                <meta
                    property="og:site_name"
                    content="Med Lang Fanatic"
                    key="ogsitename"
                />
                <meta
                    property="og:url"
                    content="https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app"
                    key="ogurl"
                />
                <meta property="og:type" content="article" key="ogtype" />

            </Head>
            {path === "courses" ? <CourseHeader /> : <MainHeader />}
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "Med Lang Fanatic",
    description: "Med Lang Fanatic | Khóa học tiếng Anh Y khoa online. Cải thiện khả năng ngoại ngữ và nâng cao kỹ năng giao tiếp trong Y khoa.",
}
