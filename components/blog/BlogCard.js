import { Card } from "react-bootstrap"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { slugTranslate } from "@/lib/slugTranslate"
import styles from "@/styles/blogs/BlogCard.module.css"

export default function BlogCard({ blog, length = 200 }) {
    const [mount, setMount] = useState(false)
    useEffect(() => {
        setMount(true)
    }, [])
    return mount && (
        <Card className={styles['blog-card']} >
            <Link href={`/blogs/${blog.slug}`}>
                <Image variant="top" style={{ borderRadius: 0, cursor: "pointer" }} src={blog.image} alt={blog.title} width={350} height={195} />
            </Link>
            <Card.Body >
                <Link href={`/blogs/${blog.slug}`}>
                    <Card.Title style={{ cursor: "pointer" }} >{blog.title}</Card.Title>
                </Link>
                <div>
                    <small className="text-muted">{dayjs(blog.createdAt).format("DD/MM/YYYY")}</small>
                    <p dangerouslySetInnerHTML={{ __html: blog.content.slice(0, length) + "..." }}></p>
                </div>
                <Card.Text>
                    {blog.topic.length && blog.topic.map((t, index) => {
                        return <span key={index} style={{ fontSize: "0.8rem" }}>
                            {slugTranslate({ target: "categories", slug: t.name }).toUpperCase()} {index === blog.topic.length - 1 ? "" : "| "}
                        </span>
                    })}
                </Card.Text>
            </Card.Body>
        </Card >
    )
}