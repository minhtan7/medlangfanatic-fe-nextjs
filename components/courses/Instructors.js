import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { instructors } from '../../mockData'
import Image from 'next/image'
const [hung, tram, cang, huong, duc, truc] = instructors



const COURSE_BY_SLUG = {
    "clinical-case-presentation": [hung, huong, tram],
    "communication-with-patients-101": [hung, huong, tram, cang, duc, truc],
    mavl: [hung, tram],
    "medical-terminology": [hung, cang],
    "listening-skills": [hung],
    "how-to-learn-medical-vocabulary": [hung]
}
export const Instructors = ({ slug }) => {

    const filterInstructor = ({ slug }) => {
        return COURSE_BY_SLUG[slug.toLowerCase()].map((ins, index) => (
            <Row key={index}>
                <Col md={4} className="d-flex justify-content-center">
                    <Image
                        src={ins.imageUrl} alt="instructor"
                        width={180} height={180} style={{ border: "2px solid var(--main)", padding: 0, height: "fit-content", borderRadius: "50%" }}
                    />
                </Col>
                <Col className='m-auto'>
                    <h4 style={{ fontWeight: "600", color: "var(--main)" }}>{ins.title} {ins.name}</h4>
                    <ul>
                        {ins.bio.split("\n").map((b, idx) => (
                            <li key={idx}>{b}</li>
                        ))}
                    </ul>

                </Col>
            </Row>

        ))

    }

    return (
        <div id="instructors" className="mb-5" >
            <Row >
                <Col className="px-3 px-md-5">
                    <h2 className='mb-4 text-main-title'>Giảng viên</h2>
                    {filterInstructor({ slug })}
                </Col>
            </Row >
        </div >
    )
}

