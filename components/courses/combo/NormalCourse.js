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
import { CourseCarousel } from "@/components/home/CourseList"
import { courseListContent } from "mockData"
import { recommendedCourse } from "@/lib/recommendCourse"


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
            {course.slug === "how-to-learn-medical-vocabulary" && (
                <Container>
                    <h2>Khóa học bổ trợ:</h2>
                    <CourseCarousel responsive={responsive} courseListContent={recommendedCourse({ courseListContent: courseListContent, recommendedSlugs: Object.keys(courseListContent).filter(el => el !== "how-to-learn-medical-vocabulary") })} />
                </Container>
            )}
            <CTA course={course} />
            <ShowCourseBtn course={course} />
        </Layout>
    )

}
