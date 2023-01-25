import React, { useState } from 'react'


import Image from 'next/image'
import { ShowMore } from '../utils/ShowMore'
import { handleChangeSlide } from '@/lib/changeSlide'


export const StudentFeedback = ({ defaultHeight, feedBack }) => {
    const [slide, setSlide] = useState(0)

    return (
        <div className="mb-5" id="student-feedback">
            <div className="px-5 position-relative bg-lighter py-3" >
                <h2 className='mb-4 text-main-title'>Nhận xét của học viên</h2>
                {feedBack.map((f, index) => (
                    <div className="slideshow-container" key={f.reviewerName}>
                        <div className={`mySlides faded ${slide === index ? "slide-active" : ""}`}  >
                            <ShowMore slide={slide} defaultHeight={defaultHeight} text={f.content} index={index} />
                            <span className='slide-quote'>
                                {/* <FontAwesomeIcon icon={faQuoteLeft} /> */}
                                <Image width={64} height={64} src="/images/quote.svg" alt="quote sign" />
                            </span>
                        </div>
                        <div className={`mySlides faded  pt-2 ${slide === index ? "d-flex" : ""}`}>
                            <div className="flex-shrink-0" >
                                {/* <FontAwesomeIcon icon={faUserDoctor} size="2x" className='doctor-icon' /> */}
                                <Image src="https://res.cloudinary.com/tanvo/image/upload/v1674323344/medlangfanatic/HomePage/student_icon_iz9mg9.svg" width={60} height={60} className='doctor-icon' alt="student icon" />
                            </div>
                            <div className="flex-grow-1 ms-3 m-auto">
                                <p className='m-0'><strong>{f.reviewerName}</strong></p>
                                <p className='m-0'>{f.reviewerTitle}</p>
                            </div>
                        </div>
                    </div>
                ))
                }
                <div className='carousel-btn-wrapper'>
                    <button className={`prev ${slide === 0 ? "stop-slide" : ""}`}
                        onClick={() => handleChangeSlide(-1, slide, setSlide, feedBack)}>
                        &#10094;
                    </button>
                    <button className={`next ${slide === feedBack.length - 1 ? "stop-slide" : ""}`}
                        onClick={() => handleChangeSlide(1, slide, setSlide, feedBack)}>
                        &#10095;
                    </button>
                </div>
            </div>
        </div>
    )
}
