import Layout from "@/components/layout/Layout"
import { instructors } from "mockData"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Accordion, Button, Col, Container, Row, useAccordionButton } from "react-bootstrap"
import { CourseDetailContent } from "../CourseDetailContent"
import { InstructorCardVerticle } from "@/components/home/InstructorList"

const { faPlusCircle, faStarOfLife, faCheckCircle, faCircle } = require("@fortawesome/free-solid-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")
import styles from "@/styles/courses/CoursePage.module.css"
import Link from "next/link"
import { isMobile } from "react-device-detect"


const combo = {
    title: ["Medical Terminology", "Medical Academic Vocabulary List"],
    goal: []
}

const who = [
    {
        title: <>Sinh viên chuyên <br /> ngành Y Nha Dược</>,
        content: <i>nắm vững nền tảng thuật ngữ Y khoa tiếng Anh</i>,
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677433925/medlangfanatic/courses/combo/1_ws14a7.png"
    },
    {
        title: "Y - Bác sĩ",
        content: <i>xây dựng lại vững chắc căn bản thuật ngữ Y khoa tiếng Anh</i>,
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677433925/medlangfanatic/courses/combo/2_pptao1.png"
    },
    {
        title: "Nhân viên Y tế",
        content: <i>mong muốn cải thiện khả năng đọc các tài liệu ngành y</i>,
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677433925/medlangfanatic/courses/combo/3_puv9qb.png"
    },
]
const LIST_FB_IMAGE = [
    "https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_fb_1_hjumie.jpg",
    "https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_fb_2_omu7dq.jpg",
    "https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_fb_3_fy4lp0.jpg",

]

const GOALS = [
    "Đánh giá khả năng nắm vững của bản thân với trường từ vựng thông thường",
    "Biết cách lên kế hoạch học từ vựng tuần tự với các bộ từ hiệu suất cao",
    "Nắm vững hơn 800 từ vựng hàn lâm thường gặp trong y văn nhất",
    "Nắm trọn hơn 650 gốc từ tiếng Hy Lạp và Latin",
    "Thuộc các thuật ngữ y khoa của 13 hệ cơ quan",
    "Tìm hiểu các thuật ngữ y khoa dễ bị hiểu nhầm"
]
const WHAT = [
    ["Medical Academic Vocabulary List",
        [
            "Từ vựng academic có tần suất gặp cao nhất trong y văn - 20% lượng từ vựng trong textbook và bài báo y khoa",
            "Phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng",
            "Phân tích hàm nghĩa của từ vựng đa nghĩa trong nhiều ngữ cảnh khác nhau"
        ]
    ],
    ["Medical Terminology",
        [
            "Series video giảng giải các thuật ngữ y khoa cơ bản theo giải phẫu, sinh lý, triệu chứng của 13 hệ cơ quan khác nhau với hình ảnh đẹp mắt, trực quan sinh động",
            "Nắm trọn hơn 650 gốc từ tiếng Hy Lạp và Latin liên quan đến các thuật ngữ y khoa của 13 hệ cơ quan khác nhau",
            "Hơn 100 bài tập giúp ghi nhớ nghĩa của các thuật ngữ cơ bản"
        ]
    ]
]

function CustomToggle({ children, eventKey, exit, setExit }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        setExit({ ...exit, [eventKey]: false })
    })

    return (
        <div onClick={decoratedOnClick} className={` ${styles["custom-accordion-btn"]} ${!exit[eventKey] ? ` ${styles["border-rounded"]} bg-main-hover` : ""}`}>
            <button
                type="button"
                className={`${styles["btn-accrodion"]} ${!exit[eventKey] ? `bg-main-hover` : ""} fw-bold`}
            >
                {children}
            </button>
            <span className={`m-auto px-3 py-1 `} style={{ transitionDuration: "0.3s", transform: exit[eventKey] ? "rotate(0)" : "rotate(45deg)" }}>
                <FontAwesomeIcon icon={faPlusCircle} className={`${!exit[eventKey] ? `text-main` : ""}`} />
            </span>
        </div>
    );
}

