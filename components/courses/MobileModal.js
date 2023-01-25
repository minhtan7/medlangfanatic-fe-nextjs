import React from 'react'
import ModalNext from '../layout/Modal';
import { CourseCardMobile } from '../courseCard/CourseCardMobile';
// import { Modal } from 'react-bootstrap';
// import { CourseCard } from '../CourseCard/CourseCard'


const MobileModal = ({ course, show, setShow }) => {
    const handleClose = () => setShow(false);


    return (
        <ModalNext
            show={show}
            handleClose={handleClose}
        >
            <CourseCardMobile course={course} />
        </ModalNext>
    );
}

export default MobileModal