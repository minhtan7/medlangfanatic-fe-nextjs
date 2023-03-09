import { AllCourseCourseCard } from "@/components/courseCard/CourseCard";
import AllCoursesHero from "@/components/courses/AllCoursesHero";
import { Subscription } from "@/components/home/Subscription";
import Layout from "@/components/layout/Layout";
import { CTA } from "@/components/utils/CTA";
import { courseListContent, slugCourseByCat } from "mockData";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";


export default function Courses() {
    const [key, setKey] = useState('all');
    const router = useRouter()
    const { query: { type } } = router

    useEffect(() => {
        setKey(type ? type : "all")
    }, [type])
    return (
        <Layout
            title="Khóa học tiếng Anh Y khoa online"
            description="Tổng hợp các khóa học về tiếng Anh chuyên ngành Y khoa dành cho nhân viên Y tế Việt Nam | Từ vựng chuyên ngành Y khoa; Giao tiếp với bệnh nhân; Trình ca lâm sàng | Nghe nói đọc viết trong y văn"
            site_name="Khóa học tiếng Anh Y khoa online"
            url={`https://medlangfanatic.com/courses`}
        >
            <Script src={process.env.NEXT_APP_GG_TAG_MNG} />
            <AllCoursesHero />
            <Container id="all-course" className="mt-5 mb-5">
                <Row className="mb-4">
                    <h2 className="text-main">Được chọn lọc với nội dung rõ ràng, dễ hiểu, cùng nền tảng đẹp mắt</h2>
                    <p>Nhằm cải thiện khả năng ngoại ngữ và kỹ năng giao tiếp trong Y khoa</p>
                </Row>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => router.push({ pathname: router.pathname, query: { type: k } }, undefined, { scroll: false })}
                    className="mb-3"
                >
                    {Object.keys(slugCourseByCat).map(cat => (
                        <Tab key={cat} eventKey={cat} title={slugCourseByCat[cat].title}>
                            <Row className="">
                                {slugCourseByCat[cat].slugs.map(slug => (
                                    <Col md={3} key={slug} className="p-3">
                                        <AllCourseCourseCard course={courseListContent[slug]} width={"300px"} height={"200px"} />
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                    ))}

                </Tabs>
            </Container>
            {/* <CTA /> */}
            <div className='mt-5 pb-md-2 pt-md-5' style={{ backgroundColor: "#edf1ff91" }}>
                <Subscription />
            </div>
        </Layout>
    )
}
