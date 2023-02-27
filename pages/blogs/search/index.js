
import apiService from "@/lib/apiService"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import styles from "@/styles/blogs/SearchPage.module.css"
import { BlogCardHorizontal } from "@/components/blog/BlogCard"
import Layout from "@/components/layout/Layout"
import { Container } from "react-bootstrap"
import { SearchBlock } from "@/components/utils/Search"
import PaginationBar from "@/components/utils/PaginationBar"
import Script from "next/script"

export default function SearchPage() {
    const [results, setResults] = useState({})
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleDeleteSearch = () => {
        setResults([])
        setSearch("")
    }

    const { query } = useRouter()
    const { q, page, limit } = query
    useEffect(() => {
        const fetchSearch = async ({ search, page, limit }) => {
            const res = await apiService.get(`/posts/search/${search}?page=${page}&limit=${limit}`)
            setResults(res.data)
        }
        if (q) {
            fetchSearch({ search: q, page, limit })
        }
    }, [q])
    return (
        <Layout>
            <Script src={process.env.NEXT_APP_LUCKY_ORANGE} />
            <Script src={process.env.NEXT_APP_GG_TAG_MNG} />
            <Container className="mt-5 mb-5">
                {Object.keys(results).length && <div className={`${styles["wrapper-result"]}`}>
                    <div className=''>
                        <div className="d-flex justify-content-between">
                            <h2 className='mb-3'>{results.posts.length}/{results.totalPost} Results</h2>
                            {/* <PaginationBar page={results.page} totalPage={results.totalPage} /> */}
                            <PaginationBar totalPage={results.totalPage} href={`/blogs/search?q=${q}&page=`} page={results.page} />

                            <div style={{ width: "20rem" }}>
                                <SearchBlock toPage={true} search={search} handleChange={handleChange} handleDeleteSearch={handleDeleteSearch} />
                            </div>
                        </div>
                        {results.posts?.map((result, index) => (
                            <div key={index} className={`mb-2 ${styles["wrapper-blog"]}`}>
                                <BlogCardHorizontal blog={result} compact={true} />
                            </div>
                        ))}
                    </div>
                </div>}
            </Container>
        </Layout>
    )
}
