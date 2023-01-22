import Link from "next/link"

import styles from "@/styles/buttons/RecruitBtn.module.css"

export const RecruitBtn = ({ cursor, course }) => {

    return (
        <div className="text-center">
            <Link href={course && `/register-form/${course.slug.toLowerCase()}`}>
                <button
                    className={styles["recruit-btn-card"]} style={{ cursor: cursor ? "pointer" : "unset" }}
                >
                    <div className={styles["left"]}></div>
                    Đang mở đăng ký
                    <div className={styles["right"]}></div>
                </button>
            </Link>
        </div >
    )
}