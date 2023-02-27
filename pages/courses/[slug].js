import { useEffect, useState } from 'react'
import { Accordion, Button, Card, Col, Container, Row, Table, useAccordionButton } from 'react-bootstrap'
import Link from 'next/link';

// import { CourseCard, RecruitBtn } from '../../components/CourseCard/CourseCard'

// import { getSingleCourse } from '../../features/course/courseSlice'
import apiService from '@/lib/apiService'
import { slugTranslate } from '@/lib/slugTranslate';
import { Hero } from '@/components/courses/Hero';
import Layout from '@/components/layout/Layout';
import { Features } from '@/components/courses/Features';
import { CourseDetailContent } from '@/components/courses/CourseDetailContent';
import { Instructors } from '@/components/courses/Instructors';
import { StudentFeedback } from '@/components/courses/StudentFeedback';
import { FAQ } from '@/components/courses/FAQ';
import { ShowCourseBtn } from '@/components/layout/ToTopArrow';
import { CourseCard } from '@/components/courseCard/CourseCard';
import { CTA } from '@/components/courses/CTA';
import { useFilterCssRoot } from 'hook/useFilterCssRoot';
import { Cover, CoverCWP, CoverMedicalTerminology, CoverPCCS, HLMV, LLM } from '@/components/courses/Cover';
import { filterCss } from '@/lib/filterCss';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faCircle, faDotCircle, faHandSparkles, faListDots, faMagicWandSparkles, faPlusCircle, faSprayCanSparkles, faStairs, faStarOfLife, faWandMagicSparkles, faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

import styles from "@/styles/courses/CoursePage.module.css"
import { InstructorCardLeft, InstructorCardVerticle } from '@/components/home/InstructorList';
import { instructors } from 'mockData';
import { isMobile } from 'react-device-detect';
import ComboCourse from '@/components/courses/combo/ComboCourse';
import NormalCourse from '@/components/courses/combo/NormalCourse';
import Script from 'next/script';

const defaultHeight = 72;

// const filterCss = (slug) => {
//     switch (slug.toLowerCase()) {
//         case "mavl":
//             return { main: "#011c7e", mainDark: "#131653", contrast: "#05feb1", contrastLight: "#05feb12e" }
//         case "medical-terminology":
//             return { main: "#82008f", mainDark: "#64006e", contrast: "#fff400", contrastLight: "#fac5ff" }
//         case "clinical-case-presentation":
//             return { main: "#0C3B2E", mainDark: "#6d9773", contrast: "#ffba00", contrastLight: "#bb8a52" }
//         case "communication-with-patients-101":
//             return { main: "#5F021F", mainDark: "#440217", contrast: "#ff8906", contrastLight: "#ffc6c7" }
//         default:
//             break;
//     }
// }


export default function CoursePage({ course }) {
    const [load, setLoad] = useState(false)
    const router = useRouter()
    const { query: { slug } } = router
    useEffect(() => {
        setLoad(true)
    }, [])

    return (
        <>
            <Script src={process.env.NEXT_APP_LUCKY_ORANGE} />
            <Script src={process.env.NEXT_APP_GG_TAG_MNG} />
            {course && slug === "combo-vocabulary" ?
                (<ComboCourse course={course} />) : (<NormalCourse course={course} />)}
        </>)
}





export async function getStaticPaths() {
    return {
        paths:
            [
                { params: { slug: "medical-terminology" } },
                { params: { slug: "mavl" } },
                { params: { slug: "clinical-case-presentation" } },
                { params: { slug: "communication-with-patients-101" } },
                { params: { slug: "listening-skills" } },
                { params: { slug: "how-to-learn-medical-vocabulary" } },
                { params: { slug: "combo-vocabulary" } },
            ],
        fallback: true
    }
}

const comboVocab = {
    title: "Combo vocab",
    courses: ["medical-terminology", "mavl", "how-to-learn-medical-vocabulary"],
    slug: "combo-vocabulary",
    price: 3550,

}

export async function getStaticProps({ params: { slug } }) {
    if (slug.toLowerCase() !== "combo-vocabulary") {
        const courseId = slugTranslate({ target: "id", slug: slug.toLowerCase() })
        const res = await apiService.get(`/courses/${courseId}`)
        return {
            props: {
                course: res.data
            }
        }
    } else {
        const course = await Promise.all(comboVocab.courses.map(async (el) => {
            try {
                const courseId = slugTranslate({ target: "id", slug: el })
                console.log("courseId", courseId)
                const res = await apiService.get(`/courses/${courseId}`)
                return res.data

            } catch (error) {
                console.log(error.message)
            }
        }))
        // console.log(course)
        return {
            props: {
                course: {
                    ...course,
                    slug: "combo-vocabulary",
                    price: 3550,
                }
            }
        }
    }
}


