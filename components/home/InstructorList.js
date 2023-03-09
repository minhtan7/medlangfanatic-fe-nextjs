import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import styles from "@/styles/home/InstructorList.module.css"
import Image from "next/image"
import { isMobile } from "react-device-detect"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { instructors } from "mockData"
import Carousel from "react-multi-carousel"

const { Container, Row, Col, Card } = require("react-bootstrap")

export const InstructorList = ({ instructors }) => {

    return (
        <div id="hp-instructor-card" className='mb-5 mt-5 text-justify mx-md-7'>
            <Container>
                <Row>
                    {/* <Col md={1}></Col> */}
                    <Col>
                        <h1 className='fw-bold text-main'>Giảng viên</h1>
                    </Col>
                </Row>
                <Row >
                    {/* <Col md={1}></Col> */}
                    <Col md={12} >
                        <Row>
                            {instructors.map((instructor, index) =>
                            (index % 2 === 0 ?
                                (<Col md={6} key={instructor.name} className="mb-2">
                                    <InstructorCardLeft instructor={instructor} />
                                </Col>) : (
                                    <Col md={6} key={instructor.name} className="mb-2">
                                        <InstructorCardRight instructor={instructor} />
                                    </Col>
                                ))
                            )}
                        </Row>
                    </Col>
                    {/* <Col md={1}></Col> */}

                </Row>
            </Container>

        </div>
    )
}

export const InstructorCardLeft = ({ instructor }) => {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(isMobile)
    }, [isMobile])
    return (
        <>
            <div className={`${styles["new-speaker"]} my-2`}>
                <div className={styles["speaker-right"]}>
                    <div className='d-flex flex-column justify-content-between h-100'>
                        <ul className={`${styles["speaker-topic"]} mb-0 fa-ul`}>
                            {instructor.bio.split("\n").map((b, idx) => (
                                <li key={idx}>
                                    <span className="fa-li" >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        {instructor.link
                            // && !mobile
                            && <div className='d-flex justify-content-end align-items-end h-100 w-100'>
                                <Link href={instructor.link}>
                                    <button className={`${styles["custom-btn"]} ${styles["btn-read-more"]}`}>
                                        <span>Đọc thêm</span>
                                    </button>
                                </Link>
                            </div>
                        }

                    </div>
                </div>
                <div className={styles["speaker-left"]}>
                    <div style={{ height: "60%" }}>
                        <div className={styles["team-image"]}>
                            <Image width="122" height="122" src={instructor.imageUrl} alt="instructor " />
                        </div>
                    </div>
                    <div style={{ height: "40%" }}>
                        <p className={styles["speaker-sub"]}>{instructor.titleFull}</p>
                        <p className={`${["speaker-name"]} mb-0 fw-bold`} >
                            {instructor.name.split("\n").map(b => (<span key={b}>{b}<br /></span>))}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

const InstructorCardRight = ({ instructor }) => {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(isMobile)
    }, [isMobile])
    return (
        <>
            <div className={`${styles["new-speaker"]}  my-2`}>
                <div className={styles["speaker-left"]}>
                    <div style={{ height: "60%" }}>
                        <div className={styles["team-image"]}>
                            <Image width="122" height="122" src={instructor.imageUrl} alt="instructor " />
                        </div>
                    </div>
                    <div style={{ height: "40%" }}>
                        <p className={styles["speaker-sub"]}>{instructor.titleFull}</p>
                        <p className={`${["speaker-name"]} mb-0 fw-bold`} >
                            {instructor.name.split("\n").map((b, index) => (<span key={index}> {b} < br /> </span>))}
                        </p>
                    </div>
                </div>
                <div className={styles["speaker-right"]}>
                    <div>
                        <ul className={`${styles["speaker-topic"]} mb-0 fa-ul`}>
                            {instructor.bio.split("\n").map((b, idx) => (
                                <li key={idx}>
                                    <span className="fa-li" >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        {instructor.link
                            // && !mobile
                            && <div className='d-flex justify-content-end align-items-end w-100' style={{ height: "3rem" }}>
                                <Link href={instructor.link}>
                                    <button className={`${styles["custom-btn"]} ${styles["btn-read-more"]}`}><span>Đọc thêm</span></button>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export const InstructorListHP = ({ instructors }) => {

    return (
        <div id="hp-instructor-card" className='mb-5 mt-5 text-justify mx-md-7'>
            <Container>
                <Row>
                    <Col>
                        <h1 className='fw-bold text-main'>Giảng viên</h1>
                    </Col>
                </Row>
                <InstructorCarousel responsive={responsive} instructors={instructors} />
            </Container>

        </div>
    )
}
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const InstructorCardVerticle = ({ instructor }) => {
    console.log(instructor)
    return (
        <Card className="border-0">
            <div className="overflow-hidden text-center p-3 pb-0">
                <div className="rounded-3" style={{ width: "100%", height: "250px", backgroundColor: "var(--main-bg-hover)", margin: "auto" }}>
                    <Image src={instructor.imageTransparent}
                        width={250} height={250}
                        alt="instructor" />
                </div>
            </div>
            <Card.Body>
                <div style={{ height: "3rem" }}>
                    <p className="lh-1 mb-2 text-center">Bác sĩ</p>
                    <Link href={instructor.link} passHref className={`text-decoration-none text-main text-center ${instructor.link === "#" && 'pe-none'}`}>
                        {instructor.slug === "huong-tran" | instructor.slug === "tram-nguyen" ?
                            <Card.Title style={{ fontSize: "1.1rem" }} className="text-center text-decoration-none">{instructor.name}</Card.Title> :
                            <Card.Title className="text-center text-decoration-none">{instructor.name}</Card.Title>
                        }

                    </Link>
                </div>
                <hr />

                <ul className={`${styles["speaker-topic"]} mb-0 fa-ul`}>
                    {instructor.bio.split("\n").map((b, idx) => (
                        <li key={idx} className="text-justify">
                            <span className="fa-li" >
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            {b}
                        </li>
                    ))}
                </ul>

            </Card.Body>
        </Card>
    )
}



export const InstructorCarousel = ({ responsive, instructors }) => {
    return (
        <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={3000}
            ssr={true}
            // customTransition="all .5"
            // transitionDuration={1000}
            infinite={true}
        >
            {instructors.map(ins => (
                <div key={ins.name} >
                    <InstructorCardVerticle instructor={ins} />
                </div>
            ))}
        </Carousel>
    )
}