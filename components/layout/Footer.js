import { faFacebook, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap'
// import "./style.css"
import styles from "@/styles/Footer.module.css"

const Footer = () => {
    return (
        <div id="footer">
            <div className='py-4 text-white' style={{ backgroundColor: "#2b3438" }}>
                <Container className='px-5 pt-4'>
                    <Row>
                        <Col xs={12} md={4} className="mb-3">
                            <div >
                                <h5>Theo dõi Medlangfanatic:</h5>
                                <p><span style={{ color: "var(--contrast" }}>Nền tảng học tiếng Anh Y khoa trực tuyến</span></p>
                                <div className={styles["brands-group"]}>
                                    <a target="_blank" href='https://facebook.com/medlangfanatic' rel="noreferrer">
                                        <FontAwesomeIcon className='ms-3' size='2x' icon={faFacebook} />
                                    </a>
                                    <a target="_blank" href='https://www.youtube.com/medlangfanatic' rel="noreferrer">
                                        <FontAwesomeIcon className='ms-3' size='2x' icon={faYoutube} />
                                    </a>
                                    <a target="_blank" href='https://l.facebook.com/l.php?u=https%3A%2F%2Fopen.spotify.com%2Fshow%2F0L2jMfX2LvL1w37ovyu7jW%3Ffbclid%3DIwAR0e3aErVjLYvcnXkatGJfQfrwwnpePBjPDVLHe7NYCbJ9b_BK0vvWxjhvc&h=AT2gZn1yvsbQUo2i32daFyL8zDSoDAhLiRSECFYSPCdHrDkasMNYqCDsuAPImMHk3GOa0WKahCf6qSffqDjhFz-9YPU-WgIAVRMKExIQ0BbGp4gYfyyDnwr6QtOaEqqwnGMJQnz8Vg&__tn__=-UK-R&c[0]=AT0bh4pq9hsmTaaac-gdaNUEmGBvSZnuJswftGTYFSn0J8yrej0VayyDsl2-9TXeoYuty0lX_bTl1W80u0NRn3pHfQku_Z2BAuvdTIXVQigSak1gk0veK0z278Nvn5i6VhGZ9rirbdLYtnvLcZP05bq5MmQxavOMfBBrZR1nKQW5LdG7nMS3Xrzu67kBF2Wvb2w-mGkweN2f-X4rUYS4H98H' rel="noreferrer">
                                        <FontAwesomeIcon className='ms-3' size='2x' icon={faSpotify} />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="mb-3">
                            <Stack>
                                <p><span className="text-contrast">Med Lang Fanatic</span> là một nhóm các bác sĩ có hoài bão cải thiện khả năng ngoại ngữ và kỹ năng giao tiếp của nhân viên y tế tại Việt Nam.</p>

                            </Stack>
                        </Col>
                        <Col xs={12} md={4} className="mb-3">
                            <Stack>
                                <div>
                                    <h5>Liên hệ: </h5>
                                    <p className='ms-3'><FontAwesomeIcon icon={faEnvelope} /> medlangfanatic@gmail.com</p>
                                </div>

                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-main py-1 text-center text-white'>
                <small>© Med Lang Fanatic</small>
            </div>
        </div>
    )
}

export default Footer