import styles from "@/styles/utils/Search.module.css"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BlogCard from "../blog/BlogCard"


export function SearchBlock({ search, handleChange, handleOnBlur }) {
    return (
        <form
            className={`text-center position-relative ${styles["search-box"]}`}>
            <input className={styles["search-txt"]}
                type="text" placeholder="Search..."
                value={search}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            <span className={styles["search-btn"]}>
                <FontAwesomeIcon icon={faSearch} />
            </span>
        </form>
    )
}

export const SearchResult = ({ results }) => {

    if (results.length === 0) return <></>

    return (
        <div className={`position-absolute ${styles["wrapper-result"]}`}>
            <div className='p-5'>
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