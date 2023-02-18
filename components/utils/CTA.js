import Image from "next/image"
import { Button, Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/utils/CTA.module.css"

export const CTA = () => {
    return (
        <div id="cta-homepage" style={{ height: "150px" }} className={`${styles.cta}`}>
            <div className='h-100 position-relative' >
                <div className={`${styles["wrapper"]} text-main position-absolute top-50 start-50`}
                >
                    <p><i>
                        Nội dung gì ấy thật hấp dẫn thu hút để lại mail
                        <br />
                        nhận tài liệu hấp dẫn ấy!!!
                    </i></p>
                </div>
                <Button className={styles.btn}>Đăng ký nhận tài liệu</Button>
            </div >
        </div >
    )
}