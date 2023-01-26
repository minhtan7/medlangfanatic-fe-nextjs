const { faFacebook } = require("@fortawesome/free-brands-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")
import { slugTranslate } from '@/lib/slugTranslate'
import dayjs from 'dayjs'
import styles from "@/styles/blogs/BlogContent.module.css"


export default function BlogContent({ blog }) {
    return (
        <div >
            <h1 className='py-3 mb-0 fw-bold blog-title' >{blog.title}</h1>
            {/* <div className='wrapper-fb-share-btn'>
                <FontAwesomeIcon size='2x' icon={faFacebook} />
                <div className="fb-share-button position-absolute "
                    data-href={`${process.env.REACT_APP_FRONTEND_URL}/blogs/${slug}`}
                    data-layout="button_count">
                </div>
            </div> */}
            <div className="share-btn mb-2">
                <a className="btn-facebook" data-id="fb">
                    <FontAwesomeIcon size='2x' icon={faFacebook} />
                </a>
            </div>

            <div>
                <img
                    // src={blog.image} 
                    src={blog.image}
                    alt="blog" width="100%" />
            </div>
            <div className='py-4 d-block d-md-flex justify-content-between' >
                <small className="text-muted">{dayjs(blog.createAt).format("DD/MM/YYYY")}</small>
                <div>
                    {blog.topic.map((t, index) => (
                        <small key={index}>
                            {slugTranslate({ target: "categories", slug: t.name }).toUpperCase()} {index === blog.topic.length - 1 ? "" : "| "}
                        </small>
                    ))}
                </div>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            </div>
        </div>
    )
}