import styles from "@/styles/utils/Search.module.css"
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BlogCard } from "../blog/BlogCard"
import { useRouter } from "next/router"


export function SearchBlock({ toPage, search, handleChange, handleDeleteSearch }) {
    const router = useRouter()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(toPage)
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
                {search ?
                    <FontAwesomeIcon icon={faXmark} onClick={handleDeleteSearch} /> :
                    <FontAwesomeIcon icon={faSearch} />
                }
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
