import Image from "next/image";

export default function AllBlogHero() {

    return (
        <div className="position-relative overflow-hidden">
            <div className="position-relative wrapper-img" >
                <Image src="https://res.cloudinary.com/tanvo/image/upload/v1677967692/medlangfanatic/blogs/blog-hero_xjcypd.jpg"
                    alt="all courses" fill object-fit="contain"
                />
            </div>
            <h1
                className="title position-absolute  text-main fw-bold"
            >Bài Blogs
            </h1>
            <style jsx>{`
                .wrapper-img{
                    height: 400px
                }
                .title{
                    font-size:5rem;
                    text-shadow: 3px 3px #011c7e4f;
                    left: 5rem;
                    bottom: 2rem
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
