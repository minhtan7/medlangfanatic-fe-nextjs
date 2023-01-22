import { useEffect, useState } from "react"
import CarouselML from "../Carousel/CarouselML"
import { ShowMore } from "../ShowMore"
import styles from "@/styles/home/FeedbackList.module.css"
import { isMobile } from "react-device-detect"

const { default: Image } = require("next/image")
const { Container, Row, Col, Card } = require("react-bootstrap")

const LIST_FB_IMAGE = [
    "https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_fb_1_hjumie.jpg",
    "https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_fb_2_omu7dq.jpg",
    "https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_fb_3_fy4lp0.jpg",
    "https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_fb_4_w25ypq.jpg",
    "https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_fb_5_kbrqlk.jpg"
]

export const FeedbackList = ({ fbs }) => {
    const circleListFn = (arr, index) => {
        if (index === -1) {
            return (<ul><li className={`${styles["student-icon"]} ${styles.last}`} >
                <Image src="https://res.cloudinary.com/tanvo/image/upload/v1674323557/medlangfanatic/HomePage/plus-icon_faxapn.jpg" alt="student icon" width={40} height={40} />
            </li></ul>)
        }
        return (<ul><li className={styles['student-icon']}>
            <Image src={arr[index]} alt="student icon" width={40} height={40} />
            {circleListFn(arr, index - 1)}
        </li></ul>)
    }

    return (
        <div id={styles["feedback-list"]} className='mb-4 my-md-5 py-md-5 mx-md-7'>
            <Container >
                <Row xs={1} md={12} className="g-4 my-md-5">
                    <Col xs={12} md={5} className="text-40 ">
                        {/* <h1 className='fw-bold text-main ' > </h1> */}
                        <h1 className='mb-2 mb-md-5'>
                            <span className='text-main fw-bold'>Feedback </span>
                            -<br />Học viên nói gì?
                        </h1>
                        <ul className={`${styles["circle-list"]} d-flex `} >
                            {circleListFn(LIST_FB_IMAGE, LIST_FB_IMAGE.length - 1)}
                        </ul>

                    </Col>
                    <Col xs={12} md={6} >
                        <FeedBackCard fbs={fbs} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export const FeedBackCard = ({ fbs }) => {
    const defaultHeight = 150
    return (
        <>
            <div className={styles["container-style"]}>
                <CarouselML autoplay={true} autoplay_speed={50000}>
                    {fbs.map((fb, index) => (
                        <Card className={styles["card-style"]} key={fb.name}>
                            {/* <Card.Img variant="top" src="/images/student_icon.svg"
                                style={{ width: "90px", margin: "auto" }} className='doctor-icon' /> */}

                            <Card.Body>
                                <Card.Title style={{ textTransform: "uppercase" }}>
                                    {fb.name} <br />
                                    <small style={{ fontSize: "15px", textTransform: "lowercase" }}>- {fb.title} -</small>
                                </Card.Title>
                                <div className='text-black position-relative'>
                                    <ShowMore defaultHeight={defaultHeight} index={index} text={fb.content} />
                                    {/* {fb.content} */}
                                    <span className='slide-quote' style={{ zIndex: 1, top: "1rem", left: "1.5rem", opacity: "0.7" }}>
                                        {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
                                        <Image src="/images/quote.svg" alt="quote sign" width={64} height={64} />
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </CarouselML>
            </div>
        </>
    )
}