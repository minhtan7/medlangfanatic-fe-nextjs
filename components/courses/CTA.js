import Link from "next/link"
import { Container, Row, Col, Button } from "react-bootstrap"
import styles from "@/styles/courses/CTA.module.css"
import { RecruitBtn } from "../buttons/RecruitBtn"
import { slugTranslate } from "@/lib/slugTranslate"

export const CTA = ({ course }) => {

    return (
        <div id={styles.cta} style={{ height: "514px" }}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} md={6} className='text-center d-flex justify-content-center align-items-center'>
                        <div className=''>
                            <h1 className='fw-bold text-main mb-0'>Khóa học Tiếng Anh</h1>
                            <h1 className='fw-bold text-main'>Y khoa Trực Tuyến</h1>
                            <h4 className='fw-light text-main mb-5'>Dare to get out of the box!</h4>

                            {slugTranslate({ target: "recruitStatus", slug: course.slug }) ?
                                <Link href={`/form/${course.slug.toLowerCase()}`}>
                                    <Button variant="primary" className={`btn-sign-up py-2 mb-3 ${styles["cta-btn-sign-up"]}`}>
                                        <span>Đăng ký ngay</span>
                                    </Button>
                                </Link> :

                                <Button variant="primary" className={`btn-sign-up py-2 mb-3 ${styles["cta-btn-sign-up"]}`}>
                                    <span>Đã đủ học viên</span>
                                </Button>
                            }
                            {slugTranslate({ target: "recruitStatus", slug: course.slug }) && <RecruitBtn cursor={true} course={course} />}
                        </div>
                    </Col>
                    <Col className='d-none d-md-block'></Col>
                </Row>
            </Container>
        </div>
    )
}