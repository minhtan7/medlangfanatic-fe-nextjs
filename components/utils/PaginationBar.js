import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Button } from "react-bootstrap";

import styles from "@/styles/utils/PaginationBar.module.css"

export default function PaginationBar({ page, totalPage }) {

    return (
        <div className="text-end me-5 py-3">
            <span className="me-3" style={{ fontSize: "1.4rem" }}>
                <span style={{ color: "var(--main)" }}>{`${page} `}</span>/
                <span>{` ${totalPage}`}</span>
            </span>
            <Link href={`/blogs/page/${parseInt(page) - 1}`}>
                <Button variant="primary"
                    className={styles["pagination-btn"]}
                    disabled={page === 1 ? true : false}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Button>
            </Link>
            <Link href={`/blogs/page/${parseInt(page) + 1}`}>
                <Button variant="primary"
                    className={styles["pagination-btn"]}
                    disabled={page === totalPage ? true : false}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </Button>
            </Link>
        </div >
    );
};


