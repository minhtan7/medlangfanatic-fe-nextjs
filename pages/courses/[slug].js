import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';

// import { CourseCard, RecruitBtn } from '../../components/CourseCard/CourseCard'

// import { getSingleCourse } from '../../features/course/courseSlice'
import apiService from '@/lib/apiService'
import { slugTranslate } from '@/lib/slugTranslate';
import { Hero } from '@/components/courses/Hero';
import Layout from '@/components/layout/Layout';
import { Features } from '@/components/courses/Features';
import { CourseDetailContent } from '@/components/courses/CourseDetailContent';
import { Instructors } from '@/components/courses/Instructors';
import { StudentFeedback } from '@/components/courses/StudentFeedback';
import { FAQ } from '@/components/courses/FAQ';
import { ShowCourseBtn } from '@/components/layout/ToTopArrow';
import { CourseCard } from '@/components/courseCard/CourseCard';
import { CTA } from '@/components/courses/CTA';
import { useFilterCssRoot } from 'hook/useFilterCssRoot';
import { Cover, CoverCWP, CoverMedicalTerminology, CoverPCCS } from '@/components/courses/Cover';
import { filterCss } from '@/lib/filterCss';

const defaultHeight = 72;

// const filterCss = (slug) => {
//     switch (slug.toLowerCase()) {
//         case "mavl":
//             return { main: "#011c7e", mainDark: "#131653", contrast: "#05feb1", contrastLight: "#05feb12e" }
//         case "medical-terminology":
//             return { main: "#82008f", mainDark: "#64006e", contrast: "#fff400", contrastLight: "#fac5ff" }
//         case "clinical-case-presentation":
//             return { main: "#0C3B2E", mainDark: "#6d9773", contrast: "#ffba00", contrastLight: "#bb8a52" }
//         case "communication-with-patients-101":
//             return { main: "#5F021F", mainDark: "#440217", contrast: "#ff8906", contrastLight: "#ffc6c7" }
//         default:
//             break;
//     }
// }
const filterCover = (slug) => {
    switch (slug) {
        case "mavl":
            return <Cover />
        case "medical-terminology":
            return <CoverMedicalTerminology />
        case "clinical-case-presentation":
            return <CoverPCCS />
        case "communication-with-patients-101":
            return <CoverCWP />
        default:
            break;
    }
}

export default function CoursePage({ course }) {

    useFilterCssRoot({ slug: course && course.slug, ...filterCss(course && course.slug) })
    return course && (
        <Layout
            title={course.name}
            description="Med Lang Fanatic | Khóa học tiếng Anh Y khoa online.Cải thiện khả năng ngoại ngữ và nâng cao kỹ năng giao tiếp trong Y khoa."
            imageUrl={slugTranslate({ target: "thumbnail", slug: course.slug })}
            site_name={"Med Lang Fanatic | " + course.name}
            url={"https://medlangfanatic.com/courses/" + course.slug}
        >
            <Hero course={course} />
            {filterCover(course.slug.toLowerCase())}
            <Container>
                <Row>
                    <Col xs={12} md={8} className="px-0 ">
                        <Features course={course} />
                        <CourseDetailContent chapters={course.chapters} slug={course.slug} />
                        <Instructors instructors={course.instructors} slug={course.slug} />
                        <StudentFeedback defaultHeight={defaultHeight} feedBack={course.review} />
                        {course.slug === "clinical-case-presentation" ? null : <FAQ faq={course.faq} />}
                    </Col>
                    <Col xs={0} sm={0} md={4} className="d-none d-sm-none d-md-block">
                        <CourseCard course={course} />
                    </Col>
                </Row>
            </Container>
            <CTA course={course} />
            <ShowCourseBtn course={course} />
        </Layout>
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


