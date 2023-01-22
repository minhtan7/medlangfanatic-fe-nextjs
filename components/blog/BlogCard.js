import { slugTranslate } from "@/lib/slugTranslate"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import { Card } from "react-bootstrap"

export const BlogCard = ({ blog, length = 200 }) => {
    return blog && (
        <Card className='blog-card' >
            <Link href={`/blogs/${blog.slug}`}>
                <Image variant="top" style={{ borderRadius: 0, cursor: "pointer" }} src={blog.image} alt={blog.title} width={350} height={195} />
            </Link>
            <Card.Body >
                <Link href={`/blogs/${blog.slug}`}>
                    <Card.Title style={{ cursor: "pointer" }} >{blog.title}</Card.Title>
                </Link>
                <Card.Text>
                    <small className="text-muted">{dayjs(blog.createdAt).format("DD/MM/YYYY")}</small>
                    <span dangerouslySetInnerHTML={{ __html: blog.content.slice(0, length) + "..." }}></span>
                </Card.Text>
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
export default BlogCard