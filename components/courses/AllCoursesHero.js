import Image from "next/image";

export default function AllCoursesHero() {

    return (
        <div className="position-relative overflow-hidden">
            <div className="position-relative wrapper-img" >
                <Image src="https://res.cloudinary.com/tanvo/image/upload/v1676478962/medlangfanatic/courses/all-courses_flsvdn.jpg"
                    alt="all courses" fill object-fit={true}
                />
            </div>
            <h1
                className="position-absolute top-50 start-50 translate-middle text-main fw-bold"
                style={{ fontSize: "5rem", textShadow: "3px 3px #011c7e4f" }}
            >Khóa học
            </h1>
            <style jsx>{`
                .wrapper-img{
                    height: 400px
                }
                @media (max-width: 700px) {
                    .wrapper-img{
                        height: 300px;
                        width: 1050px
                    }   
                }
            `}
            </style>
        </div>
    )
}
