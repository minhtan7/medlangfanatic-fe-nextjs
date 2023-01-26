import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import "react-multi-carousel/lib/styles.css";

import Layout from '@/components/layout/Layout'
import { CTA } from '@/components/home/CTA'
import { InstructorList } from '@/components/home/InstructorList'
import { instructors, courseListContent, fbs } from 'mockData'
import { CourseList } from '@/components/home/CourseList'
import { FeedbackList } from '@/components/home/FeedbackList'
import { BlogSession } from '@/components/home/BlogSession'
import apiService from '@/lib/apiService'
import { VideoSession } from '@/components/home/VideoSession';
import { Podcast } from '@/components/home/Podcast';
import { Subscription } from '@/components/home/Subscription';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage({ instructors, courseListContent, fbs, blogs }) {

  return (
    <>
      <Layout >
        <Head>
          <meta property="og:title" content="medlangfanatic" key="ogtitle" />
          <link rel='canonical' href="https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app" key="canonical" /> */
          <meta property="og:description" content="a description" key="ogdesc" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/tanvo/image/upload/v1674322596/medlangfanatic/courses/mavl/mavl-thumbnail_ker6a6.svg"
            key="ogimage"
          />
          <meta
            property="og:site_name"
            content="Med Lang Fanatic"
            key="ogsitename"
          />
          <meta
            property="og:url"
            content="https://medlangfanatic-fe-nextjs-oazduaxip-minhtan7.vercel.app"
            key="ogurl"
          />
          <meta property="og:type" content="article" key="ogtype" />
        </Head>
        <main >
          <CTA />
          <InstructorList instructors={instructors} />
          <CourseList courseListContent={courseListContent && courseListContent} />
          <FeedbackList fbs={fbs} />
          <BlogSession blogs={blogs} />
          <VideoSession />
          <Podcast />
          <Subscription />
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const res = await apiService.get(`/posts`)

  return {
    props: {
      instructors,
      courseListContent,
      fbs,
      blogs: res.data.posts
    },
    revalidate: 10
  }
}

// export async function getServerSideProps() {
//   console.log("res")
//   const res = await apiService.get(`${BASE_URL}/posts`)
//   console.log("res", res)
//   return {
//     props: {
//       blogs: res.data.posts
//     },
//   }
// }