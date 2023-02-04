import apiService from "@/lib/apiService"
import { useEffect, useState } from "react"

const { default: Link } = require("next/link")
const { Container } = require("react-bootstrap")
const { default: Carousel } = require("react-multi-carousel")
const { default: BlogCard } = require("../blog/BlogCard")

import styles from "@/styles/home/BlogSession.module.css"

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const BlogSession = ({ blogs }) => {
    return (
        <div id={styles["blog-session"]} className='mb-4 mb-md-5'>
            <div className='mx-md-7'>
                <Container className='h-100'>
                    <h1 className='mb-4 text-main fw-bold'>
                        Blogs
                        <br />
                        <span className='text-30 fw-normal' style={{ color: "#000" }}>
                            Chia sẻ kinh nghiệm
                        </span>
                        <Link href="/blogs" className={`${styles["visit-blog"]} d-md-block`}><i>Xem thêm Blogs</i></Link>
                    </h1>
                    {blogs && <Carousel responsive={responsive}>
                        {blogs.map(blog => (
                            // <div style={{ padding: "1rem 2rem" }}>
                            <div key={blog._id} style={{ marginRight: "3rem", paddingBottom: "1rem" }}>
                                <BlogCard blog={blog} length="100" />
                            </div>
                        ))}
                    </Carousel>}
                </Container>
            </div>
        </div>
    )
}


