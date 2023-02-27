import Layout from "@/components/layout/Layout"
import { Hero } from "../Hero"
import { Col, Container, Row } from "react-bootstrap"
import { Features } from "../Features"
import { CourseDetailContent } from "../CourseDetailContent"
import { Instructors } from "../Instructors"
import { StudentFeedback } from "../StudentFeedback"
import { FAQ } from "../FAQ"
import { CourseCard } from "@/components/courseCard/CourseCard"
import { CTA } from "../CTA"
import { ShowCourseBtn } from "@/components/layout/ToTopArrow"
import { useFilterCssRoot } from "hook/useFilterCssRoot"
import { filterCss } from "@/lib/filterCss"
import { slugTranslate } from "@/lib/slugTranslate"
import { Cover, CoverCWP, CoverMedicalTerminology, CoverPCCS, HLMV, LLM } from '@/components/courses/Cover';


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
        case "listening-skills":
            return <LLM />
        case "how-to-learn-medical-vocabulary":
            return <HLMV />
        case "combo-vocabulary":
            return <LLM />
        default:
            break;
    }
}
const defaultHeight = 72;

export default function NormalCourse({ course }) {
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
                        {course.slug === "clinical-case-presentation"
                            | course.slug === "listening-skills"
                            | course.slug === "how-to-learn-medical-vocabulary"
                            ? null : <StudentFeedback defaultHeight={defaultHeight} feedBack={course.review} />
                        }

                        {course.slug === "clinical-case-presentation"
                            | course.slug === "listening-skills"
                            | course.slug === "how-to-learn-medical-vocabulary"
                            ? null : <FAQ faq={course.faq} />}
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
