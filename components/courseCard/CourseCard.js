import { faFileText, faNoteSticky, faPlayCircle, faT, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Card, ListGroup } from 'react-bootstrap'

import { useScript } from 'hook/useScript'
import { slugTranslate } from '@/lib/slugTranslate'
// import { formatTime } from '../../utility/formatTime'
import { Timer } from '../utils/Timer'
import styles from "@/styles/courseCard/CourseCard.module.css"
import Link from 'next/link'
import { RecruitBtn } from '../buttons/RecruitBtn'
import Image from 'next/image'

export const CourseCard = ({ course }) => {
    // const { hours, minutes, seconds } = formatTime(course?.duration || 0)

    // console.log(course)
    // useScript(process.env.REACT_APP_LUCKY_ORANGE)
    // useScript(process.env.REACT_APP_GG_TAG_MNG)
    return course &&
        <Card className={styles["course-card"]}>
            < Image
                src={slugTranslate({ slug: course.slug, target: "thumbnail" })} style={{ borderRadius: 0 }}
                alt={course.slug} fill object-fit='contain'
            />
            < Card.Body style={{ color: "black" }}>
                <Card.Title style={{ textAlign: "center" }}>Chi phí khóa học:
                    <h2 style={{ color: "#011c7e", margin: "0 0 0.8rem" }}>{course.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}K</h2>
                </Card.Title>
                {/* <Button
                    onClick={() => navigate(`/register-form/${course.slug.toLowerCase()}-trial`)}
                    className='btn-sign-up-contrast mb-2' >
                    <span>Học thử!</span>
                </Button> */}


                {slugTranslate({ target: "recruitStatus", slug: course.slug }) ?
                    <Link href={`/form/${course.slug.toLowerCase()}`}>
                        <Button
                            variant="primary" className='btn-sign-up mb-3' >
                            <span>Đăng ký ngay</span>
                        </Button>
                    </Link> :
                    <Button
                        variant="primary" className='btn-sign-up mb-3' >
                        <span>Đã đủ học viên</span>
                    </Button>
                }

                {slugTranslate({ target: "recruitStatus", slug: course.slug }) && <RecruitBtn cursor={true} course={course} />}
            </Card.Body >
            {course.slug === "clinical-case-presentation" |
                course.slug === "communication-with-patients-101"
                ? null : (
                    <Card.Body>
                        <Timer targetDate={slugTranslate({ slug: course.slug, target: "targetDate" })} />
                    </Card.Body>
                )}
            {course.slug === "clinical-case-presentation" ? (
                <Card.Body>
                    < Card.Img variant="top" id={styles["card-coupon"]}
                        src="https://res.cloudinary.com/tanvo/image/upload/v1672176320/medlangfanatic/courses/presenting-clinical-case-from-scratch/3.500k_hx7qoc.jpg"
                        style={{ borderRadius: 0 }} />
                </Card.Body>
            ) :
                course.slug === "communication-with-patients-101" ? (
                    <Card.Body>
                        < Card.Img variant="top" id={styles["card-coupon"]}
                            src="https://res.cloudinary.com/tanvo/image/upload/v1672311931/medlangfanatic/courses/cwp/coupon-cwp_zzbcqe.jpg"
                            style={{ borderRadius: 0 }} />
                    </Card.Body>
                ) : null}
            {course.slug === "communication-with-patients-101" ? null : <Card.Body style={{ paddingTop: "0" }}>
                <p style={{ color: "black", marginBottom: '0' }}>Khóa học bao gồm:</p>
                <ListGroup variant="flush">
                    {course.material.map((m, index) => (
                        <ListGroup.Item key={index} className={`${styles["course-card-item"]} fa-ul`} as="ul" >
                            <li>
                                <span className="fa-li" >
                                    {filterIcon(m.icon)}
                                </span>
                                {m.text}
                            </li>
                        </ListGroup.Item>

                    ))}
                    {/* {course.material.map((m, index) => (
                        <ListGroup.Item key={index} className='course-card-item fa-ul' as="ul" >
                            <li>
                                <span className="fa-li" >
                                    {filterIcon(m.icon)}
                                </span>
                                {m.text}
                            </li>
                        </ListGroup.Item>

                    ))} */}
                </ListGroup>
            </Card.Body>}


        </Card >
}

const filterIcon = (icon) => {

    switch (icon) {
        case "faPlayCircle":
            return <FontAwesomeIcon icon={faPlayCircle} />
        case "faT":
            return <FontAwesomeIcon icon={faT} />
        case "faFileText":
            return <FontAwesomeIcon icon={faFileText} />
        case "faGlasses":
            return <FontAwesomeIcon icon={faGlasses} />
        case "faNoteSticky":
            return <FontAwesomeIcon icon={faNoteSticky} />
        default:
            return <FontAwesomeIcon icon={faT} />
    }
}

