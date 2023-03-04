import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"
import Carousel from "react-multi-carousel"

import { AllCourseCourseCard } from "@/components/courseCard/CourseCard"

const { Row, Col, Container } = require("react-bootstrap")
const { CourseThumbnailVertical } = require("../courseCard/CourseThumbnail")

const COURSE_LIST_ICON = [
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Học trực tuyến"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Từ 3 - 6 tháng"
    },
    {
        icon: <FontAwesomeIcon icon={faCircleCheck} />,
        content: "Tương tác Online"
    }

]

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

export const CourseList = ({ courseListContent }) => {
    const [mobile, setMobile] = useState(false)
    useEffect(() => {
        setMobile(isMobile)
    }, [isMobile])
    return (
        <div id="course-list-session" className='text-center mb-4 mb-md-5 '>
            <Container className='mt-5'>
                {
                    !mobile ?
                        (
                            <h1 className='fw-bold text-main mb-3'>
                                Cải thiện khả năng ngoại ngữ<br /> và kỹ năng giao tiếp trong Y khoa.
                            </h1>
                        )
                        : (
                            <h1 className='fw-bold text-main mb-3'>
                                Cải thiện ngoại ngữ<br /> và nâng cao<br /> kỹ năng giao tiếp
                            </h1>
                        )
                }
                <small><i>Những khóa học tiếng Anh chuyên ngành Y khoa chất lượng cao của MLF sẽ là lời tri ân chân thành nhất đến với mọi người!</i></small>
                <ul className='fa-ul text-12 mt-3' >
                    {COURSE_LIST_ICON.map(icon => (
                        <li key={icon.content} className="d-inline-block me-5">
                            <span className="fa-li" >{icon.icon}</span>{icon.content}
                        </li>

                    ))}
                </ul>

                {/* <Row xs={1} md={12} className="g-4 mt-md-2">
                    {
                        Object.keys(courseListContent).map(c => (
                            <Col xs={12} md={3} key={courseListContent[c].idEl}>
                                <CourseThumbnailVertical course={courseListContent[c]} />
                            </Col>
                        )
                        )
                    }
                </Row> */}
                <CourseCarousel responsive={responsive} courseListContent={courseListContent} />
            </Container>
        </div >
    )
}

export const CourseCarousel = ({ responsive, courseListContent }) => {
    return (
        <Carousel responsive={responsive}>
            {Object.keys(courseListContent).map(course => (
                // <div style={{ padding: "1rem 2rem" }}>
                <div key={courseListContent[course].idEl} style={{ padding: "1rem", textAlign: "left" }}>
                    <AllCourseCourseCard course={courseListContent[course]} width={"300px"} height={"200px"} />
                </div>
            ))}
        </Carousel>
    )
}