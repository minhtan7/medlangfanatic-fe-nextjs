import { useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

import styles from "@/styles/home/Subscription.module.css"

const SUBSRIBE_MESSAGE_SUCCESS = "Cám ơn bạn đã đăng ký!! Bạn kiểm tra mail hàng tuần nhé"
const SUBSRIBE_MESSAGE_FAIL = "Có trục trặc xảy ra. Bạn vui lòng tải lại trang và thử lần nữa nhé. Cám ơn bạn!"

export const Subscription = () => {
    const [data, setData] = useState({
        email: "",
        name: "bạn"
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const url = `https://medlangfanatic.pipedrive.com/v1/persons?api_token=${process.env.REACT_APP_PIPEDRIVE_API}`

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...data, marketing_status: "subscribed" })
        });
        const d = await res.json()
        setMess(d.success ? SUBSRIBE_MESSAGE_SUCCESS : SUBSRIBE_MESSAGE_FAIL)
        setShow(true)
    }
    return (
        <div id={styles["subscription-session"]} className='mb-md-5 overflow-hidden mx-md-7'>
            <Container className={`h-100 ${styles.container}`}>
                <Row className='flex-column flex-md-row'>
                    <Col className='d-flex mb-2 mb-md-0'>
                        <h2 className='my-auto mb-2 mb-md-0 '>Đăng ký nhận tài liệu<br /> tiếng Anh Y khoa!</h2>
                    </Col>
                    <Col className='m-auto'>
                        <form onSubmit={handleSubmit} className="position-relative">
                            <div>
                                <input onChange={handleChange} name='email' type="email" placeholder="Email..." />
                                <Button className={`${styles["subscription-span"]} position-md-absolute`} >Đăng ký</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
            {/* <ToastMsg show={show} setShow={setShow} message={mess} /> */}
        </div>
    )
}