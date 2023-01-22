import Head from "next/head"
import { CourseHeader, MainHeader } from "./Header"

import Footer from "./Footer"




export default function Layout({ title, description, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
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
