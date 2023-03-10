import { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/router'
// import "./style.css"
import Script from 'next/script'
import Image from 'next/image'
import { useScript } from 'hook/useScript'
import { useFilterCssRoot } from 'hook/useFilterCssRoot'
import Layout from '@/components/layout/Layout'
import { PIPE_DRIVE } from '@/config/index'
import { filterCss } from '@/lib/filterCss'


const slugs = {
    "medical-terminology": "https://webforms.pipedrive.com/f/ckweFskLyr2V5zNB3vMuVsB0jgaEbAHXcuRFz8YBHN5O4Bsdk3od9WJ8rD19uCnL0f",
    "mavl": "https://webforms.pipedrive.com/f/6Na7FxACrR9AIRnhT8dm44I4RAqCPurExWfMOooL85t0s1JxH2m9WyyqEEW9kzCo5t",
    "medical-terminology-trial": "https://webforms.pipedrive.com/f/6N37cxIUxaxGnALsAiEAT4LSo6G8xjanTmsByGJEUj3zBfhJlgYRYBsJN6DhbKxWyn",
    "mavl-trial": "https://webforms.pipedrive.com/f/5XdP3bJX5SfOZmrSFx0Fg41UHirDkKLIr3Sm8hafZ2DOHU1HJK8Osq1efouFK9wmVZ",
    "clinical-case-presentation": "https://webforms.pipedrive.com/f/6FCJQ2wrJH8q1JR8NoyJCeF6vDA2GVbfYVh7DtgOjGkeqHjg3o2Vz8YsFpp2euHWUP",
    "communication-with-patients-101": "https://webforms.pipedrive.com/f/6jZHCqSSCU9dyeZNUMyqnLlrTYi9jR0xgoaCnmtUYHvmJDLwZfhQCsc3rCD9AvMo1B",
    "document": "https://webforms.pipedrive.com/f/bYYsEmdAWOeSU2Pw7yWCOiSbrRfOby9SP9RtJSIMZH4wIqkpRegRx5sg1usNTk6Ldx",
    "listening-skills": "https://webforms.pipedrive.com/f/5VG61SLwRTR8qSNkIjHR6m99JfyNAXA8cETVeUMoE0a9PT1HlpJMPlydgGbr1A4Z9h",
    "combo-vocabulary": "https://webforms.pipedrive.com/f/5VCoQi5YHBpDfEESeZY5lKenczHjq6WsKYjTwR0LGrwIPOzhEc7I22J4ZNcDHL5OmL",
    "how-to-learn-medical-vocabulary": "https://webforms.pipedrive.com/f/6Ox8KwHEIirzOR1Xe0fo7H1rNa0mfmHdHvT1ICDoy1vUDuKi8NtoYZvNI1rgX52kQH"
}

export default function FormPage({ pipedrive, slug }) {
    const [show, setShow] = useState(false)
    const [link, setLink] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000);
        if (slugs[slug]) {
            setLink(slugs[slug])
        }
    }, [slug])
    if (slug) {

    }
    useFilterCssRoot({ slug, ...filterCss(slug) })


    return (
        <Layout
            title="Form ????ng k?? kh??a h???c"
            description="Gi???ng vi??n v???i ki???n th???c chuy??n s??u v?? kinh nghi???m tu nghi???p ??? n?????c ngo??i (Ph??p, M???, Hungary, ????i Loan, ??c)"
            site_name="Gi???ng vi??n c???a Med Lang Fanatic"
            url={`https://medlangfanatic.com/courses`}
        >
            <Script src={pipedrive} />
            <Script src={process.env.NEXT_APP_GG_TAG_MNG} />
            <Container className='py-5' id="form-page">
                <Row>
                    <Col xs={0} md={6} >
                        <div className="px-5 position-relative w-100 h-100 d-none d-md-block">
                            <div className='position-sticky  left-0  w-100' style={{ height: "40rem", top: "5rem" }}>
                                <div className='position-absolute top-10 start-10 ' style={{ width: "320px", height: "307px" }}>
                                    <Image fill src="https://res.cloudinary.com/tanvo/image/upload/v1674606644/medlangfanatic/form/form-1_gafych.png" alt="thank you" unoptimized />
                                </div>
                                <div className='position-absolute top-50 start-50' style={{ transform: "translate(-20%,-20%)", width: "320px", height: "307px" }} >
                                    <Image fill src="https://res.cloudinary.com/tanvo/image/upload/v1674606644/medlangfanatic/form/form-2_vzqmwz.png" alt="thank you" unoptimized />
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className={`w-100 ${show ? "d-block" : "d-none"}`} >
                            <div className="pipedriveWebForms" data-pd-webforms={link}></div>
                        </div>
                        <div className={` ${!show ? "d-block" : "d-none"} h-100 w-100 d-flex justify-content-center align-items-center`} >
                            <Spinner animation="border" role="status"  >
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}


export async function getStaticPaths() {
    const paths = Object.keys(slugs).map(slug => ({ params: { slug } }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params: { slug } }) {
    return {
        props: {
            pipedrive: PIPE_DRIVE,
            slug
        }
    }
}
