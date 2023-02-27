import { faFileText, faNoteSticky, faPlayCircle, faT, faGlasses, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Button, Card, ListGroup, Tab } from 'react-bootstrap'

import { useScript } from 'hook/useScript'
import { slugTranslate } from '@/lib/slugTranslate'
// import { formatTime } from '../../utility/formatTime'
import { Timer } from '../utils/Timer'
import styles from "@/styles/courseCard/CourseCard.module.css"
import Link from 'next/link'
import { RecruitBtn } from '../buttons/RecruitBtn'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const CourseCard = ({ course }) => {
    // const { hours, minutes, seconds } = formatTime(course?.duration || 0)

    // console.log(course)
    // useScript(process.env.REACT_APP_LUCKY_ORANGE)
    // useScript(process.env.REACT_APP_GG_TAG_MNG)
    return course &&
        <Card className={styles["course-card"]}>
            <div style={{ width: "100%", height: "192px" }} className='position-relative'>
                < Image
                    src={slugTranslate({ slug: course.slug, target: "thumbnail" })} style={{ borderRadius: 0 }}
                    alt={course.slug} fill object-fit='contain'
                />
            </div>
            < Card.Body style={{ color: "black" }}>
                <Card.Title style={{ textAlign: "center" }}>Chi phí khóa học:
                    <h2 style={{ color: "#011c7e", margin: "0 0 0.8rem" }}>{course.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}K</h2>
                </Card.Title>
                {/* <Button
                    onClick={() => navigate(`/register-form/${course.slug.toLowerCase()}-trial`)}
                    className='btn-sign-up-contrast mb-2' >
                    <span>Học thử!</span>
                </Button> */}

                {course.slug.toLowerCase() !== "how-to-learn-medical-vocabulary" ? slugTranslate({ target: "recruitStatus", slug: course.slug }) ?
                    <Link href={`/form/${course.slug.toLowerCase()}`}>
                        <Button
                            variant="primary" className='btn-sign-up mb-3' >
                            <span>Đăng ký ngay</span>
                        </Button>
                    </Link> :
                    <Button
                        variant="primary" className='btn-sign-up mb-3' >
                        <span>Đã đủ học viên</span>
                    </Button> : <Link href={`/courses/combo-vocabulary`}>
                    <Button
                        variant="primary" className='btn-sign-up mb-3' >
                        <span>Đăng ký ngay</span>
                    </Button>
                </Link>
                }

                {/* {slugTranslate({ target: "recruitStatus", slug: course.slug }) && <RecruitBtn cursor={true} course={course} />} */}
            </Card.Body >
            {course.slug === "clinical-case-presentation"
                | course.slug === "communication-with-patients-101"
                | course.slug === "listening-skills"
                | course.slug === "how-to-learn-medical-vocabulary"
                | course.slug === "combo-vocabulary"
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
            {course.slug === "communication-with-patients-101"
                | course.slug === "combo-vocabulary"
                ? null :
                <Card.Body style={{ paddingTop: "0" }}>
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

const filterType = (type) => {
    switch (type) {
        case "master":
            return (
                <h6 >
                    <Badge className={`${styles["badge-master"]} ${styles.badge}`}>Master Class</Badge>
                </h6>
            )
        case "standard":
            return (
                <h6 >
                    <Badge className={`${styles["badge-standard"]} ${styles.badge}`}>Standard Class</Badge>
                </h6>
            )
        case "free":
            return (
                <h6 >
                    <Badge className={`${styles["badge-free"]} ${styles.badge}`}>Free</Badge>
                </h6>
            )
        default:
            return
    }
}

export const AllCourseCourseCard = ({ course, width, height }) => {
    const router = useRouter()
    return (
        <div className={`${styles["all-courses-card"]} m-auto`} style={{ width }}>
            {/* <div className='position-relative cursor-pointer' style={{ height }} onClick={() => router.push(`/courses/${course.slug}`)}>
                <Image src={course.image}
                    fill object-fit="contain" alt={course.title} />
            </div> */}
            <div className='position-relative cursor-pointer' style={{ height }} onClick={() => router.push(`/courses/${course.slug}`)}>
                <Image src={course.image}
                    fill object-fit="contain" alt={course.title} />
            </div>
            <div className=' ms-3 me-3 mt-2 text-black fw-normal d-flex flex-column justify-content-between'
                style={{ height: "133px" }}
            // style={{ height: "245px" }}
            >
                <div>
                    {filterType(course.type)}
                    <h5 onClick={() => router.push(`/courses/${course.slug}`)} className={`cursor-pointer text-nowrap ${styles["title"]}`} dangerouslySetInnerHTML={{ __html: course.title }}></h5>
                    <p style={{ fontSize: "14px" }}>{course.content}</p>
                    <br />
                </div>
                {/* <div>
                    <p style={{ fontSize: "12px" }} className='mb-0'>
                        <small>
                            <FontAwesomeIcon icon={faStar} color='orange' />
                            <strong className='ms-1'>4.8</strong>
                            <span className='ms-2'>(200+ reviews)</span>
                        </small>
                    </p>
                    <p className='mb-0' style={{ fontSize: "12px" }}><small>Beginner &#183; Professional Certificate &#183; 3-6 months </small></p>
                    <br />
                </div> */}
            </div>
        </div >
    )
}
