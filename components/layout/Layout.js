import Head from "next/head"
import { CourseHeader, MainHeader } from "./Header"

import Footer from "./Footer"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Script from "next/script"




export default function Layout({ title, description, children, imageUrl, site_name, url }) {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])
    const router = useRouter()
    // const path = router.pathname.split("/")[1]
    // console.log(router)
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                {/* <link rel='canonical' href={metaDecorator.hostname + window.location.pathname + window.location.search} />
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
                <link rel='canonical' href={url} key="canonical" />
                <meta property="og:title" content={title} key="ogtitle" />
                <meta property="og:description" content={description} key="ogdesc" />
                <meta
                    property="og:image"
                    content={imageUrl}
                    key="ogimage"
                />
                <meta
                    property="og:site_name"
                    content={site_name}
                    key="ogsitename"
                />
                <meta
                    property="og:url"
                    content={url}
                    key="ogurl"
                />
                <meta property="og:type" content="article" key="ogtype" />
                <meta name="google-site-verification" content="SOtLkKesUpJwgVZpqCdJjwyiZEiOQj_4ysvmk9pgNL8" />



            </Head>

            {/* {router.pathname == "/courses/[slug]" ? <CourseHeader /> : <MainHeader />} */}
            <MainHeader />
            {children}
            <Footer />

        </div>
    )
}

Layout.defaultProps = {
    title: "Med Lang Fanatic",
    description: "Med Lang Fanatic | Kh??a h???c ti???ng Anh Y khoa online. C???i thi???n kh??? n??ng ngo???i ng??? v?? n??ng cao k??? n??ng giao ti???p trong Y khoa.",
    imageUrl: "https://res.cloudinary.com/tanvo/image/upload/v1678358546/medlangfanatic/HomePage/thumbnail_od3lge.jpg",
    url: "https://medlangfanatic.com",
    site_name: "Med Lang Fanatic"
}
