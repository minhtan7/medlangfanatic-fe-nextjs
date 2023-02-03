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



export default function HomePage({ instructors, courseListContent, fbs, blogs }) {
  return (
    <>
      <Layout description={""}>
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