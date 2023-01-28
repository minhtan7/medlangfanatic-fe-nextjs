import { useState } from "react"
import Link from "next/link"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { sideBarItemsDoc } from 'mockData'

import styles from "@/styles/documentations/SideBar.module.css"

export default function SideBar({ slug }) {

    return <div id={styles["sidebar"]} className={styles["sidebar"]} >
        {sideBarItemsDoc.map((item, index) => <SideBarItem key={index} item={item} slug={slug} />)}
    </div >
}

function SideBarItem({ item, slug }) {
    const [open, setOpen] = useState(false)

    if (item.children) {
        return (
            <div className={open ? `${styles["sidebar-item"]} ${styles.open}` : styles["sidebar-item"]}>
                <div className={styles["sidebar-title"]}>
                    <span >
                        {item.icon}
                        {item.title}
                    </span>
                    <FontAwesomeIcon className={styles["toggle-btn"]}
                        icon={faChevronDown}
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className={styles["sidebar-content"]}>
                    {item.children.map((child, index) => <SideBarItem key={index} item={child} slug={slug} />)}
                </div>
            </div>
        )
    } else {
        const active = item.slug === slug
        return (
            <Link href={item.path || "#"} className={`${styles["sidebar-item"]} ${styles.plain} ${active ? styles.active : ""}`}>
                {/* {item.icon} */}
                {item.title}
            </Link>)
    }
}