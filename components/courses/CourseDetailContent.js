import { faDumbbell, faFileArrowDown, faFileLines, faFilePdf, faQuestion, faSquarePollHorizontal, faVideo, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Accordion } from 'react-bootstrap'

import styles from "@/styles/courses/CourseDetailContent.module.css"

const presenting_clinical_case = [
    {
        id: 0,
        contents: [
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 1: Công thức trình bày câu mở đầu, luyện tập sử dụng 'present' và 'to be admitted'"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 2: Học cách mô tả triệu chứng và bệnh sử, luyện tập sử dụng mạo từ thích hợp với các triệu chứng, học cách mô tả các triệu chứng thường gặp"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 3: Học cách mô tả tiền căn cá nhân, gia đình, các thuốc đang sử dụng"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 4: Học cách mô tả các kết quả khám bình thường và bất thường"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 5: Học cách mô tả các kết quả cận lâm sàng"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 6: Học một số công thức biện luận chẩn đoán, mô tả đáp ứng và diễn tiến điều trị"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 7: Luyện tập trình bày hoàn chỉnh ca lâm sàng, nộp bài cuối khóa"
            },
            {
                contentable_type: "HtmlItem",
                name: "Trước buổi 8: Luyện tập trình bày hoàn chỉnh ca lâm sàng, nộp bài cuối khóa"
            },
        ],
        name: "Lý thuyết",

    },
    {
        id: 1,
        contents: [
            {
                contentable_type: "Lesson",
                name: "Buổi 1: Luyện tập trình bày câu mở đầu"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 2: Luyện tập trình bày phần bệnh sử + tiền căn"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 3: Luyện tập trình bày phần bệnh sử + tiền căn"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 4: Luyện tập trình bày phần kết quả khám"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 5: Luyện tập trình bày phần kết quả cận lâm sàng"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 6: Luyện tập trình bày phần diễn tiến điều trị"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 7: Luyện tập tổng hợp"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 8: Luyện tập tổng hợp"
            },
        ],
        name: "Buổi học tương tác tập trung qua Zoom",

    }
]
const communication_with_patients_101 = [
    {
        id: 1,
        contents: [
            {
                contentable_type: "Lesson",
                name: "Buổi 1: Luyện tập chào hỏi, tự giới thiệu và hỏi bệnh sử"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 2: Luyện tập hỏi bệnh sử + tiền căn"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 3: Luyện tập hỏi bệnh sử + tiền căn"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 4: Luyện tập hỏi bệnh sử + tiền căn"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 5: Luyện tập hỏi bệnh sử + tiền căn"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 6: Luyện tập phần ngôn ngữ cần cho phần khám và làm thủ thuật"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 7: Luyện tập phần ngôn ngữ cần cho phần khám và làm thủ thuật"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 8: Luyện tập tư vấn bệnh, tiên lượng và hướng điều trị"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 9: Luyện tập tư vấn bệnh, tiên lượng và hướng điều trị"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 10: Luyện tập tư vấn bệnh, tiên lượng và hướng điều trị"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 11: Luyện tập toàn buổi khám"
            },
            {
                contentable_type: "Lesson",
                name: "Buổi 12: Luyện tập toàn buổi khám"
            },
        ],
        name: "Buổi học tương tác tập trung qua Zoom",

    }
]

const contentIcon = {
    Lesson: <FontAwesomeIcon icon={faVideo} />,
    Assignment: <FontAwesomeIcon icon={faDumbbell} />,
    HtmlItem: <FontAwesomeIcon icon={faFileLines} />,
    Iframe: <FontAwesomeIcon icon={faWindowMaximize} />,
    Pdf: <FontAwesomeIcon icon={faFilePdf} />,
    Survey: <FontAwesomeIcon icon={faSquarePollHorizontal} />,
    Quiz: <FontAwesomeIcon icon={faQuestion} />,
    Download: <FontAwesomeIcon icon={faFileArrowDown} />
}

export const CourseDetailContent = ({ chapters, slug, notShowTitle }) => {
    if (slug === "clinical-case-presentation") {
        return <div id="course-detail-content" className="mb-5">
            <div className="px-3 px-md-5">
                <h2 className='mb-4 text-main-title'>Chương trình học</h2>
                <Accordion alwaysOpen>
                    {presenting_clinical_case.map(chapter => {
                        // const { hours, minutes, seconds } = formatTime(chapter.duration_in_seconds)
                        return (
                            <Accordion.Item key={chapter.id} eventKey={chapter.id} className="accordion-item-outline">
                                <Accordion.Header bsPrefix='style' >
                                    <span>{chapter.name}</span>
                                </Accordion.Header>
                                <Accordion.Body as={"ul"} className='fa-ul'>
                                    {chapter.contents.map(content => (
                                        <Content key={content.id} content={content} id={content.id} />
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    }
    if (slug === "communication-with-patients-101") {
        return <div id="course-detail-content" className="mb-5">
            <div className="px-3 px-md-5">
                <h2 className='mb-4 text-main-title'>Chương trình học</h2>
                <Accordion alwaysOpen>
                    {communication_with_patients_101.map(chapter => {
                        // const { hours, minutes, seconds } = formatTime(chapter.duration_in_seconds)
                        return (
                            <Accordion.Item key={chapter.id} eventKey={chapter.id} className="accordion-item-outline">
                                <Accordion.Header bsPrefix='style' >
                                    <span>{chapter.name}</span>
                                </Accordion.Header>
                                <Accordion.Body as={"ul"} className='fa-ul'>
                                    {chapter.contents.map(content => (
                                        <Content key={content.id} content={content} id={content.id} />
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    }
    return chapters && <div className={`${styles["course-detail-content"]} mb-5`} >
        <div className="px-3 px-md-5">
            {notShowTitle ? null : <h2 className='mb-4 text-main-title'>Chương trình học</h2>}
            <Accordion alwaysOpen>
                {chapters.map(chapter => {
                    // const { hours, minutes, seconds } = formatTime(chapter.duration_in_seconds)
                    return (
                        <Accordion.Item key={chapter.id} eventKey={chapter.id} className="accordion-item-outline">
                            <Accordion.Header bsPrefix='style' >
                                <span>{chapter.name}</span>
                                <div className={`${styles.duration} d-none d-md-block`} >
                                    <span >{chapter.contents.length} bài giảng</span>
                                    {/* <span>{`${hours === "00" ? "" : `${hours}:`}${minutes} phút`}</span> */}
                                </div>
                            </Accordion.Header>
                            <Accordion.Body as={"ul"} className={`fa-ul ${styles["detail-fa-ul"]}`}>
                                {chapter.contents.map(content => (
                                    <Content key={content.id} content={content} id={content.id} />
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        </div>
    </div>
}

const Content = ({ content }) => {
    return (
        <li className={`${content.contentable_type === "Lesson" ? styles["video"] : styles["normal"]}`}>
            <span className={`fa-li ${styles["video-fa-li"]}`}  >{contentIcon[content.contentable_type]}</span>
            {content.name}
        </li>
    )
}