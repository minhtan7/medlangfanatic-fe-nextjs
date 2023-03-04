import Link from 'next/link'
import { Col, Container, Row, Tabs } from 'react-bootstrap'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { BASE_URL, POST_PER_PAGE } from '@/config/index'
import apiService from '@/lib/apiService'
import LoadingSpinner from '@/components/utils/LoadingSpinner'
import { BlogCard } from '@/components/blog/BlogCard'
import PaginationBar from '@/components/utils/PaginationBar'
import Layout from '@/components/layout/Layout'
import { useEffect, useState } from 'react'
import { SearchBlock, SearchResult } from '@/components/utils/Search'
import { useRouter } from 'next/router'
import Script from 'next/script'
import AllBlogHero from '@/components/blog/AllBlogHero'


export default function BlogPage({ blogs, totalPage, page }) {
    // const [search, setSearch] = useState("")
    // const [results, setResults] = useState([])
    // const handleChange = (e) => {
    //     setSearch(e.target.value)
    // }

    const [key, setKey] = useState('all');
    const router = useRouter()
    let { query: { index_page, type } } = useRouter()
    if (!index_page) {
        index_page = 1
    }
    useEffect(() => {
        setKey(type ? type : "all")
    }, [type])

    // useEffect(() => {
    //     const fetchSearch = async (search) => {
    //         const res = await apiService.get(`/posts/search/${search}`)
    //         setResults(res.data.posts)
    //     }
    //     if (search) {
    //         fetchSearch(search)
    //     }

    // }, [search])
    // const handleDeleteSearch = () => {
    //     setResults([])
    //     setSearch("")
    // }

    return (
        <Layout>
            <Script src={process.env.NEXT_APP_LUCKY_ORANGE} />
            <Script src={process.env.NEXT_APP_GG_TAG_MNG} />
            <AllBlogHero />
            <div id="blog-page" className='mt-5' style={{ backgroundColor: "#edf1ff91" }}>
                <Container>
                    {/* <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => router.push({ pathname: router.pathname, query: { type: k } }, undefined, { scroll: false })}
                        className="mb-3"
                    >
                        
                    </Tabs> */}
                    <Row>
                        {/* <Col>
                            <div className=' pt-5'>
                                <Link href="/" className='text-secondary text-decoration-none'>
                                    <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                                    Về trang chủ
                                </Link>
                                <h1 className='title' >Blogs</h1>
                            </div>
                        </Col> */}
                        <Col md={3} >
                            {/* <div className='position-relative pt-5'>
                                <SearchBlock search={search} handleChange={handleChange} handleDeleteSearch={handleDeleteSearch} />
                                <SearchResult results={results} />
                            </div> */}

                        </Col>
                    </Row>
                    <Row>
                        <hr />
                        {!blogs ? <LoadingSpinner /> : blogs.map((blog) => (
                            <Col key={blog._id} xs={12} md={4} className="mb-5 px-4" >
                                <BlogCard blog={blog} />
                            </Col>
                        ))}
                        <hr />
                    </Row>
                    <PaginationBar totalPage={totalPage} href={"/blogs/page/"} page={index_page} />
                </Container>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const response = await apiService.get(`/posts?page=1&limit=${POST_PER_PAGE}`);
    const paths = []
    for (let i = 0; i < response.data.totalPage; i++) {
        paths.push({ params: { index_page: (i + 1).toString() } })
    }
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const currentPage = params ? params.index_page : 1
    const response = await apiService.get(`/posts?page=${currentPage}&limit=${POST_PER_PAGE}`);
    const { posts: blogs, totalPage, page } = response.data
    return {
        props: {
            blogs, totalPage, page
        },
        revalidate: 86400
    }

}




