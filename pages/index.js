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
import Script from 'next/script';



export default function HomePage({ instructors, courseListContent, fbs, blogs }) {
  return (
    <>
      <Layout
        title="Med Lang Fanatic"
        description="Med Lang Fanatic | Khóa học tiếng Anh Y khoa online.Cải thiện khả năng ngoại ngữ và nâng cao kỹ năng giao tiếp trong Y khoa."
        site_name="Med Lang Fanatic"
        url="https://medlangfanatic.com"
      >
        <Script src={process.env.NEXT_APP_GG_TAG_MNG} />

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