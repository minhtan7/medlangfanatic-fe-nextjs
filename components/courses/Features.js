import { useState } from 'react'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col } from 'react-bootstrap'
import Image from 'next/image'

import styles from "@/styles/courses/Features.module.css"

import { handleChangeSlide } from '@/lib/changeSlide'

const featureObj = {
    mavl: {
        subject: "https://res.cloudinary.com/tanvo/image/upload/v1674322596/medlangfanatic/courses/mavl/mavl-doi_tuong_arypjn.png",
        format: "https://res.cloudinary.com/tanvo/image/upload/v1674322595/medlangfanatic/courses/mavl/mavl-hinh_thuc_shmitq.png",
        time: "https://res.cloudinary.com/tanvo/image/upload/v1674322595/medlangfanatic/courses/mavl/mavl-thoi_gian_vpvzv1.png",
        fiveStarts: "https://res.cloudinary.com/tanvo/image/upload/v1674322595/medlangfanatic/courses/mavl/mavl-nam_sao_cmdu5j.png"
    },
    "medical-terminology": {
        subject: "https://res.cloudinary.com/tanvo/image/upload/v1674322583/medlangfanatic/courses/mt/mt-doi_tuong_dyvbff.jpg",
        format: "https://res.cloudinary.com/tanvo/image/upload/v1674322582/medlangfanatic/courses/mt/mt-hinh_thuc_tpfytr.jpg",
        time: "https://res.cloudinary.com/tanvo/image/upload/v1674322582/medlangfanatic/courses/mt/mt-thoi_gian_o0tkrl.jpg",
        fiveStarts: "https://res.cloudinary.com/tanvo/image/upload/v1674322582/medlangfanatic/courses/mt/mt-nam_sao_bigqpg.jpg"
    },
    "clinical-case-presentation": {
        subject: "https://res.cloudinary.com/tanvo/image/upload/v1671899425/medlangfanatic/courses/presenting-clinical-case-from-scratch/DOI_TUONG_HOC_i0m6ng.jpg",
        format: "https://res.cloudinary.com/tanvo/image/upload/v1671899426/medlangfanatic/courses/presenting-clinical-case-from-scratch/HINH_THUC_HOC_ioyenk.jpg",
        time: "https://res.cloudinary.com/tanvo/image/upload/v1671900610/medlangfanatic/courses/presenting-clinical-case-from-scratch/THOI_GIAN_HOC_pczhlm.jpg",
        fiveStarts: "https://res.cloudinary.com/tanvo/image/upload/v1671899426/medlangfanatic/courses/presenting-clinical-case-from-scratch/5_SAO_elyv9x.jpg"
    },
    "communication-with-patients-101": {
        subject: "https://res.cloudinary.com/tanvo/image/upload/v1672313880/medlangfanatic/courses/cwp/cwp-object_ylhcnh.jpg",
        format: "https://res.cloudinary.com/tanvo/image/upload/v1672313880/medlangfanatic/courses/cwp/cwp-hinh-thuc_fx9fbs.jpg",
        time: "https://res.cloudinary.com/tanvo/image/upload/v1672313880/medlangfanatic/courses/cwp/cwp-time_lybshz.jpg",
        fiveStarts: "https://res.cloudinary.com/tanvo/image/upload/v1672313880/medlangfanatic/courses/cwp/cwp-5__npp3pu.jpg"
    },
    "listening-skills": {
        subject: "https://res.cloudinary.com/tanvo/image/upload/v1674322596/medlangfanatic/courses/mavl/mavl-doi_tuong_arypjn.png",
        format: "https://res.cloudinary.com/tanvo/image/upload/v1674322595/medlangfanatic/courses/mavl/mavl-hinh_thuc_shmitq.png",
        time: "https://res.cloudinary.com/tanvo/image/upload/v1674322595/medlangfanatic/courses/mavl/mavl-thoi_gian_vpvzv1.png",
        fiveStarts: "https://res.cloudinary.com/tanvo/image/upload/v1674322595/medlangfanatic/courses/mavl/mavl-nam_sao_cmdu5j.png"
    },
    "how-to-learn-medical-vocabulary": {
        subject: "https://res.cloudinary.com/tanvo/image/upload/v1674322583/medlangfanatic/courses/mt/mt-doi_tuong_dyvbff.jpg",
        format: "https://res.cloudinary.com/tanvo/image/upload/v1674322582/medlangfanatic/courses/mt/mt-hinh_thuc_tpfytr.jpg",
        time: "https://res.cloudinary.com/tanvo/image/upload/v1674322582/medlangfanatic/courses/mt/mt-thoi_gian_o0tkrl.jpg",
        fiveStarts: "https://res.cloudinary.com/tanvo/image/upload/v1674322582/medlangfanatic/courses/mt/mt-nam_sao_bigqpg.jpg"
    },

}

const featureTab = (tab) => {
    switch (tab) {
        case "subject":
            tab = "Đối tượng"
            break;
        case "format":
            tab = "Hình thức"
            break;
        case "time":
            tab = "Thời gian"
            break;
        case "fiveStarts":
            tab = < >
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
                <FontAwesomeIcon icon={faStar} className="me-1" />
            </>
            break;
        default:
            break;
    }
    return tab
}

export const Features = ({ course }) => {
    const [slide, setSlide] = useState(0)
    const { feature } = course
    const handleChangleSlideBar = (index) => {
        setSlide(index)
    }
    const slug = course.slug

    return course && <div id={styles["about-bar"]} className="mb-5">

        <div className="px-3 px-md-5 position-relative " >
            <div className={`${styles["about-bar"]} row row-cols-2 row-cols-lg-4`}>
                {Object.keys(feature).map((a, index) => (
                    <span key={index} className={`col py-2 ${styles["about-bar-normal"]} ${slide === index ? "active" : ""}`} onClick={() => handleChangleSlideBar(index)}>
                        {featureTab(a)}
                    </span>
                ))}
            </div>
            {Object.keys(feature).map((a, index) => (
                <div className={`slideshow-container ${styles["about-slide"]}`} key={index}>
                    <div className={` ${styles["about-slides"]} faded ${slide === index ? "d-flex flex-column  flex-lg-row" : ""}`}>
                        <Col sm={12} lg={6} className="flex-shrink-0 position-relative"
                            style={{ height: "263px" }}
                        >
                            {/* <Image src={slug.toLowerCase() === "mavl" ? MAVLFeatureImage(a) : MTFeatureImage(a)} width="100%" /> */}
                            <Image src={featureObj[slug.toLowerCase()][a]}
                                fill
                                sizes="(max-width: 600px) 60vw , (max-width: 1200px) 40vw, 30vw"
                                alt="feature" />
                        </Col>
                        <Col sm={12} lg={6} className="flex-grow-1">
                            {a.content}
                            <ul className='fa-ul'>
                                {feature[a].map(c => (
                                    <li key={c}>
                                        <span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>{c}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </div>
                </div>
            ))
            }
            <div className='carousel-btn-wrapper'>
                <button className={`prev ${slide === 0 ? "stop-slide" : ""}`}
                    onClick={() => handleChangeSlide(-1, slide, setSlide, Object.keys(feature))}>
                    &#10094;
                </button>
                <button className={`next ${slide === Object.keys(feature).length - 1 ? "stop-slide" : ""}`}
                    onClick={() => handleChangeSlide(1, slide, setSlide, Object.keys(feature))}>
                    &#10095;
                </button>
            </div>
        </div>

    </div>
}