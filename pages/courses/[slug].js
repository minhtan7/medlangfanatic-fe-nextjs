import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';

// import { CourseCard, RecruitBtn } from '../../components/CourseCard/CourseCard'
// import { useFilterCssRoot } from '../../hook/useFilterCssRoot'
// import { getSingleCourse } from '../../features/course/courseSlice'
import apiService from '@/lib/apiService'
import { slugTranslate } from '@/lib/slugTranslate';
import { Hero } from '@/components/courses/Hero';
import Layout from '@/components/layout/Layout';
import { Features } from '@/components/courses/Features';
import { CourseDetailContent } from '@/components/courses/CourseDetailContent';

const defaultHeight = 72;

const filterCss = (slug) => {
    switch (slug.toLowerCase()) {
        case "mavl":
            return { main: "#011c7e", mainDark: "#131653", contrast: "#05feb1", contrastLight: "#05feb12e" }
        case "medical-terminology":
            return { main: "#82008f", mainDark: "#64006e", contrast: "#fff400", contrastLight: "#fac5ff" }
        case "clinical-case-presentation":
            return { main: "#0C3B2E", mainDark: "#6d9773", contrast: "#ffba00", contrastLight: "#bb8a52" }
        case "communication-with-patients-101":
            return { main: "#5F021F", mainDark: "#440217", contrast: "#ff8906", contrastLight: "#ffc6c7" }
        default:
            break;
    }
}

export default function CoursePage({ course }) {
    console.log(course)
    // useFilterCssRoot({ slug, ...filterCss(slug) })

    return course && (
        <Layout title={course.title}>
            <Hero course={course} />
            {/* {filterCover(course.slug.toLowerCase())} */}
            <Container>
                <Row>
                    <Col xs={12} md={8} className="px-0 ">
                        <Features course={course} />
                        <CourseDetailContent chapters={course.chapters} slug={course.slug} />
                        {/* <Instructors instructors={course.instructors} /> */}
                        {/* <StudentFeedback defaultHeight={defaultHeight} feedBack={course.review} /> */}
                        {/* {slug === "clinical-case-presentation" ? null : <FAQ faq={course.faq} />} */}
                    </Col>
                    <Col xs={0} sm={0} md={4} className="d-none d-sm-none d-md-block">
                        {/* <CourseCard course={course} /> */}
                    </Col>
                </Row>
            </Container>
            <CTA slug={course.slug} />
            {/* <ToTopArrow course={course} /> */}
        </Layout>
    )
}

// const filterCover = (slug) => {
//     switch (slug) {
//         case "mavl":
//             return <Cover />
//         case "medical-terminology":
//             return <CoverMedicalTerminology />
//         case "clinical-case-presentation":
//             return <CoverPCCS />
//         case "communication-with-patients-101":
//             return <CoverCWP />
//         default:
//             break;
//     }
// }

const CTA = ({ slug }) => {
    // const ex = (
    //     <div className=''>
    //         <h1 className='fw-bold text-main mb-0'>Khóa học Tiếng Anh</h1>
    //         <h1 className='fw-bold text-main'>Y khoa Trực Tuyến</h1>
    //         <h4 className='fw-light text-main mb-5'>Dare to get out of the box!</h4>
    //         <Button onClick={() => navigate(`/register-form/${slug}`)} variant="primary" className='btn-sign-up py-2' ><span>Đăng ký ngay</span></Button>
    //     </div>
    // )
    return (
        <div id="cta" style={{ height: "514px" }}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col xs={12} md={6} className='text-center d-flex justify-content-center align-items-center'>
                        <div className=''>
                            <h1 className='fw-bold text-main mb-0'>Khóa học Tiếng Anh</h1>
                            <h1 className='fw-bold text-main'>Y khoa Trực Tuyến</h1>
                            <h4 className='fw-light text-main mb-5'>Dare to get out of the box!</h4>
                            <Link href={`/register-form/${slug.toLowerCase()}`}>
                                <Button variant="primary" className='btn-sign-up py-2 mb-3'>
                                    <span>Đăng ký ngay</span>
                                </Button>
                            </Link>
                            {/* <RecruitBtn /> */}
                        </div>
                    </Col>
                    <Col className='d-none d-md-block'></Col>
                </Row>
            </Container>
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths:
            [
                { params: { slug: "medical-terminology" } },
                { params: { slug: "mavl" } },
                { params: { slug: "clinical-case-presentation" } },
                { params: { slug: "communication-with-patients-101" } },
            ],
        fallback: true
    }
}

export async function getStaticProps({ params: { slug } }) {
    const courseId = slugTranslate({ target: "id", slug: slug.toLowerCase() })
    const res = await apiService.get(`/courses/${courseId}`)
    return {
        props: {
            course: res.data
        }
    }
}


