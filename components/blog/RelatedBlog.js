const { default: Link } = require("next/link")

import styles from "@/styles/blogs/RelatedBlog.module.css"

export default function RelatedBlog({ blog }) {
    return blog && (
        <div className={styles['related-border']}>
            <p>Liên quan</p>
            <small>Blogs</small>
            <Link href={`/blogs/${blog.slug}`} className={styles['related-link']}>{blog.title}</Link>
        </div>
    )
}


