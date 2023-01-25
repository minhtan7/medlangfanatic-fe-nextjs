

import { faAngleDoubleUp, faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import styles from "@/styles/layout/ToTopArrow.module.css"
import MobileModal from '../courses/MobileModal'

export const ShowCourseBtn = ({ course }) => {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true);
    return (
        <>
            <div className={`position-fixed ${styles["arrow-up"]}`}>
                <a className='d-none d-md-flex border rounded-circle justify-content-center align-items-center' href='#header'>
                    <FontAwesomeIcon icon={faAngleDoubleUp} size="1x" />
                </a>
                <span onClick={handleShow} className='d-md-none border rounded-circle d-flex justify-content-center align-items-center' href='#header'>
                    <FontAwesomeIcon icon={faInfo} className={styles["heartbeat"]} size="1x" />
                </span>

            </div>
            <MobileModal course={course} show={show} setShow={setShow} />
        </>
    )
}

export const ToTopArrowNormalUse = () => {
    return (
        <>
            <div className='position-fixed arrow-up '>
                <a className='d-flex border rounded-circle justify-content-center align-items-center' href='#header'>
                    <FontAwesomeIcon icon={faAngleDoubleUp} size="1x" />
                </a>
            </div>
        </>
    )
}