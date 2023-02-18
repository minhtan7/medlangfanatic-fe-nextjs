import Image from "next/image";

export default function AllCoursesHero() {

    return (
        <div className="position-relative ">
            <div className="position-relative" style={{ height: "400px" }}>
                <Image src="https://res.cloudinary.com/tanvo/image/upload/v1676478962/medlangfanatic/courses/all-courses_flsvdn.jpg"
                    alt="all courses" fill object-fit={true}
                />
            </div>
            <h1
                className="position-absolute top-50 start-50 translate-middle text-main fw-bold"
                style={{ fontSize: "5rem", textShadow: "3px 3px #011c7e4f" }}
            >Khóa học</h1>        </div>
    )
}
