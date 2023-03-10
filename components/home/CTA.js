import Image from "next/image"
import { Button, Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/home/CTA.module.css"
import { useRouter } from "next/router"
export const CTA = () => {
    const router = useRouter()
    return (
        <div id="cta-homepage" className={`${styles.cta}`} style={{ height: "514px" }} >
            <Container className="h-100">
                <Row className="h-100">
                    <Col md={6} className="text-main h-100 d-flex justify-content-center align-items-center flex-column">
                        <div className="mb-md-3 ps-md-5 ms-md-5 pe-md-5">
                            <h1 className={`text-uppercase ${styles.title}`}>Học hỏi</h1>
                            <h1 className={`${styles.sub} mb-md-4`}>không giới hạn</h1>
                            <p>
                                Hãy xây dựng và phát triển sự nghiệp của bạn<br />
                                với nền tảng ngoại ngữ và kỹ năng mềm dành cho<br />
                                sinh viên và nhân viên y tế ở Việt Nam
                            </p>
                        </div>
                        <div>
                            <Button variant="primary"
                                onClick={() => router.push("/courses")}
                                className={` btn-sign-up ${styles["btn-sign-up-contrast"]} py-3 me-3 mb-2 mb-md-0`} >
                                <span>Tìm ngay khóa học phù hợp</span>
                            </Button>
                        </div>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>
        </div >
    )
}

// export const CTA = () => {
//     return (
//         <div id="cta-homepage" style={{ height: "514px" }} className="mb-5 mt-5 mx-md-7">
//             <Container className='h-100'>
//                 <Row className='h-100'>
//                     <Col xs={12} md={6} className=' d-flex justify-content-center align-items-center'>
//                         <div className='w-100'>
//                             <p className='mb-4'>Cùng Med Lang Fanatic</p>
//                             <h1 className='text-main fw-800'>Khám phá tri thức mới <br /> chuyên ngành Y Khoa<br />thông qua Tiếng Anh</h1>
//                             <h4 className='fw-light text-main mb-5'><i>Nền tảng học Tiếng Anh Y Khoa trực tuyến</i></h4>
//                             <div className='mb-5'>
//                                 <a href='#course-list-session' >
//                                     <Button
//                                         // onClick={() => navigate("/register-form")}
//                                         variant="primary" className={`btn-primary-contrast ${styles["btn-sign-up-contrast"]} py-2 me-3 mb-2 mb-md-0`} >
//                                         <span>Các khóa học</span>
//                                     </Button>
//                                 </a>
//                                 <a href='#hp-instructor-card'>
//                                     <Button
//                                         // onClick={() => navigate("/register - form")} 
//                                         variant="primary" className={`${styles["btn-sign-up"]} py-2`} ><span>Giảng viên</span></Button>
//                                 </a>
//                             </div>
//                             <p><i>Dare to open the box!</i></p>
//                         </div >
//                     </Col >
//                     <Col xs={12} md={6} className='d-none d-md-block m-auto'>
//                         <div className='text-center'>
//                             <Image width="550" height="372" alt="hero" src='https://res.cloudinary.com/tanvo/image/upload/v1674247488/medlangfanatic/HomePage/homepage-hero_gku7lu.jpg' />
//                         </div>
//                         <div className={styles["cta-hung"]}>
//                             <div className='d-flex'>
//                                 <div className='rounded-circle cta-left me-3'>
//                                     <Image width="60" height="60" src="https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.hung_kgiok1.webp" alt="dr.Hung" />
//                                 </div>
//                                 <div className='cta-right d-flex flex-column justify-content-center'>
//                                     <p className='mb-0 fw-bold'>Hưng Trần from MLF</p>
//                                     <small>@founder</small>
//                                 </div>
//                             </div>
//                             <p className='mb-0'>&quot; Another way to learn Medical &quot;</p>
//                         </div>
//                     </Col>
//                 </Row >
//             </Container >
//         </div >
//     )
// }