import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'


import { slugTranslate } from '@/lib/slugTranslate'

import ViewDoc from '@/components/document/ViewDoc'
import { WelcomeDoc } from '@/components/document/WelcomeDoc'
import { Subscription } from '@/components/home/Subscription'
import { ToTopArrowNormalUse } from '@/components/layout/ToTopArrow'
import Script from 'next/script'
import { sideBarItemsDoc } from 'mockData'
import SideBar from '@/components/document/SideBar'
import Layout from '@/components/layout/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'


const getRender = (frame) => {
    if (!frame) {
        return <WelcomeDoc />
    }

    if (frame.display === 'download') {
        return <ViewDoc frame={frame} />
    } else if (frame.display === 'html') {
        return (
            <div id="notion">
                {frame.html}
            </div>
        )

    }
    return <WelcomeDoc />
}
export default function DocumentPage({ category, slug }) {
    const [showPop, setShowPop] = useState(false)
    // const [frame, setFrame] = useState(null)
    // useScript("https://medlangfanatic.h5p.com/js/h5p-resizer.js")
    // const location = useLocation()
    // const searchParams = new URLSearchParams(location.search);
    // const type = searchParams.get("type")
    // const slug = searchParams.get("name")
    // useEffect(() => {
    //     if (location.search) {
    //         setFrame(slugTranslate({ target: type, slug }))
    //     }
    // }, [location.search, slug, type])


    const frame = slugTranslate({ target: category, slug })
    return (
        <Layout>

            <div id="blog-page" >
                <Container>
                    <div className=' pt-5'>
                        <Link href="/" className='text-secondary text-decoration-none'>
                            <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                            Về trang chủ
                        </Link>
                        <h1 className='title' >Tài Liệu</h1>
                    </div>
                    <Row >
                        <Col md={3}>
                            <SideBar slug={slug} />
                        </Col>
                        <Col md={9} >
                            <h1 className='mb-md-3 my-4 text-center'>{frame ? frame.title : null}</h1>
                            {getRender(frame)}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='mt-5'>
                <Subscription />
            </div>
            <ToTopArrowNormalUse />

        </Layout>
    )
}

export async function getStaticPaths() {
    let paths = []
    sideBarItemsDoc.forEach((item) => {
        item.children.forEach(i => {
            paths.push({ params: { category: i.category, slug: i.slug } })
        })
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const category = params ? params.category : "book"
    const slug = params ? params.slug : ""
    return {
        props: {
            category,
            slug
        }
    }
}