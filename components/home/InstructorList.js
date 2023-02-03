import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

import styles from "@/styles/home/InstructorList.module.css"
import Image from "next/image"
import { isMobile } from "react-device-detect"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const { Container, Row, Col } = require("react-bootstrap")

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

const InstructorCardLeft = ({ instructor }) => {
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