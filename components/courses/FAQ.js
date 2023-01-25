import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Nav, Row, Tab } from 'react-bootstrap'

import styles from "@/styles/courses/FAQ.module.css"

export const FAQ = ({ faq }) => {
    return faq && <div className="mb-5" id="faq">

        <h2 className="px-3 px-md-5 mb-4 text-main-title">Các câu hỏi thường gặp</h2>

        <Tab.Container defaultActiveKey={0}>
            <Row className={styles["left-tabs"]}>
                <Col className="px-5" md={6}>
                    <Nav variant="tabs" className="flex-column">
                        {faq.map((item, index) => (
                            <Nav.Item className={styles['faq-nav-item']} key={index}>
                                <Nav.Link eventKey={index}>
                                    <FontAwesomeIcon icon={faQuestion} />
                                    <span className='ms-1'> {item.question}</span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col md={6} className="px-5 px-md-1 ">
                    <Tab.Content>
                        {faq.map((item, index) => (
                            <Tab.Pane eventKey={index} className={styles['faq-tab-pane']} as="p" style={{ textAlign: "justify" }} key={index}>
                                {item.answer}
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </div >
}
