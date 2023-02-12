import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import styles from "@/styles/thankou/ThankyouPage.module.css"

// const slugs = {
//     "medical-terminology": 2026776,
//     "mavl": 1751294
// }

export default function ThankyouPage() {
    // useScript(process.env.REACT_APP_LUCKY_ORANGE)

    return (
        <Layout>
            <Container>
                <Row>
                    <Col sx={12} md={6}>
                        <div className={`m-5 position-relative ${styles["tks-wrapper"]}`} >
                            <Image fill object-fit="contain"
                                src="https://res.cloudinary.com/tanvo/image/upload/v1674608005/medlangfanatic/form/thankyou_il8xsx.png" alt="thank you" unoptimized />
                        </div>
                    </Col>
                    <Col sx={12} md={6}>
                        <div className="text-main pb-5 px-5 d-flex flex-column justify-content-center align-items-center w-100 h-100 text-center">
                            <h1 className="fw-bold">Cám ơn bạn!</h1>
                            <p className='mb-4'>Med Lang Fanatic đã nhận được đơn đăng ký của bạn. Hãy kiểm tra hộp email và làm theo hướng dẫn để hoàn tất đăng ký bạn nhé. </p>
                            <h4><i>You&apos;re just a course away from the amazing future!  </i></h4>
                        </div>
                    </Col>
                </Row>
            </Container>
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
        fallback: false
    }
}

export async function getStaticProps() {
    return {
        props: {}
    }
}