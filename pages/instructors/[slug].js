import { useEffect, useState } from 'react'

import Image from 'next/image'
import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'

import { slugTranslate } from '@/lib/slugTranslate'
import { Subscription } from '@/components/home/Subscription'

import styles from "@/styles/instructors/InstructorPage.module.css"
import Layout from '@/components/layout/Layout'
import Script from 'next/script'


export default function InstructorPage({ slug }) {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(isMobile)
    }, [isMobile])

    const instructor = slugTranslate({ slug: slug ? slug : "bac-si-tran-quang-hung", target: "instructors" })
    return (
        <Layout>
            <Script src={process.env.NEXT_APP_LUCKY_ORANGE} />
            <Script src={process.env.NEXT_APP_GG_TAG_MNG} />
            <section id='instructor-page' >
                <div className='mb-md-7 mx-md-7 mt-md-5'>
                    <Container>
                        <Row className='px-2  px-md-0'>
                            <Col md={4} className='text-center'>
                                <div className='mb-5'>
                                    <Image width={376} height={376} src={instructor.img} alt={slug} />
                                </div>
                                <p className="px-4 text-main"><i>{instructor.quote}</i></p>
                                <small className="text-main">-{instructor.quoteAuthor}-</small>
                                {/* <ul>
                            <li>Name: </li>
                            <li>Email: </li>
                            <li>Or Quote: </li>
                        </ul> */}
                            </Col>
                            <Col md={8} className="pt-5">
                                <h2 className='fw-bolder text-main' >BS. {instructor.name}
                                    <span style={{

                                        color: "#1a46e3",
                                        marginLeft: "5px"
                                    }}>
                                        <FontAwesomeIcon style={{ width: "21px", transform: "translateY(2px)" }} icon={faCheckCircle} />
                                    </span>
                                </h2>
                                <p className='mb-4' style={{ color: "#6c6c6c" }}>{instructor.title}</p>
                                {/* <hr /> */}
                                {/* <h4 className='mb-5'>Biography</h4> */}
                                {instructor.bio && <p style={{ lineHeight: '1.7' }} className=" text-justify">{instructor.bio}</p>}
                                <hr className={`mt-4 ${styles["instructor-hr"]}`} />
                                <h4 className='mb-4 text-center text-md-start text-main'>Thông tin sơ lược</h4>
                                <ul className='fa-ul'>
                                    {instructor.info.map((inf, idx) => (
                                        <li key={idx} className="mb-3 text-justify" style={{ lineHeight: '1.7' }}>
                                            <span className="fa-li" >
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            {inf}
                                        </li>
                                    ))}
                                </ul>
                                <hr className={styles["instructor-hr"]} />

                                {mobile ? <h4 className='mb-4 text-center text-main'>Kinh nghiệm giảng dạy<br />ngoại ngữ</h4> : <h4 className='mb-4 text-main'>Kinh nghiệm giảng dạy ngoại ngữ</h4>}
                                <ul className='fa-ul'>
                                    {instructor.exp.map((e, idx) => (
                                        <li key={idx} className="mb-3 text-justify" style={{ lineHeight: '1.7' }}>
                                            <span className="fa-li" >
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            {e}
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='mt-5 pb-md-2 pt-md-5' style={{ backgroundColor: "#edf1ff91" }}>
                    <Subscription />
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "bac-si-tran-quang-hung" } },
            { params: { slug: "bac-si-nguyen-dinh-cang" } },
            { params: { slug: "bac-si-nguyen-ngoc-quynh-tram" } },
            { params: { slug: "bac-si-tran-nguyen-thanh-huong" } },
        ],
        fallback: true
    }
}

export async function getStaticProps({ params: { slug } }) {
    return {
        props: { slug }
    }
}
