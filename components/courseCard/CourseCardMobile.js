import { faFileText, faNoteSticky, faPlayCircle, faT, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, ListGroup, Placeholder } from 'react-bootstrap'

import { useScript } from '../../hook/useScript'

// import { formatTime } from '../../utility/formatTime'
// import { Timer } from '../Timer/Timer'
import { RecruitBtn } from '../buttons/RecruitBtn'
import Link from 'next/link'
import Image from 'next/image'
import { slugTranslate } from '@/lib/slugTranslate'


export const CourseCardMobile = ({ course }) => {
    // const { hours, minutes, seconds } = formatTime(course?.duration || 0)

    // useScript(process.env.REACT_APP_LUCKY_ORANGE)
    // useScript(process.env.REACT_APP_GG_TAG_MNG)
    return course ?
        (<Card className='course-card '>
            < Image variant="top" src={slugTranslate({ slug: course.slug, target: "thumbnail" })} style={{ borderRadius: 0 }} alt="thumbnail" width={290} height={160} />
            < Card.Body style={{ color: "black" }}>
                <Card.Title style={{ textAlign: "center" }}>Chi phí khóa học:
                    <h2 style={{ color: "red", margin: "0 0 0.8rem" }}>{course.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}K</h2>
                </Card.Title>
                {/* <Button
                    onClick={() => navigate(`/register-form/${course.slug.toLowerCase()}-trial`)}
                    className='btn-sign-up-contrast mb-2' >
                    <span>Học thử!</span>
                </Button> */}
                {/* <Link href={`/form/${course.slug.toLowerCase()}`}>
                    <Button
                        variant="primary" className='btn-sign-up mb-3' >
                        <span>Đăng ký ngay</span>
                    </Button>
                </Link>
                <RecruitBtn course={course} /> */}
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
            </Card.Body >
            {course.slug === "clinical-case-presentation" |
                course.slug === "communication-with-patients-101"
                ? null : (
                    <Card.Body>
                        {/* <Timer targetDate={slugTranslate({ slug: course.slug, target: "targetDate" })} /> */}
                    </Card.Body>
                )}
            {course.slug === "clinical-case-presentation" ? (
                <Card.Body>
                    <Image variant="top" id="card-coupon" alt="card coupon"
                        width={256} height={192}
                        src="https://res.cloudinary.com/tanvo/image/upload/v1672176320/medlangfanatic/courses/presenting-clinical-case-from-scratch/3.500k_hx7qoc.jpg"
                        style={{ borderRadius: 0 }} />
                </Card.Body>
            ) :
                course.slug === "communication-with-patients-101" ? (
                    <Card.Body>
                        < Image variant="top" id="card-coupon" alt="card coupon"
                            src="https://res.cloudinary.com/tanvo/image/upload/v1672311931/medlangfanatic/courses/cwp/coupon-cwp_zzbcqe.jpg"
                            style={{ borderRadius: 0 }}
                            width={256} height={192}
                        />
                    </Card.Body>
                ) : null}
            {course.slug === "communication-with-patients-101" ? null : <Card.Body style={{ paddingTop: "0" }}>
                <p style={{ color: "black", marginBottom: '0' }}>Khóa học bao gồm:</p>
                <ListGroup variant="flush">
                    {course.material.map((m, index) => (
                        <ListGroup.Item key={index} className='course-card-item fa-ul' as="ul" >
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


        </Card >) :
        (<Card className='course-card' >
            {/* <Card.Img variant="top" src="/images/case-presentation-thumbnail.webp" /> */}
            <Placeholder size="lg" as={"div"} animation="glow" style={{ borderRadius: 0 }} >
                <Placeholder xs={12} />
            </Placeholder>

            <Card.Body style={{ color: "black" }}>
                <Placeholder size="sm" as={Card.Title} animation="glow" >
                    <Placeholder xs={12} />
                </Placeholder>
                {/* <Button target="_blank" href='https://forms.gle/EtHE8p7CxnrQHErq9' variant="primary" className='btn-sign-up' >Đăng ký ngay</Button> */}
                <Placeholder.Button className='btn-sign-up' variant="primary" xs={12} />
            </Card.Body>
            <Card.Body>
                {/* <Timer /> */}
            </Card.Body>
            <Card.Body>
                <p style={{ color: "black" }}>Khóa học bao gồm:</p>
                <ListGroup variant="flush">
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <Placeholder as={"li"} animation="glow">
                            <Placeholder xs={8} />
                        </Placeholder>
                    </ListGroup.Item>
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <Placeholder as={"li"} animation="glow">
                            <Placeholder xs={8} />
                        </Placeholder>
                    </ListGroup.Item>
                    <ListGroup.Item className='course-card-item fa-ul' as="ul" >
                        <Placeholder as={"li"} animation="glow">
                            <Placeholder xs={8} />
                        </Placeholder>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>)
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
