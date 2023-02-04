import Image from "next/image"
import { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"
const { Container, Row, Col } = require("react-bootstrap")

import styles from "@/styles/home/VideoSession.module.css"
import Link from "next/link"

export const VideoSession = () => {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(isMobile)
    }, [])
    return (
        <div id={styles["video-session"]} className='mb-4 mb-md-5 mx-md-7'>
            <Container className='h-100'>
                <h1 className='mb-4 text-main fw-bold'>
                    Tài liệu
                    <br />
                    <span className='text-30 fw-normal' style={{ color: "black" }}>Tiếng Anh Y khoa chọn lọc</span>
                    <Link href="/documents" className={`${styles["visit-document"]} d-md-block`}>
                        {mobile ? <i>Xem thêm</i> : <i>Xem thêm Tài liệu</i>}
                    </Link>
                </h1>
                <Row>
                    <Col xs={12} md={6} className="mb-4 mb-md-0">
                        <div className={`${styles["video-thumbnail"]} left px-3 pb-1 pt-3`}>
                            <div className={styles["img-wrapper"]}>
                                <a target="_blank" href="https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing" rel="noreferrer">
                                    <Image width="552" height="315" src="https://res.cloudinary.com/tanvo/image/upload/v1674338129/medlangfanatic/HomePage/document_xray_sojiyf.jpg" alt="video" />
                                </a>
                            </div>
                            <a target="_blank" href="https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing" rel="noreferrer">

                                <p className='text-16 pt-3'>Bộ từ vựng X-quang lồng ngực (Fleishner 2008)</p>
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                        {mobile ? <VideoSessionRightMobile /> : <VideoSessionRightWeb />}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const VideoSessionRightMobile = () => {
    return (
        <>
            {DOCUMENT_FREE.map((d, index) => (
                <div key={index} className={`d-flex mb-2 ${styles["video-thumbnail-mobile"]}`}>
                    <div className='box-shadow-card' style={{ borderRadius: "10px" }}>
                        <a target="_blank" href={d.link} rel="noreferrer">
                            <Image width="96" height="48" src={d.image} alt="video" />
                        </a>
                    </div>
                    <a target="_blank" href={d.link} rel="noreferrer">
                        <p className=" ps-4 fw-bold" >{d.title}</p>
                    </a>
                </div>
            ))}
        </>
    )
}

const DOCUMENT_FREE = [
    {
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674338129/medlangfanatic/HomePage/document_ban-ron-lam-sao-hoc-tieng-anh_f1pajx.jpg",
        title: "Bận rộn làm sao học tiếng Anh",
        link: "https://drive.google.com/file/d/1bomzB9sYaQQ6tGMVRBaqNig3D6f4WUCD/view?usp=sharing"
    },
    {
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674338129/medlangfanatic/HomePage/document_MAVL_rmqsfz.jpg",
        title: "Medical Academic\nVocabulary List",
        link: "https://drive.google.com/file/d/14gR4lureVsFvVQfzNkVea_y0rhfbQ2-3/view?usp=sharing"
    },
    {
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674338129/medlangfanatic/HomePage/document_prefix-suffix_ljb6o2.jpg",
        title: "Prefixes, suffixes, and combining forms",
        link: "https://drive.google.com/file/d/1zHqOXs5SYbghJ5zVsHUDBOa-YR0XJ8W3/view?usp=sharing"
    },
    {
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674338129/medlangfanatic/HomePage/document_cach-hoi-benh-su-bang-tieng-anh_wlg3jf.jpg",
        title: "Học cách hỏi bệnh sử bằng tiếng Anh như thế nào?",
        link: "https://drive.google.com/file/d/1bILvlnU3yNn2kRfDDTEwlOyjoZl0GUfM/view?usp=sharing"
    }
]

const VideoSessionRightWeb = () => {
    return (
        <Row style={{ height: "100%" }}>
            {
                DOCUMENT_FREE.map((d, index) => (
                    <Col key={index} md={6} className="h-50 " style={index < 2 ? { paddingBottom: "0.2rem" } : { paddingTop: "0.2rem" }}>
                        <div className={`${styles["video-thumbnail"]} px-3 pt-3`}>
                            <div  >
                                <a target="_blank" href={d.link} rel="noreferrer">
                                    <Image width="250" height="125" src={d.image} alt="video" />
                                </a>
                            </div>
                            <a target="_blank" href={d.link} rel="noreferrer">
                                <p className="mb-0 pt-2 text-14" >{d.title}</p>
                            </a>
                        </div>
                    </Col>
                ))
            }
        </Row>
    )
}