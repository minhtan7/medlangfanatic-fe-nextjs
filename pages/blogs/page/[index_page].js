import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { BASE_URL, POST_PER_PAGE } from '@/config/index'
import apiService from '@/lib/apiService'
import LoadingSpinner from '@/components/utils/LoadingSpinner'
import BlogCard from '@/components/blog/BlogCard'
import PaginationBar from '@/components/utils/PaginationBar'
import Layout from '@/components/layout/Layout'
import { useEffect, useState } from 'react'
import { SearchBlock, SearchResult } from '@/components/utils/Search'


export default function BlogPage({ blogs, totalPage, page }) {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        const fetchSearch = async () => {
            const res = await apiService.get(`/posts/search/${search}`)
            setResults(res.data.posts)
        }
        fetchSearch()
    }, [search])
    const handleOnBlur = () => {
        setResults([])
    }
    return (
        <Layout>
            <div id="blog-page" style={{ backgroundColor: "#edf1ff91" }}>
                <Container>
                    <Row>
                        <Col>
                            <div className=' pt-5'>
                                <Link href="/" className='text-secondary text-decoration-none'>
                                    <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                                    Về trang chủ
                                </Link>
                                <h1 className='title' >Blogs</h1>
                            </div>
                        </Col>
                        <Col md={3} >
                            <div className='position-relative pt-5'>
                                <SearchBlock search={search} handleChange={handleChange} handleOnBlur={handleOnBlur} />
                                <SearchResult results={results} />
                            </div>

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
                    <PaginationBar page={page} totalPage={totalPage} />
                </Container>
            </div>
        </Layout>
    )
}
const today = (new Date()).toString()
const blogContent = [
    {
        _id: 1,
        title: "McKinsey experts bring sustainability and inclusion to the skies",
        content: "At the world’s largest air show, our colleagues explored sustainable aviation, building inclusive talent pipelines, and improving business performance against once-in-career disruptions.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today
    },
    {
        _id: 2,
        title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
        content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today
    },
    {
        _id: 3,
        title: "An explicit choice: Three leaders on making the decision to grow",
        content: "McKinsey leaders share stories about how the pursuit of sustainable, inclusive, and profitable growth can elevate business performance and inspire people.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today
    },
    {
        _id: 4,
        title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
        content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today
    },
    {
        _id: 5,
        title: "Tearing the ‘paper ceiling’: McKinsey supports effort driving upward mobility for millions of workers",
        content: "Bachelor’s degree requirements, the default for most middle and high-wage jobs, exclude many skilled workers. A new nationwide campaign is encouraging employers to change hiring practices.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today
    },
    {
        _id: 6,
        title: "An explicit choice: Three leaders on making the decision to grow",
        content: "McKinsey leaders share stories about how the pursuit of sustainable, inclusive, and profitable growth can elevate business performance and inspire people.",
        topic: ["sustainability", "inclusive growth"],
        createAt: today
    },
]
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
        }
    }

}




