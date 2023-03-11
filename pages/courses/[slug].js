import Script from 'next/script';
import { useRouter } from 'next/router';


import apiService from '@/lib/apiService'
import { slugTranslate } from '@/lib/slugTranslate';

import ComboCourse from '@/components/courses/combo/ComboCourse';
import NormalCourse from '@/components/courses/combo/NormalCourse';


export default function CoursePage({ course }) {
    const router = useRouter()
    const { query: { slug } } = router

    return (
        <>
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


