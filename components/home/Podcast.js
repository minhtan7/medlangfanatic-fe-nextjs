import Carousel from "react-multi-carousel";

const { default: Image } = require("next/image");
const { Container } = require("react-bootstrap")

import styles from "@/styles/home/Podcast.module.css"

const PODCASTS = [
    {
        title: "34",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339714/medlangfanatic/HomePage/podcast-34_zbrzuy.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/7MwAofZ0kbpgWaiJjeILyK",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "33",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339713/medlangfanatic/HomePage/podcast-33_ypl1ei.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/69FYPawJOY5qaTqd0yzJcl",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "32",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339714/medlangfanatic/HomePage/podcast-32_vvesnt.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/0GfJKHZYhPpj1oK6Hi9Ci5",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "31",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339715/medlangfanatic/HomePage/podcast-31_tarfjp.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5b0nCW1uuqsDcthYJPFQW7",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "30",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339713/medlangfanatic/HomePage/podcast-30_zkfzz3.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5z7bYLe8k5PpSYoQqashCJ",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "29",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339712/medlangfanatic/HomePage/podcast-29_ka4ayr.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/5Fa8PbZc6NUtfxlU8rHh56",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "28",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339712/medlangfanatic/HomePage/podcast-28_o8gkk1.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/1kvme0BvAHKuRA3HiWbzuS",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "27",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339712/medlangfanatic/HomePage/podcast-27_jew0yu.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/2Q3mN6o51vjM1Mf3MSwZ1m",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "26",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339712/medlangfanatic/HomePage/podcast-26_cdhxq1.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/2h3j6mJYueKfrn3i14KnOy",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "25",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339712/medlangfanatic/HomePage/podcast-25_tqruqf.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/7w0i2lDQVwCbIWk9fP7LTx",
                siteName: "spotify"
            }
        ]
    },
    {
        title: "24",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1674339712/medlangfanatic/HomePage/podcast-24_eh0pnt.jpg",
        siteLink: [
            {
                link: "https://open.spotify.com/episode/24dsJ7tTNZCQxlN6whtFAm",
                siteName: "spotify"
            }
        ]
    }

]
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 2
    }
};


export const Podcast = () => {
    return (
        <div id={styles["podcast-session"]} className='mb-6 mx-md-7 mt-md-5 pt-md-5'>
            <Container className='h-100 '>
                <h1 className='text-main fw-bold mb-4'>Podcast
                    <br />
                    <span className='text-30 fw-normal' style={{ color: "black" }}>
                        Học từ vựng Y khoa miễn phí
                    </span>
                </h1>
                <Carousel responsive={responsive}>
                    {PODCASTS.map((p, index) => (
                        <div key={index} style={{ width: "80%", margin: "auto", }}>
                            <a href={p.siteLink[0].link} rel="noreferrer" target="_blank">
                                <Image className={styles["w-img"]} width="190" height="190" src={p.image} alt={p.title} />
                            </a>
                        </div>
                    ))}
                </Carousel>
            </Container>
        </div>
    )
}