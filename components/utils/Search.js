import styles from "@/styles/utils/Search.module.css"
import { faArrowUpRightFromSquare, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BlogCard } from "../blog/BlogCard"
import { useRouter } from "next/router"
import Link from "next/link"
import { courseListContent } from "mockData"
import Image from "next/image"


export function SearchBlock({ toPage, search, handleChange, handleDeleteSearch }) {
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (toPage) {
            router.push(`/blogs/search?q=${search}`)
        }
    }
    return (
        <form
            onSubmit={handleSubmit}
            className={`text-center position-relative ${styles["search-box"]}`}>
            <input className={styles["search-txt"]}
                type="text" placeholder="Search..."
                value={search}
                onChange={handleChange}
            />
            <span className={styles["search-btn"]}>
                <FontAwesomeIcon icon={faSearch} />
                {/* {search ?
                    <FontAwesomeIcon icon={faXmark} onClick={handleDeleteSearch} /> :
                    <FontAwesomeIcon icon={faSearch} />
                } */}
            </span>
        </form>
    )
}

export const SearchResult = ({ results }) => {

    if (results.length === 0) return <></>

    return (
        <div className={`position-absolute ${styles["wrapper-result"]}`}>
            <div className='p-3 p-md-5'>
                <h2 className='mb-3'>{results.length} Results</h2>
                {results.map((result, index) => (
                    <div key={index} className={`mb-2 ${styles["wrapper-blog"]}`}>
                        <BlogCard blog={result} compact={true} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export const SearchResultNav = ({ results }) => {

    if (results.length === 0) return <></>

    return (
        <div className={`position-absolute ${styles["wrapper-result"]}`}>
            <div className='p-3 p-md-4'>
                <div className="mb-4">
                    <p className='mb-3 fw-bold'>{results.length} bài blogs</p>
                    {results.map((result, index) => (
                        <div key={index} className={`mb-2 ${styles["wrapper-blog-nav"]}`}>
                            <Link href={`/blogs/${result.slug}`} passHref className='text-decoration-none text-black'>
                                <p className="mb-0" style={{ fontSize: "14px" }}>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    <span className="ms-3">{result.title}</span>
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
                <RecommendedCourses />
            </div>
        </div>
    )
}

const RecommendedCourses = () => {
    return (
        <div>
            <p className='mb-3 fw-bold'>Khóa học liên quan</p>
            {Object.keys(courseListContent).map(slug => (
                <div key={slug} className="mb-2">
                    <Link href={`/courses/${slug}`} passHref className='text-decoration-none text-black position-relative'>
                        <Image src={courseListContent[slug].image} alt={courseListContent[slug].title} width={80} height={40} />
                    </Link>
                    <Link href={`/courses/${slug}`} passHref className='text-decoration-none text-black'>
                        <span style={{ fontSize: "14px" }} className="ms-3">{courseListContent[slug].title}</span>
                    </Link>
                </div>
            ))}
        </div>
    )
}
