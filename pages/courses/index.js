import { AllCourseCourseCard } from "@/components/courseCard/CourseCard";
import AllCoursesHero from "@/components/courses/AllCoursesHero";
import Layout from "@/components/layout/Layout";
import { CTA } from "@/components/utils/CTA";
import { courseListContent, slugCourseByCat } from "mockData";
import { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";


export default function Courses() {
    const [key, setKey] = useState('all');

    return (
        <Layout>
            <AllCoursesHero />
            <Container id="all-course" className="mt-5 mb-5">
                <Row className="mb-4">
                    <h2 className="text-main">Được chọn lọc với nội dung rõ ràng, dễ hiểu, cùng nền tảng đẹp mắt</h2>
                    <p>Nhằm cải thiện khả năng ngoại ngữ và kỹ năng giao tiếp trong Y khoa</p>
                </Row>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    {Object.keys(slugCourseByCat).map(cat => (
                        <Tab key={cat} eventKey={cat} title={slugCourseByCat[cat].title}>
                            <Row className="">
                                {slugCourseByCat[cat].slugs.map(slug => (
                                    <Col md={3} key={slug} className="p-3">
                                        <AllCourseCourseCard course={courseListContent[slug]} width={"100%"} height={"140px"} />
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                    ))}

                </Tabs>
            </Container>
            <CTA />
        </Layout>
    )
}
