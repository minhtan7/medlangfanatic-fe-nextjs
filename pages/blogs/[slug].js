import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
// import { useScript } from '../../hook/useScript'

import { Subscription } from '@/components/home/Subscription'
import LoadingSpinner from '@/components/utils/LoadingSpinner'
import RelatedBlog from '@/components/blog/RelatedBlog'
import BlogContent from '@/components/blog/BlogContent'
import apiService from '@/lib/apiService'

import styles from "@/styles/blogs/SingleBlogPage.module.css"
import Layout from '@/components/layout/Layout'
import Script from 'next/script'

export default function SingleBlogPage({ blog }) {
    // useScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0")
    // useScript("<path>/dist/share-buttons.js")
    // useScript("//cdn.jsdelivr.net/npm/share-buttons/dist/share-buttons.js")

    return blog && (
        <Layout>
            <Script src={process.env.NEXT_APP_LUCKY_ORANGE} />
            <Script src={process.env.NEXT_APP_GG_TAG_MNG} />
            {!Object.keys(blog).length ? <LoadingSpinner /> : (
                <Container className='mb-5'>
                    <Row className='pt-5'>
                        <Col xs={0} md={2} ></Col>
                        <Col xs={12} md={8}>
                            <div className=' pt-4'>
                                <Link href="/blogs" className='text-secondary text-decoration-none'>
                                    <FontAwesomeIcon icon={faAngleLeft} className="me-3" />
                                    Về trang blogs
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} md={2}></Col>
                    </Row>
                    <Row>
                        <Col xs={0} md={2} ></Col>
                        <Col xs={12} md={8}>
                            <BlogContent blog={blog} />
                        </Col>
                        <Col xs={12} md={2} className="d-flex align-items-end">
                            <RelatedBlog blog={randomRelatedBlog(blog)} />
                        </Col>
                    </Row>
                </Container>
            )}
            {/* <Subscribe /> */}
            <div className='mt-5 pb-md-2 pt-md-5' style={{ backgroundColor: "#edf1ff91" }}>
                <Subscription />
            </div>

        </Layout>
    )
}




const randomRelatedBlog = (blog) => {
    if (blog.relatedPost.length === 1 | blog.relatedPost.length === 0) return
    if (blog.relatedPost[blog.relatedPost.length - 1].slug === blog.slug) {
        return blog.relatedPost[0]
    }
    for (let i = 0; i < blog.relatedPost.length; i++) {
        if (blog.relatedPost[i].slug !== blog.slug) {
            return blog.relatedPost[i]
        }
    }
    return

}

export async function getStaticPaths() {
    const response = await apiService.get(`/posts?page=1&limit=100`);
    const paths = response.data.posts.map((p) => ({ params: { slug: p.slug } }))

    console.log(paths)
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params: { slug } }) {
    const response = await apiService.get(`/posts/${slug}`);
    return {
        props: {
            blog: response.data
        }
    }
}