export default function ComboCourse({ course }) {
    const [hung, tram, cang] = instructors
    const [exit, setExit] = useState({
        0: false,
        1: true,
        2: true
    })
    const [mobile, setMobile] = useState(false)
    const router = useRouter()
    useEffect(() => {
        setMobile(isMobile)
    }, [isMobile])
    const circleListFn = (arr, index) => {
        if (index === -1) {
            return (<ul>
                <li className={`${styles["student-icon"]} ${styles.last}`} >
                    <Image
                        src="https://res.cloudinary.com/tanvo/image/upload/v1674323557/medlangfanatic/HomePage/plus-icon_faxapn.jpg" alt="student icon"
                        fill object-fit="contain"
                    />
                    <span >
                        <strong>200+ học viên</strong><br />
                        đăng ký khóa học
                    </span>
                </li>
            </ul>)
        }
        return (<ul><li className={styles['student-icon']}>
            <Image src={arr[index]} alt="student icon"
                fill object-fit="contain"
            />
            {circleListFn(arr, index - 1)}
        </li></ul>)
    }
    return course && (
        <Layout>
            <Container className={`position-relative ${styles.wrapper} mt-md-5 pt-md-5`}>
                <Row >
                    {!mobile ? null : (
                        <Col xs={12} md={0}>
                            <div className={`position-relative ms-md-5 ${styles["hero-img-wrapper"]}`} >
                                <Image fill object-fit="contain" src="https://res.cloudinary.com/tanvo/image/upload/v1677433924/medlangfanatic/courses/combo/hero-combo_prqcc9.png" alt="hero" />
                            </div>
                        </Col>

                    )}
                    <Col xs={12} md={6} className="px-2 px-md-3 m-auto overflow-hidden">
                        <p>Online Courses
                            <FontAwesomeIcon icon={faStarOfLife} className='ms-3' />
                        </p>
                        <h1 className='mb-5' >
                            A COMPREHENSIVE<br /> COURSE OF:<br />
                            <span className='text-main fw-bold'>MEDICAL VOCABULARY</span>
                        </h1>
                        <div className='mb-5 d-md-flex justify-content-between'>
                            <ul className={`${styles["circle-list"]} d-flex mb-3 mb-md-0`} >
                                {circleListFn(LIST_FB_IMAGE, LIST_FB_IMAGE.length - 1)}
                            </ul>

                            <Button
                                onClick={() => router.push("/form/combo-vocabulary")}
                                variant="primary" className='btn-sign-up me-5 mb-3 py-2'
                                style={{ width: "16.5rem" }}
                            >
                                <span>Đăng ký ngay</span>
                            </Button>
                        </div>

                        <div className='d-flex'>
                        </div>
                    </Col>
                    {mobile ? null : (
                        <Col xs={0} md={6}>
                            <div className={`position-relative ms-md-5 ${styles["hero-img-wrapper"]}`} >
                                <Image fill object-fit="contain" src="https://res.cloudinary.com/tanvo/image/upload/v1677433924/medlangfanatic/courses/combo/hero-combo_prqcc9.png" alt="hero" />
                            </div>
                        </Col>
                    )}

                </Row>
            </Container>
            <div className="bg-main pt-5 pb-5">
                <Container>
                    <h2 className='text-white fw-bold mb-4'>Khóa học này dành cho ai?</h2>
                    <Row>
                        {who.map((el, idx) => (
                            <Col key={idx} xs={12} md={4} className="rounded p-3" style={{ height: "15rem" }}>
                                <div className='bg-white h-100 rounded p-4 ps-md-5 pe-md-5' >
                                    <div className='d-flex mb-2'>
                                        <div className={styles['img-wrapper']} >
                                            <div className='position-relative' style={{ height: "4.5rem", width: "4.5rem" }}>
                                                <Image src={el.image} alt={el.title} fill object-fit="contain" />
                                            </div>
                                        </div>
                                        <p className={`text-main fw-bold d-flex align-items-center m-0 ${styles["who-title"]}`}>{el.title}</p>
                                    </div>
                                    <p className='text-justify' >{el.content}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >
            <div className='bg-main-hover'>
                <Container className='pt-5 pb-5'>
                    <h2 className='mb-5 fw-bold'>Kết quả nhận được sau khoá học là gì?</h2>
                    <Row>
                        {GOALS.map((g, idx) => (
                            <Col key={idx} md={4} className='pe-4 mb-4'>
                                <div className='d-flex'>
                                    <p className='m-auto text-center text-main fw-bold' style={{ minWidth: "5rem", fontSize: "1.5rem" }}>{`0${idx + 1}`.slice(-2)}</p>
                                    <p className='m-auto text-justify'>{g}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {/* <div className='bg-main-hover py-5'>
                <Container>
                    <h2 className='mb-5 text-main fw-bold'>Mình học gì trong khóa học?</h2>
                    <Row>
                        {WHAT.map((w, idx) => (
                            <Col key={idx}>
                                <div className='bg-white px-5 py-5 rounded-5'>
                                    <h3 className='text-main mb-4 text-center   '>{w[0]}</h3>
                                    <ul className='fa-ul'>
                                        {w[1].map((c, idx) => (
                                            <li key={idx} className='mb-2 text-justify'
                                                style={{ wordSpacing: "1px" }}
                                            >
                                                <span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>
                                                {c}
                                            </li>
                                        ))}
                                    </ul>


                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div> */}
            <Container id="combo-cir" className={`py-5 ${styles["combo-cir"]}`}>
                <h2 className='mb-4 fw-bold'>Chương trình học</h2>
                <Accordion className='px-md-5' alwaysOpen>
                    <Accordion.Item key={course[2].id} eventKey="combo" style={{ border: "none", borderBottom: "1px solid var(--main)" }} >
                        <Accordion.Header as={"span"} bsPrefix='style'  >
                            {/* <span>{}</span> */}
                            <h4 className={`${styles['comb-cir-title']}`}><FontAwesomeIcon className='text-main' icon={faCheckCircle} /> How to learn Medical Vocabulary</h4>
                        </Accordion.Header>
                        <Accordion.Body as={"ul"} className='fa-ul'>
                            <CourseDetailContent notShowTitle={true} chapters={course[2].chapters} slug={course[2].slug} />
                        </Accordion.Body>

                    </Accordion.Item>
                    <Accordion.Item key={course[0].id} eventKey="mt" style={{ border: "none", borderBottom: "1px solid var(--main)" }} >
                        <Accordion.Header bsPrefix='style' >
                            {/* <span>{}</span> */}
                            <h4><FontAwesomeIcon className='text-main' icon={faCheckCircle} /> Medical Terminology</h4>
                        </Accordion.Header>
                        <Accordion.Body as={"ul"} className='fa-ul'>
                            <CourseDetailContent notShowTitle={true} chapters={course[0].chapters} slug={course[0].slug} />
                        </Accordion.Body>

                    </Accordion.Item>
                    <Accordion.Item key={course[1].id} eventKey="mavl" style={{ border: "none", borderBottom: "1px solid var(--main)" }}>
                        <Accordion.Header bsPrefix='style' style={{ borderRadius: "0" }} >
                            <h4><FontAwesomeIcon className='text-main' icon={faCheckCircle} /> Medical Academic Vocabulary List</h4>
                        </Accordion.Header>
                        <Accordion.Body as={"ul"} className='fa-ul'>
                            <CourseDetailContent notShowTitle={true} chapters={course[1].chapters} slug={course[1].slug} />
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
                {/* <CourseDetailContent chapters={course.chapters} slug={course.slug} /> */}

            </Container>
            <div className='mb-md-5' >
                {mobile ? (
                    <div className=" position-relative overflow-hidden" style={{ height: "460px", width: "100%" }}>
                        <Image src="https://res.cloudinary.com/tanvo/image/upload/v1677433925/medlangfanatic/courses/combo/mobile-combo_dxwicx.jpg"
                            fill object-fit="contain" alt="banner" />
                    </div>
                ) : (

                    <div className="m-auto rounded-4 position-relative overflow-hidden" style={{ height: "270px", width: "1000px" }}>
                        <Image src="https://res.cloudinary.com/tanvo/image/upload/v1677433924/medlangfanatic/courses/combo/desktop-combo_l5of7g.jpg"
                            fill object-fit="contain" alt="banner" />
                    </div>
                )}
            </div>
            <div className='bg-main-hover py-5'>
                <Container>
                    <h2 className='mb-5 fw-bold'>Giảng viên của bạn là ai?</h2>
                    <Row className='justify-content-center'>
                        {[hung, cang, tram].map((ins, idx) => (
                            <Col key={idx} md={3} className='bg-white'>
                                <InstructorCardVerticle instructor={ins} />
                            </Col>

                        ))}
                    </Row>
                </Container>

            </div>
            <div className=' pt-5 pb-3'>
                <Container>
                    <h2 className='text-main text-center mb-4 fw-bold'>Học phí</h2>
                    <Row className='justify-content-center'>
                        <table style={{ width: "45rem" }}>
                            <tbody>

                                <tr style={{ height: "3rem" }}>
                                    <th colSpan={3} className='ps-3 text-main' style={{ backgroundColor: "var(--main-bg-hover)" }}>Khóa Riêng Lẻ</th>

                                </tr>

                                <tr style={{ height: "3.2rem" }}>
                                    <td colSpan={2} className='ps-4'>
                                        <span className='position-relative'>
                                            <FontAwesomeIcon className='text-main position-absolute top-50 translate-middle' icon={faCircle} fontSize={5} />
                                        </span>
                                        <span className={`ms-3 fw-bold text-main ${styles["cell-title"]}`}>
                                            Medical Academic Vocabulary List
                                        </span>
                                    </td>
                                    <td className='fw-bold text-main text-end pe-3'>3.650.000đ</td>
                                </tr>
                                <tr style={{ height: "1.5rem" }}>
                                    <td colSpan={2} className='ps-4'>
                                        <span className='position-relative'>
                                            <FontAwesomeIcon className='text-main position-absolute top-50 translate-middle' icon={faCircle} fontSize={5} />
                                        </span>
                                        <span className={`ms-3 fw-bold text-main ${styles["cell-title"]}`}>
                                            Medical Terminology
                                        </span>
                                    </td>
                                    <td className='fw-bold text-main text-end pe-3'>1.690.000đ</td>
                                </tr>
                                <tr style={{ height: "3.2rem" }}>
                                    <td colSpan={2} className='ps-4'>
                                        <span className='position-relative'>
                                            <FontAwesomeIcon className='text-main position-absolute top-50 translate-middle' icon={faCircle} fontSize={5} />
                                        </span>
                                        <span className={`ms-3 fw-bold text-main ${styles["cell-title"]}`}>
                                            How to Learn Medical Terminology
                                        </span>
                                    </td>
                                    <td className='fw-bold text-main text-end pe-3'>Add on</td>
                                </tr>
                                <tr style={{ height: "3.5rem", borderTop: "2px solid white" }}>
                                    <td colSpan={2} className={`ps-4 fw-bold ${styles["cell-combo"]}`} >
                                        Combo 3 khóa
                                    </td>
                                    <td className={`text-decoration-line-through  text-end pe-3 ${styles["cell-price"]}`} >5.340.000đ</td>
                                </tr>
                                <tr style={{ height: "3rem" }}>
                                    <td colSpan={3} className={`text-end pe-3 ${styles["cell-down-price"]}`} >5.340.000đ</td>
                                </tr>
                                <tr style={{ height: "1rem" }}>

                                    <td colSpan={3} className='text-main text-end ps-4 pe-3 pb-1' style={{ fontSize: "1rem" }}>Tiết kiệm 1 triệu lận á, <b>MUA NGAY</b> nha</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link href={`/form/combo-vocabulary`} className='text-center mt-4'>
                            <Button
                                style={{ width: "20rem", fontSize: "1.5rem" }}
                                variant="primary" className='btn-sign-up mb-3' >
                                <span>Đăng ký ngay</span>
                            </Button>
                        </Link>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className='pt-3 pb-0'>
                    <Col md={7}>
                        <h2 className='mb-5'>Các câu hỏi thường gặp</h2>
                        <Accordion defaultActiveKey={"0"}>
                            <div className='mb-3'>
                                <CustomToggle eventKey="0" setExit={setExit} exit={exit}
                                >Làm sao tôi có thể liên lạc với giảng viên hướng dẫn?</CustomToggle>
                                <Accordion.Collapse eventKey="0"
                                    onExit={() => { setExit({ ...exit, 0: true }) }}
                                    className={`px-3 py-2 ${styles["custom-accordion-collapse"]}`} >
                                    <p>Học viên sẽ được tham gia Community của lớp học để trao đổi với giảng viên hướng dẫn. Ngoài ra, Med Lang Fanatic còn để nút &apos;Discussions&apos; tại mỗi bài của khóa học để học viên có thể trao đổi thêm hoặc gửi thắc mắc. Tất cả học viên của khóa học đều có thể thấy phần nội dung thảo luận này.</p>
                                </Accordion.Collapse>
                            </div>
                            <div className='mb-3'>
                                <CustomToggle eventKey="1" setExit={setExit} exit={exit}>Đăng ký khóa học như thế nào?</CustomToggle>
                                <Accordion.Collapse
                                    onExit={() => { setExit({ ...exit, [1]: true }) }}
                                    eventKey="1" className={`px-3 py-2 ${styles["custom-accordion-collapse"]}`} >
                                    <p>Bạn cần điền đầy đủ thông tin trong form đăng ký và chuyển khoản học phí để hoàn tất đăng ký.</p>
                                </Accordion.Collapse>
                            </div>
                            <div className='mb-3'>
                                <CustomToggle eventKey="2" setExit={setExit} exit={exit}>Có giấy chứng nhận sau khi kết thúc khóa học không?</CustomToggle>
                                <Accordion.Collapse eventKey="2"
                                    onExit={() => { setExit({ ...exit, [2]: true }) }}
                                    className={`px-3 py-2 ${styles["custom-accordion-collapse"]}`} >
                                    <p>Các khóa học của Med Lang Fanatic hướng đến việc thành thạo các kỹ năng có thể ứng dụng trong công việc và cuộc sống. Do đó, việc bạn có thể ứng dụng được các kiến thức đã học sẽ là bảo chứng tuyệt vời nhất. Tuy vậy, Med Lang Fanatic vẫn có chứng nhận tham gia khóa học dành cho các học viên hoàn tất 100% khóa học vào cuối khóa, để học viên vẫn có thể lưu giữ kỷ niệm đẹp về khoảng thời gian đồng hành cùng Med Lang Fanatic.</p>
                                </Accordion.Collapse>
                            </div>
                        </Accordion>
                    </Col>
                    <Col md={5} >
                        <div className={`text-center ${styles.qa} position-relative m-auto`}>
                            <Image fill object-fit="contain" src="https://res.cloudinary.com/tanvo/image/upload/v1677462555/medlangfanatic/courses/combo/combo-5_fnxzh4.png" alt="standing doctor" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}