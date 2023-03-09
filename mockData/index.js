import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
const faq = [
    // {
    //     question: "Khóa học dành cho đối tượng nào?",
    //     answer: <p>Khóa học hướng đến các bạn sinh viên y đã đi lâm sàng, hoặc các bác sĩ đã ra trường, đã biết cách trình bày một bệnh án cơ bản bằng tiếng Việt và muốn trau dồi khả năng trình bày nội dung bằng tiếng Anh. Khóa học rất thích hợp khi học viên có nhu cầu trao đổi về ca bệnh với đồng nghiệp bằng tiếng Anh (trao đổi miệng hay bằng email), hay chuẩn bị báo cáo ca lâm sàng bằng tiếng Anh.</p>
    // },
    // {
    //     question: "Có cần nói lưu loát tiếng Anh mới đủ khả năng tham gia khóa học này?",
    //     answer: "Trình độ tối thiểu để có thể tham gia được lớp này là A2 - B1 theo khung quy chiếu châu Âu. Học viên sẽ được cung cấp nhiều từ vựng và mẫu câu để tự xây dựng được cách trình bày thông tin của một ca lâm sàng bằng tiếng Anh. Nếu học viên chưa quá tự tin trong việc trình bày, giảng viên hướng dẫn sẽ giúp học viên trình bày được trong các giờ tương tác. Nếu học viên đã nói tương đối tốt tiếng Anh, giảng viên hướng dẫn có thể hỗ trợ cho học viên trình hay hơn."
    // },
    // {
    //     question: "Khóa học diễn ra như thế nào?",
    //     answer: "Khóa học bao gồm phần lý thuyết tự học trên nền tảng Thinkific và 4 buổi học tương tác (qua Zoom), dự kiến tổng thời gian của mỗi khóa học là 30 ngày. Thời gian diễn ra các buổi học tương tác sẽ được trao đổi cụ thể trong nhóm tương tác giữa giảng viên hướng dẫn và học viên. Nhờ vào việc tích hợp tất cả nội dung lý thuyết và bài tập củng cố trên Thinkific, giảng viên hướng dẫn và học viên có thể hoàn toàn tập trung vào phần luyện tập và thực hành trong các buổi tương tác."
    // },
    // {
    //     question: "Làm sao tôi có thể liên lạc với giảng viên hướng dẫn?",
    //     answer: "Học viên sẽ được tham gia nhóm Zalo riêng của lớp học ngay sau khi hoàn tất đăng ký khóa học, và có thể liên lạc trao đổi trực tiếp với giảng viên hướng dẫn trong nhóm. Ngoài ra, Med Lang Fanatic còn để nút 'Discussions' tại mỗi bài của khóa học để học viên có thể trao đổi thêm hoặc gửi thắc mắc. Tất cả học viên của khóa học đều có thể thấy phần nội dung thảo luận này."
    // },
    {
        question: "Đăng ký khóa học như thế nào?",
        answer: "Bạn cần điền đầy đủ thông tin trong form đăng ký và chuyển khoản học phí để hoàn tất đăng ký."
    },
    // {
    //     question: "Có bài kiểm tra đầu vào không?",
    //     answer: "Học viên sẽ được tham gia nhóm Zalo riêng của lớp học ngay sau khi hoàn tất đăng ký khóa học, và có thể liên lạc trao đổi trực tiếp với giảng viên hướng dẫn trong nhóm. Ngoài ra, Med Lang Fanatic còn để nút 'Discussions' tại mỗi bài của khóa học để học viên có thể trao đổi thêm hoặc gửi thắc mắc. Tất cả học viên của khóa học đều có thể thấy phần nội dung thảo luận này."
    // },
    {
        question: "Có giấy chứng nhận sau khi kết thúc khóa học không?",
        answer: "Các khóa học của Med Lang Fanatic hướng đến việc thành thạo các kỹ năng có thể ứng dụng trong công việc và cuộc sống. Do đó, việc bạn có thể ứng dụng được các kiến thức đã học sẽ là bảo chứng tuyệt vời nhất. Tuy vậy, Med Lang Fanatic vẫn có chứng nhận tham gia khóa học dành cho các học viên hoàn tất 100% khóa học vào cuối khóa, để học viên vẫn có thể lưu giữ kỷ niệm đẹp về khoảng thời gian đồng hành cùng Med Lang Fanatic."
    }
]
const instructors = [
    {
        name: "Trần Quang Hưng",
        title: "BS. CKI.",
        bio: `Trưởng phòng Đào tạo và Quản lý chất lượng Jio Health\nFounder của Med Lang Fanatic\nGiảng viên kỹ năng giao tiếp trong y khoa, được đào tạo theo chương trình của ACH Hoa Kỳ\nTổ chức các khóa học tiếng Anh tại Đại học Y Dược TPHCM, Đại học Y khoa Phạm Ngọc Thạch, và tại Tổng lãnh sự quán Hoa Kỳ tại TPHCM`,
        imageUrl: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.hung_kgiok1.webp",
        imageTransparent: "https://res.cloudinary.com/tanvo/image/upload/v1677433925/medlangfanatic/courses/combo/hung-transparent_atow8f.png",
        titleFull: "Bác sĩ Chuyên Khoa I",
        link: "/instructors/bac-si-tran-quang-hung",
        slug: "hung-tran"
    },
    {
        name: "Nguyễn Ngọc\nQuỳnh Trâm",
        title: "BS.",
        bio: `Tốt nghiệp bác sĩ đa khoa hạng Summa Cum Laude với GPA 4.67/5 tại đại học Debrecen, Hungary\nCựu phó chủ tịch hội sinh viên Việt Nam tại Debrecen, Hungary`,
        imageUrl: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.tram_lphdre.webp",
        imageTransparent: "https://res.cloudinary.com/tanvo/image/upload/v1677433926/medlangfanatic/courses/combo/tram-transparent_csanxe.png",
        titleFull: "Bác sĩ",
        link: "/instructors/bac-si-nguyen-ngoc-quynh-tram",
        slug: "tram-nguyen"
    },
    {
        name: "Nguyễn Đình Cang",
        bio: "Thủ khoa khóa luận bác sĩ nội trú chuyên ngành Mắt 2022\nHọc bổng toàn phần Lancaster Course của Đại học Harvard 2022\nGiảng viên Anh văn y khoa trong các chương trình hợp tác MEC-UMP (2018 - 2021) tại Đại học Y dược và MEDSPACE (2021) tại Đại học Y khoa Phạm Ngọc Thạch.\nGiảng viên tiếng Anh tại Jio Health.",
        titleFull: "Ths. BS. CKI.",
        title: "Ths. BS. CKI.",
        imageUrl: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.cang_qpbtvb.jpg",
        imageTransparent: "https://res.cloudinary.com/tanvo/image/upload/v1677500092/medlangfanatic/courses/combo/cang_arjgtw.png",
        link: "/instructors/bac-si-nguyen-dinh-cang",
        slug: "cang-dinh"
    },
    {
        title: "BS.",
        titleFull: "Bác sĩ",
        name: "Trần Nguyễn\nThanh Hương",
        bio: "Bác sĩ, khoa Phẫu thuật tim trẻ em, Bệnh viện Đại học Y Dược TP.HCM.\nHoàn thành Step 1 và Step 2 CK USMLE\nTrưởng nhóm biên dịch sách “The End of Alzheimer\nChứng chỉ OET (Occupational English Test) - Medicine.\nCựu Chủ nhiệm CLB tiếng Anh H.E.I. tại Đại học Y Dược TPHCM",
        imageUrl: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.huong_ggmqir.png",
        link: "/instructors/bac-si-tran-nguyen-thanh-huong",
        imageTransparent: "https://res.cloudinary.com/tanvo/image/upload/v1678356803/medlangfanatic/Instructors/huong-transparent-1_dkmtmt.png",
        slug: "huong-tran"
    },
    {
        title: "BS.",
        titleFull: "Bác sĩ",
        name: "Hoàng Đức",
        bio: "Bác sĩ chuyên ngành Chăm sóc Giảm nhẹ/ Ung thư, Bệnh viện Ung Bướu TP.HCM\nGiảng viên tiếng Anh tại Jio Health\nHoàn thành khoá học Mastering Medical Teaching, Stanford Center for Professional Development năm 2021\nCựu Chủ nhiệm CLB tiếng Anh H.E.I. tại Đại học Y Dược TPHCM",
        imageUrl: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.duc_krejjl.jpg",
        link: "#",
        imageTransparent: "https://res.cloudinary.com/tanvo/image/upload/v1678355671/medlangfanatic/Instructors/duc-transparent_jry7zd.png",
        slug: "duc-hoang"
    },
    {
        name: "Nguyễn Trần\nThanh Trúc",
        bio: "Bác sĩ chuyên ngành Thần kinh, mảng nghiên cứu chính liên quan đến sa sút trí tuệ\nDu học sinh bậc Tiến sĩ tại Đài Loan. Từng tham gia các chương trình trao đổi sinh viên tại Nhật và Úc.\nGiảng viên tiếng Anh tại Jio Health\nCựu Chủ nhiệm CLB tiếng Anh H.E.I. tại Đại học Y Dược TPHCM",
        title: "BS.",
        titleFull: "Bác sĩ",
        imageUrl: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.truc_kzifdr.jpg",
        link: "#",
        imageTransparent: "https://res.cloudinary.com/tanvo/image/upload/v1678355951/medlangfanatic/Instructors/truc-transparent_xn0ck8.png",
        slug: "truc-tran"
    },

]

const courseListContent = {
    "communication-with-patients-101": {
        title: "Giao Tiếp Với Bệnh Nhân",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677147280/medlangfanatic/courses/cwp101_ism7zx.png",
        // image: "https://res.cloudinary.com/tanvo/image/upload/v1672313340/medlangfanatic/courses/cwp/communications_ycbuwr.jpg",
        content: "Luyện tập kỹ năng speaking để có thể giao tiếp tự tin bằng tiếng Anh với bệnh nhân.",
        path: "courses/communication-with-patients-101",
        idEl: "cwp-thumbnail-vertical",
        btnClass: 'btn-sign-up btn-cwp-main',
        recruit: false,
        price: 3650,
        slug: "communication-with-patients-101",
        type: "master",
        reviewAvg: 4.9,
        noReview: 87,
        noApplication: 130,
        selfLearn: false
    },
    //87
    "clinical-case-presentation": {
        title: "Trình Ca Lâm Sàng",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/pccs_ejihsz.png",
        // image: "https://res.cloudinary.com/tanvo/image/upload/v1671965829/medlangfanatic/courses/presenting-clinical-case-from-scratch/pccs-thumbnail_nei3t5.jpg",
        content: "Học cách trình bày thông tin y khoa và báo cáo ca lâm sàng một cách chuyên nghiệp.",
        path: "courses/clinical-case-presentation",
        idEl: "pccs-thumbnail-vertical",
        btnClass: 'btn-sign-up btn-pccs-main',
        recruit: false,
        price: 3650,
        slug: "clinical-case-presentation",
        type: "master",
        reviewAvg: 4.9,
        noReview: 92,
        noApplication: 138,
        selfLearn: false
    },
    //92
    "medical-terminology": {
        title: "Thuật Ngữ Y Khoa",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677147133/medlangfanatic/courses/MT_jpdcgb.png",
        // image: "https://res.cloudinary.com/tanvo/image/upload/v1674322583/medlangfanatic/courses/mt/mt-thumbnail_uhsldz.jpg",
        content: "Nắm vững nền tảng thuật ngữ y khoa chuyên ngành với hệ thống bài tập đa dạng và thú vị.",
        path: "courses/medical-terminology",
        idEl: "mt-thumbnail-vertical",
        btnClass: 'btn-sign-up btn-mt-secondary',
        recruit: true,
        price: 1690,
        slug: "medical-terminology",
        type: "standard",
        reviewAvg: 5,
        noReview: 211,
        noApplication: 316,
        selfLearn: true
    },
    //211
    mavl: {
        // title: `<span>Từ Vựng Học Thuật<br />Y Khoa</span>`,
        title: `Từ Vựng Học Thuật Y Khoa`,
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/mavl_su5gsx.png",
        // image: "https://res.cloudinary.com/tanvo/image/upload/v1675725048/medlangfanatic/courses/mavl/mavl-thumbnail_z83mgg.png",
        content: "Nắm vững vốn từ vựng academic tối cần thiết trong việc đọc các tài liệu y văn.",
        path: "courses/mavl",
        idEl: "mavl-thumbnail-vertical",
        btnClass: "btn-sign-up",
        recruit: true,
        price: 3650,
        slug: "mavl",
        type: "master",
        reviewAvg: 5,
        noReview: 325,
        noApplication: 487,
        selfLearn: true
    },
    //325
    "how-to-learn-medical-vocabulary": {
        // title: `<span>Từ Vựng Học Thuật<br />Y Khoa</span>`,
        title: `<span class="text-18">Nền tảng học từ vựng Y khoa</span>`,
        // image: "https://res.cloudinary.com/tanvo/image/upload/v1675725048/medlangfanatic/courses/mavl/mavl-thumbnail_z83mgg.png",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/how-to-learn-medical-vocabulary_lhhr2j.png",
        content: "Kiểm tra vốn từ vựng thông thường và lên kế hoạch học từ vựng y khoa",
        path: "courses/how-to-learn-medical-vocabulary",
        idEl: "how-to-learn-medical-vocabulary-thumbnail-vertical",
        btnClass: "btn-sign-up",
        recruit: true,
        price: 0,
        slug: "how-to-learn-medical-vocabulary",
        type: "free",
        reviewAvg: 5,
        noReview: 50,
        noApplication: 79,
        selfLearn: true
    }
    //50
    ,
    "listening-skills": {
        // title: `<span>Từ Vựng Học Thuật<br />Y Khoa</span>`,
        title: "Phát triển kỹ năng nghe",
        // image: "https://res.cloudinary.com/tanvo/image/upload/v1675725048/medlangfanatic/courses/mavl/mavl-thumbnail_z83mgg.png",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/listieng-to-the-language-of-medicine_ehpgrx.png",
        content: "Tìm hiểu cách học kỹ năng nghe hiệu quả và đắm chìm vào kho bài luyện nghe khổng lồ đủ mọi cấp độ.",
        path: "courses/listening-skills",
        idEl: "listening-skills-thumbnail-vertical",
        btnClass: "btn-sign-up",
        recruit: true,
        price: 1690,
        slug: "listening-skills",
        type: "standard",
        reviewAvg: 4.9,
        noReview: 40,
        noApplication: 232,
        selfLearn: true
    },
    //155
    "combo-vocabulary": {
        // title: `<span>Từ Vựng Học Thuật<br />Y Khoa</span>`,
        title: "Combo từ vựng Y khoa",
        // image: "https://res.cloudinary.com/tanvo/image/upload/v1675725048/medlangfanatic/courses/mavl/mavl-thumbnail_z83mgg.png",
        image: "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/a-comprehensive-course-of-medical-vocabulary_zqxndy.png",
        content: "Đào tạo toàn diện giúp bạn nâng cao khả năng đọc hiểu và hiểu biết về các tài liệu y khoa.",
        path: "courses/combo-vocabulary",
        idEl: "combo-vocabulary-thumbnail-vertical",
        btnClass: "btn-sign-up",
        recruit: true,
        price: 5340,
        slug: "combo-vocabulary",
        type: "master",
        reviewAvg: 5,
        noReview: 78,
        noApplication: 117,
        selfLearn: true
    },
    //239
}

const slugCourseByCat = {
    all: {
        title: "Tất cả",
        slugs: [
            "combo-vocabulary",
            "communication-with-patients-101",
            "clinical-case-presentation",
            "mavl",
            "how-to-learn-medical-vocabulary",
            "listening-skills",
            "medical-terminology",

        ]
    },
    readingAndListening: {
        title: "Reading và Listening",
        slugs: [
            "listening-skills",
            "how-to-learn-medical-vocabulary",
        ]
    },
    communication: {
        title: "Speaking",
        slugs: [
            "communication-with-patients-101",
            "clinical-case-presentation"
        ]
    },
    vocabulary: {
        title: "Vocabulary",
        slugs: [
            "combo-vocabulary",
            "medical-terminology",
            "mavl",
            "how-to-learn-medical-vocabulary",
        ]
    },
    // free: {
    //     title: "Miễn phí",
    //     slugs: [
    //         "communication-with-patients-101",
    //         "clinical-case-presentation"
    //     ]
    // }
}

const courseDetail = {
    description: "Khóa học giới thiệu cho các bạn cấu trúc của một ca lâm sàng được trình miệng bằng tiếng Anh, và đi sâu vào phân tích cách trình bày hiệu quả cho từng phần riêng biệt. Các bạn sẽ lần lượt làm quen với nhiều loại công thức và từ vựng khác nhau, với những cấu trúc dễ học dễ áp dụng, để đạt mục tiêu đầu ra là có thể tự tin trình bày một ca lâm sàng bằng tiếng Anh."
}

const feedBack = [
    // {
    //     name: "Lan Thư",
    //     title: "Sinh viên Y5",
    //     content: `Mình rất thích kiểu định hướng học 80/20 theo kiểu corpus-based learning, vì bản thân mình cũng khá... lười, hihi, và bộ từ vựng Medical Academic Vocabulary List đã giúp mình rất nhiều trong việc cải thiện vốn từ vựng academic của mình. Khóa học rất hay, và trình bày rất đẹp. Mình có thể thấy sự trau chuốt công phu từ anh Hưng và chị Trâm cho khóa học này. Cảm ơn Med Lang Fanatic rất nhiều vì không chỉ cung cấp cần câu như mọi lần, mà lần này đã cung cấp cá rất tươi ngon.`
    // },
    {
        name: "Hoàng Anh",
        title: "Bác sĩ",
        content: "Mình tình cờ biết được bộ từ vựng MAVL do học lớp Medical Literacy của anh Hưng, và thật sự thích bộ từ vựng này. Nhờ tập trung trau dồi bộ từ vựng này, mình đã có thể cải thiện khả năng hiểu các textbook mà trước đó mình đọc nhưng chỉ hiểu lõm bõm. Highly recommend mọi người học bộ từ MAVL nha."
    },
    {
        name: "Đạt Võ",
        title: "Sinh viên Y5",
        content: `Thật sự bất ngờ vì khóa học hay hơn mình tưởng tượng rất nhiều. Nội dung không chỉ có các video giảng bài như các khóa học từ vựng thường thấy, mà có cả một hệ thống bài tập tương tác rất công phu. Chưa kể còn có email nhắc nhở bài mỗi tuần. Quá chu đáo. Highly recommend khóa học này.`
    },
    {
        name: "Thanh Hà",
        title: "Sinh viên Y6",
        content: `Em vừa học xong và không biết nói gì ngoài cảm ơn anh Hưng và chị Trâm đã đầu tư quá xịn sò cho khóa học chất lượng này ạ. Em đã hoàn thành khóa học này sớm hơn dự kiến vì nội dung quá cuốn ạ, không nhàm chán như kiểu mô tả liệt kê từ vựng. Hy vọng Med Lang Fanatic sẽ có thêm các khóa học cho các bộ từ vựng giống giống như vậy để em đăng ký học tiếp ạ.`
    }
]

// const about = [
//     {
//         title: "Đối tượng",
//         url: "http://localhost:3000/images/doi_tuong.jpeg",
//         content: <ul className='fa-ul'>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Sinh viên y đã đi lâm sàng.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Bác sĩ đã ra trường.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Học viên đã biết cách trình bày một bệnh án cơ bản bằng tiếng Việt và muốn trau dồi khả năng trình bày nội dung bằng tiếng Anh. </li>

//         </ul>
//     },
//     {
//         title: "Hình thức",
//         url: "http://localhost:3000/images/hinh_thuc.jpeg",
//         content: <ul className='fa-ul'>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Lý thuyết tự học trên nền tảng Thinkific.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>4 buổi học tương tác trực tiếp (qua Zoom).</li>
//         </ul>
//     },
//     {
//         title: "Thời gian",
//         url: "http://localhost:3000/images/thoi_gian.jpeg",
//         content: <ul className='fa-ul'>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>30 ngày.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Thời gian diễn ra các buổi học tương tác sẽ được trao đổi cụ thể trong nhóm tương tác giữa giảng viên hướng dẫn và học viên.</li>
//         </ul>
//     },
//     {
//         title: < >
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//             <FontAwesomeIcon icon={faStar} className="me-1" />
//         </>,
//         url: "http://localhost:3000/images/nam_sao.jpeg",
//         content: <ul className='fa-ul'>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Tập trung vào phần luyện tập và thực hành trong các buổi tương tác nhờ vào việc tích hợp tất cả nội dung trên nền tảng Thinkific.</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Trao đổi về ca bệnh với đồng nghiệp bằng tiếng Anh(trao đổi miệng hay bằng email).</li>
//             <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Chuẩn bị báo cáo ca lâm sàng bằng tiếng Anh.</li>
//         </ul>
//     }
// ]
const about = [
    {
        title: "Đối tượng",
        url: "/images/doi_tuong.png",
        content: <ul className='fa-ul'>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Sinh viên chuyên ngành Y Nha Dược.</li>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Nhân viên y tế các chuyên ngành.</li>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Người có mong muốn cải thiện khả năng đọc các tài liệu ngành y.</li>
        </ul>
    },
    {
        title: "Hình thức",
        url: "/images/hinh_thuc.png",
        content: <ul className='fa-ul'>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Lý thuyết tự học và bài tập tương tác trên nền tảng học online.</li>
        </ul>
    },
    {
        title: "Thời gian",
        url: "/images/thoi_gian.png",
        content: <ul className='fa-ul'>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Thời gian dự kiến để hoàn thành khóa học là 8 tuần.</li>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Người học có thể linh hoạt tùy chỉnh tốc độ tùy theo thời gian rảnh của bản thân.</li>
        </ul>
    },
    {
        title: < >
            <FontAwesomeIcon icon={faStar} className="me-1" />
            <FontAwesomeIcon icon={faStar} className="me-1" />
            <FontAwesomeIcon icon={faStar} className="me-1" />
            <FontAwesomeIcon icon={faStar} className="me-1" />
            <FontAwesomeIcon icon={faStar} className="me-1" />
        </>,
        url: "/images/nam_sao.png",
        content: <ul className='fa-ul'>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Tập trung vào việc tạo nhiều "điểm chạm" với từ vựng mới, giúp người học có thể hiểu sâu từ vựng bằng cách "ngắm nghĩa" từ vựng ở những góc cạnh khác nhau.</li>
            <li><span className="fa-li" ><FontAwesomeIcon icon={faCheck} /></span>Định hướng học các từ vựng có tần suất gặp cao nhất, giúp tăng nhanh vốn từ trong thời gian ngắn nhất.</li>
        </ul>
    }
]

const blogContent = [
    {
        "_id": "633f5fbbbd7b00dcb4b242b4",
        "wp_id": "1240",
        "title": "CẤP TRÊN NỀN MẠN",
        "content": "<p>Hôm nay chúng ta cùng làm quen với một số cách diễn tả khái niệm cấp trên nền mạn nhé. Hiểu nôm na là bệnh nhân đã có một bệnh nền mạn tính gì đó rồi, sau đó có một nguyên nhân cấp tính xảy ra, làm bệnh lý nền nặng lên đột ngột biến thành một đợt cấp.</p>\n<p>Trong suy tim người ta có khái niệm suy tim cấp mất bù trên nền suy tim mạn, thường cụm từ tiếng Anh chỉ khái niệm này sẽ là &#8220;(acute) decompensated heart failure&#8221;. Cụm này có thể có acute hoặc không, tuy nhiên phải có decompensated (mất bù) vì đây là từ khóa cực kỳ quan trọng.</p>\n<p>Tuy nhiên trong bệnh phổi tắc nghẽn mạn tính thì người ta không dùng chữ decompensated, mà thường dùng chữ exacerbation để chỉ những đợt cấp. Ví dụ: Chronic obstructive pulmonary disease with acute exacerbation, hoặc acute exacerbation of chronic obstructive pulmonary disease.</p>\n<p>Suy thận là một trường hợp mà thuật ngữ tiếng Anh của cấp trên nền mạn cũng gần giống như tiếng Việt: acute on chronic renal failure (AoCRF).</p>\n<p>Và đôi khi người ta cũng có thể sử dụng cụm từ &#8220;on top of&#8221; để diễn tả khái niệm cấp trên nền mạn</p>\n",
        "image": "https://www.medlangfanatic.com/images/cap-tren-nen-man.jpeg",
        "author": "6318f4aaed3db41b17baaa85",
        "topic": [
            {
                "_id": "633877888a36074dfbeaf3ea",
                "name": "medical english",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:23:20.170Z",
                "updatedAt": "2022-10-01T17:23:20.170Z",
                "__v": 0
            },
            {
                "_id": "6338775f8a36074dfbeaf3e4",
                "name": "tips",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:22:39.736Z",
                "updatedAt": "2022-10-01T17:22:39.736Z",
                "__v": 0
            },
            {
                "_id": "633877908a36074dfbeaf3ed",
                "name": "medical vocabulary",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:23:28.786Z",
                "updatedAt": "2022-10-01T17:23:28.786Z",
                "__v": 0
            },
            {
                "_id": "634878435bd121dbd855b49d",
                "name": "jargon",
                "isDeleted": false,
                "createdAt": "2022-10-13T20:42:43.690Z",
                "updatedAt": "2022-10-13T20:42:43.690Z",
                "__v": 0
            }
        ],
        "createdBy": "63387c0ed050dd0338854931",
        "createdAt": "2022-08-22T11:30:52.000Z",
        "slug": "cap-tren-nen-man",
        "updatedAt": "2022-08-22T11:30:52.000Z",
        "yoast_head_json": "{\"title\":\"CẤP TRÊN NỀN MẠN - Medlangfanatic\",\"robots\":{\"index\":\"index\",\"follow\":\"follow\",\"max-snippet\":\"max-snippet:-1\",\"max-image-preview\":\"max-image-preview:large\",\"max-video-preview\":\"max-video-preview:-1\"},\"canonical\":\"https://medlangfanatic.com/uncategorized/cap-tren-nen-man/\",\"og_locale\":\"en_US\",\"og_type\":\"article\",\"og_title\":\"CẤP TRÊN NỀN MẠN - Medlangfanatic\",\"og_description\":\"&nbsp; Hôm nay chúng ta cùng làm quen với một số cách diễn tả khái niệm cấp trên nền mạn... Read More >>\",\"og_url\":\"https://medlangfanatic.com/uncategorized/cap-tren-nen-man/\",\"og_site_name\":\"Medlangfanatic\",\"article_publisher\":\"https://www.facebook.com/MedLangFanatic\",\"article_published_time\":\"2022-08-22T12:30:52+00:00\",\"og_image\":[{\"width\":624,\"height\":482,\"url\":\"https://medlangfanatic.com/wp-content/uploads/2022/08/13.png\",\"type\":\"image/png\"}],\"author\":\"danh vo\",\"twitter_card\":\"summary_large_image\",\"twitter_misc\":{\"Written by\":\"danh vo\",\"Est. reading time\":\"1 minute\"},\"schema\":{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://medlangfanatic.com/uncategorized/cap-tren-nen-man/\",\"url\":\"https://medlangfanatic.com/uncategorized/cap-tren-nen-man/\",\"name\":\"CẤP TRÊN NỀN MẠN - Medlangfanatic\",\"isPartOf\":{\"@id\":\"https://medlangfanatic.com/#website\"},\"datePublished\":\"2022-08-22T12:30:52+00:00\",\"dateModified\":\"2022-08-22T12:30:52+00:00\",\"author\":{\"@id\":\"https://medlangfanatic.com/#/schema/person/68d54927c192540d9e451dfac8376c2a\"},\"breadcrumb\":{\"@id\":\"https://medlangfanatic.com/uncategorized/cap-tren-nen-man/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://medlangfanatic.com/uncategorized/cap-tren-nen-man/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://medlangfanatic.com/uncategorized/cap-tren-nen-man/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://medlangfanatic.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Uncategorized\",\"item\":\"https://medlangfanatic.com/category/uncategorized/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"CẤP TRÊN NỀN MẠN\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://medlangfanatic.com/#website\",\"url\":\"https://medlangfanatic.com/\",\"name\":\"Medlangfanatic\",\"description\":\"\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://medlangfanatic.com/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Person\",\"@id\":\"https://medlangfanatic.com/#/schema/person/68d54927c192540d9e451dfac8376c2a\",\"name\":\"danh vo\",\"image\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://medlangfanatic.com/#/schema/person/image/\",\"url\":\"https://secure.gravatar.com/avatar/95d85433fb46789c5553261d4526d968?s=96&d=mm&r=g\",\"contentUrl\":\"https://secure.gravatar.com/avatar/95d85433fb46789c5553261d4526d968?s=96&d=mm&r=g\",\"caption\":\"danh vo\"},\"url\":\"https://medlangfanatic.com/author/danhvo/\"}]}}",
        "__v": 0
    },
    {
        "_id": "633f5fbbbd7b00dcb4b242b5",
        "wp_id": "1238",
        "title": "CHƯA RÕ NGUYÊN NHÂN",
        "content": "<p>Khi đọc các bệnh án viết bằng tiếng Việt, đôi khi chúng ta gặp một cụm từ viết tắt là CRNN, có nghĩa là &#8220;chưa rõ nguyên nhân&#8221;, có thể là tổ hợp triệu chứng không điển hình cho một nguyên nhân bệnh nào, hoặc vẫn còn đang chờ thêm kết quả xét nghiệm để chẩn đoán xác định. Ví dụ &#8220;Khó thở CRNN&#8221; = &#8220;Khó thở chưa rõ nguyên nhân&#8221;.</p>\n<p>Vậy CRNN phiên qua tiếng Anh là thế nào các bạn nhỉ?</p>\n<p>Phiên qua là cụm từ NYD các bạn nhé. NYD là viết tắt của &#8220;Not yet diagnosed&#8221;, ví dụ như đau ngực chưa rõ nguyên nhân sẽ được viết là &#8220;Chest pain NYD&#8221;.</p>\n<p>Nhớ là trước cụm NYD sẽ là danh từ diễn tả signs/symptoms nhé các bạn. Ví dụ như ad đi, ad bị &#8220;cuteness NYD&#8221; 😂😂😂</p>\n",
        "image": "https://www.medlangfanatic.com/images/chua-ro-nguyen-nhan.jpeg",
        "author": "6318f4aaed3db41b17baaa85",
        "topic": [
            {
                "_id": "6338775f8a36074dfbeaf3e4",
                "name": "tips",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:22:39.736Z",
                "updatedAt": "2022-10-01T17:22:39.736Z",
                "__v": 0
            },
            {
                "_id": "633877908a36074dfbeaf3ed",
                "name": "medical vocabulary",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:23:28.786Z",
                "updatedAt": "2022-10-01T17:23:28.786Z",
                "__v": 0
            },
            {
                "_id": "633877888a36074dfbeaf3ea",
                "name": "medical english",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:23:20.170Z",
                "updatedAt": "2022-10-01T17:23:20.170Z",
                "__v": 0
            },
            {
                "_id": "634878435bd121dbd855b49d",
                "name": "jargon",
                "isDeleted": false,
                "createdAt": "2022-10-13T20:42:43.690Z",
                "updatedAt": "2022-10-13T20:42:43.690Z",
                "__v": 0
            }
        ],
        "createdBy": "63387c0ed050dd0338854931",
        "createdAt": "2022-08-22T11:27:13.000Z",
        "slug": "chua-ro-nguyen-nhan",
        "updatedAt": "2022-08-22T11:27:13.000Z",
        "yoast_head_json": "{\"title\":\"CHƯA RÕ NGUYÊN NHÂN - Medlangfanatic\",\"robots\":{\"index\":\"index\",\"follow\":\"follow\",\"max-snippet\":\"max-snippet:-1\",\"max-image-preview\":\"max-image-preview:large\",\"max-video-preview\":\"max-video-preview:-1\"},\"canonical\":\"https://medlangfanatic.com/uncategorized/chua-ro-nguyen-nhan/\",\"og_locale\":\"en_US\",\"og_type\":\"article\",\"og_title\":\"CHƯA RÕ NGUYÊN NHÂN - Medlangfanatic\",\"og_description\":\"&nbsp; Khi đọc các bệnh án viết bằng tiếng Việt, đôi khi chúng ta gặp một cụm từ viết tắt... Read More >>\",\"og_url\":\"https://medlangfanatic.com/uncategorized/chua-ro-nguyen-nhan/\",\"og_site_name\":\"Medlangfanatic\",\"article_publisher\":\"https://www.facebook.com/MedLangFanatic\",\"article_published_time\":\"2022-08-22T12:27:13+00:00\",\"article_modified_time\":\"2022-08-22T12:27:37+00:00\",\"og_image\":[{\"width\":600,\"height\":360,\"url\":\"https://medlangfanatic.com/wp-content/uploads/2022/08/12.png\",\"type\":\"image/png\"}],\"author\":\"danh vo\",\"twitter_card\":\"summary_large_image\",\"twitter_misc\":{\"Written by\":\"danh vo\",\"Est. reading time\":\"1 minute\"},\"schema\":{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://medlangfanatic.com/uncategorized/chua-ro-nguyen-nhan/\",\"url\":\"https://medlangfanatic.com/uncategorized/chua-ro-nguyen-nhan/\",\"name\":\"CHƯA RÕ NGUYÊN NHÂN - Medlangfanatic\",\"isPartOf\":{\"@id\":\"https://medlangfanatic.com/#website\"},\"datePublished\":\"2022-08-22T12:27:13+00:00\",\"dateModified\":\"2022-08-22T12:27:37+00:00\",\"author\":{\"@id\":\"https://medlangfanatic.com/#/schema/person/68d54927c192540d9e451dfac8376c2a\"},\"breadcrumb\":{\"@id\":\"https://medlangfanatic.com/uncategorized/chua-ro-nguyen-nhan/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://medlangfanatic.com/uncategorized/chua-ro-nguyen-nhan/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://medlangfanatic.com/uncategorized/chua-ro-nguyen-nhan/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://medlangfanatic.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Uncategorized\",\"item\":\"https://medlangfanatic.com/category/uncategorized/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"CHƯA RÕ NGUYÊN NHÂN\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://medlangfanatic.com/#website\",\"url\":\"https://medlangfanatic.com/\",\"name\":\"Medlangfanatic\",\"description\":\"\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://medlangfanatic.com/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Person\",\"@id\":\"https://medlangfanatic.com/#/schema/person/68d54927c192540d9e451dfac8376c2a\",\"name\":\"danh vo\",\"image\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://medlangfanatic.com/#/schema/person/image/\",\"url\":\"https://secure.gravatar.com/avatar/95d85433fb46789c5553261d4526d968?s=96&d=mm&r=g\",\"contentUrl\":\"https://secure.gravatar.com/avatar/95d85433fb46789c5553261d4526d968?s=96&d=mm&r=g\",\"caption\":\"danh vo\"},\"url\":\"https://medlangfanatic.com/author/danhvo/\"}]}}",
        "__v": 0
    },
    {
        "_id": "633f5fbbbd7b00dcb4b242b6",
        "wp_id": "1237",
        "title": "MÔ TẢ XÉT NGHIỆM CHẨN ĐOÁN BẰNG TỪ NÀO?",
        "content": "<p>Có lẽ để diễn tả khái niệm xét nghiệm chẩn đoán thì ai cũng biết đến từ &#8220;diagnostic test&#8221;. Tuy nhiên nếu chúng ta muốn sử dụng một số từ vựng khác để thay đổi thì thế nào nè?</p>\n<p>Trên trang cancer.gov, người ta định nghĩa &#8220;diagnostic test&#8221; là &#8220;A type of test used to help diagnose a disease or condition.&#8221; Từ đồng nghĩa của &#8220;diagnostic test&#8221; được đưa ra là &#8220;diagnostic procedure&#8221;.</p>\n<p>Nếu bạn thường xuyên tra cứu trên Medscape, các bạn sẽ thấy một từ khóa thường xuyên xuất hiện, là &#8220;work-up&#8221;, cũng là từ gọi chung cho các xét nghiệm chẩn đoán, bao gồm cả &#8220;laboratory studies&#8221; và &#8220;imaging studies&#8221;.</p>\n<p>Bởi vậy nếu bạn muốn nói về những xét nghiệm cho bệnh nhân thiếu máu tán huyết, hãy nói là &#8220;(Lab) workup for hemolytic anemia&#8221; (thực ra bỏ &#8220;lab&#8221; cũng được).</p>\n<p>Nếu muốn nói về những xét nghiệm ban đầu cho một cái gì đấy, hãy sử dụng cụm từ &#8220;initial workup for&#8230;&#8221;.</p>\n<p>Có một từ khác, cũng sang chảnh không kém mà các bạn có thể sử dụng để nói về những xét nghiệm chẩn đoán là investigation, ví dụ &#8220;laboratory investigations for anemia&#8221;.</p>\n",
        "image": "https://www.medlangfanatic.com/images/mo-ta-xet-nghiem-bang-tu-nao.jpeg",
        "author": "6318f4aaed3db41b17baaa85",
        "topic": [
            {
                "_id": "633877888a36074dfbeaf3ea",
                "name": "medical english",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:23:20.170Z",
                "updatedAt": "2022-10-01T17:23:20.170Z",
                "__v": 0
            },
            {
                "_id": "633877908a36074dfbeaf3ed",
                "name": "medical vocabulary",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:23:28.786Z",
                "updatedAt": "2022-10-01T17:23:28.786Z",
                "__v": 0
            },
            {
                "_id": "634878515bd121dbd855b4a0",
                "name": "speaking",
                "isDeleted": false,
                "createdAt": "2022-10-13T20:42:57.351Z",
                "updatedAt": "2022-10-13T20:42:57.351Z",
                "__v": 0
            }
        ],
        "createdBy": "63387c0ed050dd0338854931",
        "createdAt": "2022-08-22T11:26:00.000Z",
        "slug": "mo-ta-xet-nghiem-chan-doan-bang-tu-nao",
        "updatedAt": "2022-08-22T11:26:00.000Z",
        "yoast_head_json": "{\"title\":\"MÔ TẢ XÉT NGHIỆM CHẨN ĐOÁN BẰNG TỪ NÀO? - Medlangfanatic\",\"robots\":{\"index\":\"index\",\"follow\":\"follow\",\"max-snippet\":\"max-snippet:-1\",\"max-image-preview\":\"max-image-preview:large\",\"max-video-preview\":\"max-video-preview:-1\"},\"canonical\":\"https://medlangfanatic.com/uncategorized/mo-ta-xet-nghiem-chan-doan-bang-tu-nao/\",\"og_locale\":\"en_US\",\"og_type\":\"article\",\"og_title\":\"MÔ TẢ XÉT NGHIỆM CHẨN ĐOÁN BẰNG TỪ NÀO? - Medlangfanatic\",\"og_description\":\"&nbsp; Có lẽ để diễn tả khái niệm xét nghiệm chẩn đoán thì ai cũng biết đến từ &#8220;diagnostic test&#8221;.... Read More >>\",\"og_url\":\"https://medlangfanatic.com/uncategorized/mo-ta-xet-nghiem-chan-doan-bang-tu-nao/\",\"og_site_name\":\"Medlangfanatic\",\"article_publisher\":\"https://www.facebook.com/MedLangFanatic\",\"article_published_time\":\"2022-08-22T12:26:00+00:00\",\"author\":\"danh vo\",\"twitter_card\":\"summary_large_image\",\"twitter_misc\":{\"Written by\":\"danh vo\",\"Est. reading time\":\"1 minute\"},\"schema\":{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://medlangfanatic.com/uncategorized/mo-ta-xet-nghiem-chan-doan-bang-tu-nao/\",\"url\":\"https://medlangfanatic.com/uncategorized/mo-ta-xet-nghiem-chan-doan-bang-tu-nao/\",\"name\":\"MÔ TẢ XÉT NGHIỆM CHẨN ĐOÁN BẰNG TỪ NÀO? - Medlangfanatic\",\"isPartOf\":{\"@id\":\"https://medlangfanatic.com/#website\"},\"datePublished\":\"2022-08-22T12:26:00+00:00\",\"dateModified\":\"2022-08-22T12:26:00+00:00\",\"author\":{\"@id\":\"https://medlangfanatic.com/#/schema/person/68d54927c192540d9e451dfac8376c2a\"},\"breadcrumb\":{\"@id\":\"https://medlangfanatic.com/uncategorized/mo-ta-xet-nghiem-chan-doan-bang-tu-nao/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://medlangfanatic.com/uncategorized/mo-ta-xet-nghiem-chan-doan-bang-tu-nao/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://medlangfanatic.com/uncategorized/mo-ta-xet-nghiem-chan-doan-bang-tu-nao/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://medlangfanatic.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Uncategorized\",\"item\":\"https://medlangfanatic.com/category/uncategorized/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"MÔ TẢ XÉT NGHIỆM CHẨN ĐOÁN BẰNG TỪ NÀO?\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://medlangfanatic.com/#website\",\"url\":\"https://medlangfanatic.com/\",\"name\":\"Medlangfanatic\",\"description\":\"\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://medlangfanatic.com/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Person\",\"@id\":\"https://medlangfanatic.com/#/schema/person/68d54927c192540d9e451dfac8376c2a\",\"name\":\"danh vo\",\"image\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://medlangfanatic.com/#/schema/person/image/\",\"url\":\"https://secure.gravatar.com/avatar/95d85433fb46789c5553261d4526d968?s=96&d=mm&r=g\",\"contentUrl\":\"https://secure.gravatar.com/avatar/95d85433fb46789c5553261d4526d968?s=96&d=mm&r=g\",\"caption\":\"danh vo\"},\"url\":\"https://medlangfanatic.com/author/danhvo/\"}]}}",
        "__v": 0
    },
    {
        "_id": "633f5fbbbd7b00dcb4b242b8",
        "wp_id": "1233",
        "title": "UYỂN NGỮ TRONG ANH VĂN Y KHOA",
        "content": "<p>Uyển ngữ (euphemism) được hiểu đơn giản là những cách nói vòng vo, nói giảm nói tránh, thường là để tránh tác động mạnh đến cảm xúc người nghe.</p>\n<p>Ví dụ một bệnh nhân vào bệnh viện trong tình trạng quá nặng, và tử vong trong quá trình hồi sức, bác sĩ khi thông báo tin xấu cho gia đình, thay vì nói “I’m sorry. He died”, có thể dùng uyển ngữ như thế này “I’m sorry. He didn’t make it.” Không đụng đến chữ “chết”, nhưng vẫn chuyển tải được hết ý nghĩa.</p>\n<p>Hay một trường hợp khác, để tránh sự bất lịch sự và có thể làm tổn thương người bị khiếm thị, thay vì dùng chữ &#8220;blind&#8221; thì người ta dùng &#8220;visually impaired&#8221; hoặc &#8220;visually challenged&#8221;. Có khá nhiều uyển ngữ dành cho trường hợp nói về người khuyết tật, và điều đó thể hiện sự nhân văn, tránh làm tổn thương người khác. Ví dụ như &#8220;having special needs&#8221; = &#8220;having a disability&#8221; (khuyết tật).</p>\n<p>Nhưng cách nói giảm nói tránh này có thể tạo cảm giác khó hiểu. Ví dụ một bạn sinh viên người nước ngoài và không thạo tiếng Anh khi mới gặp chữ &#8220;physically challenged&#8221; sẽ khó mà liên tưởng đến chữ &#8220;handicapped&#8221; được.</p>\n<p>Vậy việc sử dụng uyển ngữ trong lâm sàng ảnh hưởng đến góc nhìn của bệnh nhân như thế nào?</p>\n<p>Có một nghiên cứu kia được thực hiện vào năm 2005, trong đó các nhà nghiên cứu khảo sát sự hiệu quả của các kiểu giải thích &#8220;heart failure&#8221; (mà không nói thẳng ra chữ này). Kết quả cho thấy cách thường nhất mà bác sĩ giải thích khái niệm suy tim là ‘‘you have fluid on your lungs as your heart is not pumping hard enough’’, tiếp ngay sau đó là ‘‘your heart is a bit weaker than it used to be’’ và ‘‘your heart is not pumping properly’’.</p>\n<p>Kết luận của nghiên cứu là: &#8220;The results showed that the term &#8216;heart failure&#8217; made patients believe that the illness had more serious consequences, would be more variable over time and would last for longer then when the same symptoms were labeled using the euphemism. In addition, ‘heart failure’ made them more anxious and depressed.&#8221;</p>\n<p>Điều đó ủng hộ việc cân nhắc sử dụng uyển ngữ trong lâm sàng. Mặc dù, như đã nói ở trên, bản thân uyển ngữ mang tính chất vòng vo, và nguy cơ hiểu không đúng là có. Euphemism như một con dao hai lưỡi mà nếu chúng ta sử dụng tốt có thể mang lại nhiều điều tích cực cho đời này.</p>\n<p>Mình còn nhớ trong một buổi học về giao tiếp trong y khoa của ACH, khi một bác sĩ (trong tình huống đóng với bệnh nhân giả) nói rằng &#8220;I&#8217;ll help you lose weight.&#8221; thì sau đó thầy hướng dẫn có đề nghị chỉnh lại thành &#8220;We&#8217;re here to help you get to the healthy weight.&#8221; Lý do là vì nhiều bệnh nhân béo phì đã nghe đi nghe lại về việc giảm cân, đến mức họ bị &#8220;dị ứng&#8221; với chữ &#8220;lose weight&#8221;. Nhưng &#8220;healthy weight&#8221; thì nghe lọt tai hơn một chút, và họ dễ lắng nghe hơn.</p>\n<p>Âu thì cũng là những sự khác nhau rất nhỏ về ngôn ngữ. Nhưng những điều nhỏ nhặt ấy làm nên sự khác biệt.</p>\n<p>Bài viết từ BS Trần Quang Hưng</p>\n",
        "image": "https://www.medlangfanatic.com/images/uyen-chuyen-trong-anh-van-y-khoa.jpeg",
        "author": "6318f4aaed3db41b17baaa85",
        "topic": [
            {
                "_id": "6338775f8a36074dfbeaf3e4",
                "name": "tips",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:22:39.736Z",
                "updatedAt": "2022-10-01T17:22:39.736Z",
                "__v": 0
            },
            {
                "_id": "633877908a36074dfbeaf3ed",
                "name": "medical vocabulary",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:23:28.786Z",
                "updatedAt": "2022-10-01T17:23:28.786Z",
                "__v": 0
            },
            {
                "_id": "633877888a36074dfbeaf3ea",
                "name": "medical english",
                "isDeleted": false,
                "createdAt": "2022-10-01T17:23:20.170Z",
                "updatedAt": "2022-10-01T17:23:20.170Z",
                "__v": 0
            },
            {
                "_id": "634878435bd121dbd855b49d",
                "name": "jargon",
                "isDeleted": false,
                "createdAt": "2022-10-13T20:42:43.690Z",
                "updatedAt": "2022-10-13T20:42:43.690Z",
                "__v": 0
            }
        ],
        "createdBy": "63387c0ed050dd0338854931",
        "createdAt": "2022-08-22T11:24:18.000Z",
        "slug": "uyen-ngu-trong-anh-van-y-khoa",
        "updatedAt": "2022-08-22T11:24:18.000Z",
        "yoast_head_json": "{\"title\":\"UYỂN NGỮ TRONG ANH VĂN Y KHOA - Medlangfanatic\",\"robots\":{\"index\":\"index\",\"follow\":\"follow\",\"max-snippet\":\"max-snippet:-1\",\"max-image-preview\":\"max-image-preview:large\",\"max-video-preview\":\"max-video-preview:-1\"},\"canonical\":\"https://medlangfanatic.com/uncategorized/uyen-ngu-trong-anh-van-y-khoa/\",\"og_locale\":\"en_US\",\"og_type\":\"article\",\"og_title\":\"UYỂN NGỮ TRONG ANH VĂN Y KHOA - Medlangfanatic\",\"og_description\":\"&nbsp; Uyển ngữ (euphemism) được hiểu đơn giản là những cách nói vòng vo, nói giảm nói tránh, thường là... Read More >>\",\"og_url\":\"https://medlangfanatic.com/uncategorized/uyen-ngu-trong-anh-van-y-khoa/\",\"og_site_name\":\"Medlangfanatic\",\"article_publisher\":\"https://www.facebook.com/MedLangFanatic\",\"article_published_time\":\"2022-08-22T12:24:18+00:00\",\"og_image\":[{\"width\":624,\"height\":539,\"url\":\"https://medlangfanatic.com/wp-content/uploads/2022/08/11.png\",\"type\":\"image/png\"}],\"author\":\"danh vo\",\"twitter_card\":\"summary_large_image\",\"twitter_misc\":{\"Written by\":\"danh vo\",\"Est. reading time\":\"3 minutes\"},\"schema\":{\"@context\":\"https://schema.org\",\"@graph\":[{\"@type\":\"WebPage\",\"@id\":\"https://medlangfanatic.com/uncategorized/uyen-ngu-trong-anh-van-y-khoa/\",\"url\":\"https://medlangfanatic.com/uncategorized/uyen-ngu-trong-anh-van-y-khoa/\",\"name\":\"UYỂN NGỮ TRONG ANH VĂN Y KHOA - Medlangfanatic\",\"isPartOf\":{\"@id\":\"https://medlangfanatic.com/#website\"},\"datePublished\":\"2022-08-22T12:24:18+00:00\",\"dateModified\":\"2022-08-22T12:24:18+00:00\",\"author\":{\"@id\":\"https://medlangfanatic.com/#/schema/person/68d54927c192540d9e451dfac8376c2a\"},\"breadcrumb\":{\"@id\":\"https://medlangfanatic.com/uncategorized/uyen-ngu-trong-anh-van-y-khoa/#breadcrumb\"},\"inLanguage\":\"en-US\",\"potentialAction\":[{\"@type\":\"ReadAction\",\"target\":[\"https://medlangfanatic.com/uncategorized/uyen-ngu-trong-anh-van-y-khoa/\"]}]},{\"@type\":\"BreadcrumbList\",\"@id\":\"https://medlangfanatic.com/uncategorized/uyen-ngu-trong-anh-van-y-khoa/#breadcrumb\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://medlangfanatic.com/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Uncategorized\",\"item\":\"https://medlangfanatic.com/category/uncategorized/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"UYỂN NGỮ TRONG ANH VĂN Y KHOA\"}]},{\"@type\":\"WebSite\",\"@id\":\"https://medlangfanatic.com/#website\",\"url\":\"https://medlangfanatic.com/\",\"name\":\"Medlangfanatic\",\"description\":\"\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://medlangfanatic.com/?s={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"inLanguage\":\"en-US\"},{\"@type\":\"Person\",\"@id\":\"https://medlangfanatic.com/#/schema/person/68d54927c192540d9e451dfac8376c2a\",\"name\":\"danh vo\",\"image\":{\"@type\":\"ImageObject\",\"inLanguage\":\"en-US\",\"@id\":\"https://medlangfanatic.com/#/schema/person/image/\",\"url\":\"https://secure.gravatar.com/avatar/95d85433fb46789c5553261d4526d968?s=96&d=mm&r=g\",\"contentUrl\":\"https://secure.gravatar.com/avatar/95d85433fb46789c5553261d4526d968?s=96&d=mm&r=g\",\"caption\":\"danh vo\"},\"url\":\"https://medlangfanatic.com/author/danhvo/\"}]}}",
        "__v": 0
    }

]

const fbs = [
    {
        content: "Nhờ khóa học mà em có ý thức hơn trong việc giao tiếp, đặc biệt là những mindset và skill theo hướng patient - centered nhiều hơn so với những gì mình vẫn hay làm ở Tiếng Việt. Một điều rất lớn em học được từ các anh chị trong khóa học này đó là hiểu rõ hơn mục đích của việc giao tiếp, đó là sự quan tâm và thấu cảm với người đối diện, từ đó định hướng những gì mình nói, mình thể hiện trong lúc khám bệnh cũng sẽ thay đổi so với trước đây, luôn hướng về điều mà người bệnh đang thực sự gặp khó khăn, biết cân bằng giữa thời gian khám và hiệu quả cuộc khám. Với những tình huống bất ngờ trong giao tiếp thì em cũng phần nào hiểu được mình phải vừa giải quyết được những thắc mắc của người bệnh trong phạm vị cho phép, vừa cam đoan với người bệnh những gì sẽ làm được và đặc biệt là cố gắng hết sức để cuộc khám trở nên có ý nghĩa với người bệnh nhất có thể.",
        name: "Dương Lê",
        title: "Sinh viên"
    },
    {
        content: "Em hiện chưa có cơ hội thực hành giao tiếp với người bệnh bằng tiếng Anh. Tuy nhiên, khoá học đã giúp em có một cái nhìn tổng quát hơn về khai thác bệnh sử, tiền sử, khám lâm sàng, quan tâm hơn đến cảm xúc của người bệnh. Nhờ đó, em đã tự tin hơn trong khi khám lâm sàng, khai thác thông tin từ bệnh nhân bằng tiếng Việt, đặc biệt là em đã biết quan tâm và tiếp cận lấy người bệnh làm trung tâm, do vậy hiệu quả học lâm sàng của em đã cải thiện nhiều.",
        name: "Thanh Ngân",
        title: "Bác sĩ"
    },
    {
        content: "Trước khi học thì khả năng giao tiếp bằng tiếng Anh với bệnh nhân của riêng em chỉ khoảng 2.5/10. Sau 12 buổi học với các instructors thì em đã tự tin hơn rất nhiều trong việc tư vấn, giải thích, hỏi han bệnh nhân. Không chỉ học được về tiếng Anh, những nghệ thuật về giao tiếp này em cũng đã áp dụng với bệnh nhân em đang thực tập và kết quả ngoài sức mong đợi ^^ ",
        name: "Khoa",
        title: "Sinh viên"
    },
    {
        content: `Dạ với em thì mỗi instructor đều để lại cho em 1 nét riêng rất tích cực, mà nếu phải kể thì em cũng kể được những điểm em ấn tượng với từng người luôn ạ :>
Anh Hưng trong buổi học em thấy là người khá trầm tính nhưng những góp ý và nhận xét của anh luôn rất đắt giá, sâu sắc, kiểu mỗi comment của anh đều chứa đầy kiến thức và cả những kinh nghiệm thực tế của anh luôn ạ. 
Anh Đức thì luôn vui vẻ kiểu luôn mang lại năng lượng tích cực cho mọi người trong các buổi học, buổi học có anh luôn cảm thấy rất thoải mái và vui vẻ và anh cũng có góp ý giúp em sửa đổi rất nhiều trong buổi practice của em.
Anh Cang có cách tiếp cận bài học rất hay trong những buổi anh host, anh để 1 phần của bài học của thinkific vào buổi practice để mọi người cùng nhau rút ra bài học để luyện tập và cả phần quizz và minigame của anh cũng rất thú vị ạ.
Chị Trúc luôn có những exercises đầu buổi học từ các nguồn trên mạng để mọi người cùng tham gia làm và trong breakout room của chị thì chị luôn góp ý rất nhiều và chi tiết, ngoài ra chị còn nhiệt tình đóng vai để các bạn có thể luyện tập nhiều hơn.Những role play có chị tham gia đều là những tình huống rất thực tế, bệnh nhân hỏi rất kỹ chứ không phải bệnh nhân dễ dãi như mọi người đóng vai, và chị cũng hỗ trợ hết mình để mọi người hoàn thành phần role play của mình.Em rất tiếc trong những buổi chị host chính là những bài khá khó liên quan đến specialty, workup, treatment, drug..đều là những phần rất khó với em vì bản thân phần này ở Tiếng Việt em mới học tiếp cận chẩn đoán bệnh nhân, chưa được đi lâm sàng nhiều nên em chưa có nhiều khái niệm trên thực tế về thăm khám, thực hiện cận lâm sàng, điều trị nên em gặp khá nhiều khó khăn khi chuẩn bị bài ạ: (với những buổi này đều dính vào thời gian cuối năm gần tết em vướng lịch học lịch thi rất nhiều ở trường.Nhưng em có note lại đầy đủ, em sẽ cố gắng áp dụng khi em nắm được những kiến thức chuyên ngành cần thiết cho những phần này ạ.
Em rất ngưỡng mộ những gì các anh chị đã làm trong khóa học này, từ những kiến thức trong bài học đến kinh nghiệm cá nhân, cách các anh chị bố trí thiết kế bài giảng và truyền tải đến cho các thành viên trong khóa học, tất cả đều rất khoa học và hiệu quả.Em có khá nhiều dự định để trau dồi thêm về clinical knowledge và clinical skill và cũng để phát triển bản thân trong tương lai.Em cảm thấy những gì mà anh chị mang đến cho mọi người và cộng đồng đều rất đáng ngưỡng mộ và trân trọng ạ, hi vọng em sẽ có cơ hội được tham gia thêm các hoạt động sau này của các anh chị để được học hỏi và đóng góp cho những hoạt động rất bổ ích này ạ.Cảm ơn mọi người rất nhiều<33`,
        name: "Trần Minh Quang Thuận",
        title: "Sinh viên"
    },
    {
        content: "Có rất nhiều điều bổ ích từ khoá học này như về phương diện ngôn ngữ thì khoá học đã giúp mình khá nhiều trong việc sử dụng Tiếng Anh trong giao tiếp, những cụm từ và cách nói mà hay sử dụng cũng như về phương diện chuyên ngành thì khoá học đã giúp đỡ rất bổ ích từ việc trao đổi với bệnh nhân, những điều tưởng chừng như đơn giản nhưng khi giao tiếp bằng tiếng Anh thì hoá ra lại cực kì khó.",
        name: "Tiến Lê",
        title: "Bác sĩ"
    },
    {
        content: "Đầu tiên là khóa đưa ra những guide rất rõ ràng và dễ hiểu để áp dụng trong việc giao tiếp với người bệnh mà có thể áp dụng cả tiếng Việt lẫn tiếng Anh. Các guide khi tóm tắt lại thì hoàn toàn có thể áp dụng, dù em bên chuyên ngành khác bác sĩ nhưng vẫn rất hiệu quả. Thứ hai là nhờ những bài tập và bài học mà em biết được thêm nhiều những từ vựng chuyên ngành, cũng như những loại bệnh khác mà chuyên ngành của mình ít tiếp xúc. Ngoài ra, em cũng biết thêm nhiều các medicine mà em chưa biết hoặc ít biết đến. Thứ ba là khả năng giao tiếp của em đã nâng lên đáng kể, về khả năng giao tiếp với người khác nói chung, và khả năng giao tiếp với người bệnh ở khá nhiều scenarios nói riêng.",
        name: "Hồng Diễm ",
        title: "Dược sĩ"
    },
    {
        content: "Anh Hưng, anh Cang em đã có cơ hội tiếp xúc từ trước và thấy hai anh rất dễ gần, làm việc rất logic và luôn thông cảm, hài hoà với khó khăn của mọi người. Chị Trúc thì luôn khơi gợi, mở rộng bài học, thực hành trên các resources đa dạng khiến em rất hứng thú tìm hiểu thêm các nội dung mới ngoài bài học Thinkific! Anh Đức thì rất hay cười (và ngại) và đưa ra những nhận xét rất dễ thương, hài hước 😋 Mỗi anh chị đều có một phong cách đưng lớp khác nhau nhưng luôn cố gắng mang lại phần hướng dẫn gãy gọn, rõ ràng và khuyến khích người học nhất có thể ạ!",
        name: "Nguyễn Thị Bình",
        title: "Sinh viên"
    }
    ,
    {
        content: "Thầy share một lượng kiến thức và kinh nghiệm rất lớn cho học viên, điều đó khiến mình có nhiều cách để cải thiện Tiếng Anh chuyên ngành của mình hơn.",
        name: "Thanh Thảo",
        title: "Bác sĩ"
    },
    {
        content: "Những kiến thức mà anh Hưng chia sẻ ạ, các khoá học khác sẽ dạy đơn thuần nghĩa từng từ từng bài khô khan, còn khoá học này lại cung cấp “cần câu” bởi một người có nhiều kinh nghiệm. Chỉ sợ là có học hết được những cái anh chỉ không thui ạ.",
        name: "Thu Hương",
        title: "Sinh viên"
    },
    {
        content: "Để trả lời cho câu hỏi này em cũng đắn đo nhiều lắm á, bởi vì có khá nhiều điều em thích về CA. Đầu tiên là giáo trình học theo 1 tiến trình rất mạch lạc, cụ thể, các mẫu câu có tính ứng dụng cao, và nội dung học cũng hay được nhắc lại giữa các buổi giúp em dễ nhớ hơn. Những trang web được giới thiệu cũng thiết thực, hay lạ, có nhiều trang em còn chưa từng biết đến sự tồn tại luôn :3. Em đặc biệt ấn tượng với accent của anh Hưng, lần đầu tiên nghe ảnh nói em bất ngờ kinh khủng, dù em cũng biết anh Hưng 'khủng' từ trước rồi nhưng mà không ngờ nó siêu trầm và siêu hay luôn í 😣 Thêm một cái nữa là mỗi lần chữa bài tập, em đều được nhận các feedback rất cụ thể để bài trình của mình súc tích hơn, và các góp ý về phát âm nữa.",
        name: "Lan Chi",
        title: "Bác sĩ"
    }
]

const sideBarItemsDoc = [
    {
        title: "Tài liệu",
        // icon: <FontAwesomeIcon icon={faBook} />,
        children: [
            {
                title: "Bộ từ vựng X-quang lồng ngực (Fleishner 2008)",
                link: "https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing",
                category: "book",
                path: "/documents/book/bo-tu-vung-x-quang-long-nguc",
                slug: "bo-tu-vung-x-quang-long-nguc",
                display: "download"
            },
            {
                title: "Bận rộn làm sao học tiếng Anh",
                link: "https://drive.google.com/file/d/1bomzB9sYaQQ6tGMVRBaqNig3D6f4WUCD/view?usp=sharing",
                category: "book",
                path: "/documents/book/ban-ron-lam-sao-hoc-tieng-anh",
                slug: "ban-ron-lam-sao-hoc-tieng-anh",
                display: "download"
            },

        ]
    },
    {
        title: "Collection",
        children: [
            {
                title: "Medical Academic Vocabulary List",
                link: "https://drive.google.com/file/d/14gR4lureVsFvVQfzNkVea_y0rhfbQ2-3/view?usp=sharing",
                category: "collection",
                path: "/documents/collection/medical-academic-vocabulary-list",
                slug: "medical-academic-vocabulary-list",
                display: "html",
            },
            {
                title: "Prefixes, suffixes, and combining forms",
                link: "https://drive.google.com/file/d/1zHqOXs5SYbghJ5zVsHUDBOa-YR0XJ8W3/view?usp=sharing",
                category: "collection",
                path: "/documents/collection/prefixes-suffixes-and-combining-forms",
                slug: "prefixes-suffixes-and-combining-forms",
                display: "html",
            },
            {
                title: "MLF | Root + Prefix + Suffix",
                link: "",
                category: "collection",
                path: "/documents/collection/root-prefixes-suffixes",
                slug: "root-prefixes-suffixes",
                display: "html",
            },
            {
                title: "Học cách hỏi bệnh sử bằng tiếng Anh như thế nào?",
                link: "https://drive.google.com/file/d/1bILvlnU3yNn2kRfDDTEwlOyjoZl0GUfM/view?usp=sharing",
                category: "collection",
                path: "/documents/collection/hoc-cach-hoi-benh-su-bang-tieng-anh-nhu-the-nao",
                slug: "hoc-cach-hoi-benh-su-bang-tieng-anh-nhu-the-nao",
                display: "download"
            },
            {
                title: "MLF | Bộ từ vựng về Ốm nghén",
                link: "",
                category: "collection",
                path: "/documents/collection/bo-tu-vung-ve-om-nghen",
                slug: "bo-tu-vung-ve-om-nghen",
                display: "html",
            }
        ]
    }
]

const sideBarItemsEx = [{
    title: "Bài tập",
    // icon: <FontAwesomeIcon icon={faDumbbell} />,
    children: [
        {
            title: "Adjectives - 1",
            link: <iframe title="Adjective - 1" src="https://medlangfanatic.h5p.com/content/1291833633302303469/embed" aria-label="Adjectives - 1" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=adjectives-1",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Adjectives - 2",
            link: <iframe title="Adjective - 2" src="https://medlangfanatic.h5p.com/content/1291850774359074189/embed" aria-label="Adjectives - 2" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=adjectives-2",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Nouns",
            link: <iframe title="Nouns" src="https://medlangfanatic.h5p.com/content/1291852626946752509/embed" aria-label="Nouns" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=nouns",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Verbs - 1",
            link: <iframe title="Verbs - 1" src="https://medlangfanatic.h5p.com/content/1291850780613494819/embed" aria-label="Verbs - 1" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=verbs-1",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Verbs - 2",
            link: <iframe title="Verbs - 2" src="https://medlangfanatic.h5p.com/content/1291850795749973129/embed" aria-label="Verbs - 2" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=verbs-2",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Adverbs",
            link: <iframe title="Adverbs" src="https://medlangfanatic.h5p.com/content/1291852644956310699/embed" aria-label="Adverbs" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=adverbs",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Phrasal Verbs",
            link: <iframe title="Phrasal Verbs" src="https://medlangfanatic.h5p.com/content/1291852638453240539/embed" aria-label="Phrasal Verbs" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=phrasal-verbs",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Verbs: Mixed Tenses",
            link: <iframe title="Verbs: Mixed Tenses" src="https://medlangfanatic.h5p.com/content/1291852630590442609/embed" aria-label="Verbs: Mixed Tenses" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=verbs-mixed-tenses",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Verb: Past Tense ~ Regular Verbs",
            link: <iframe title="Verb: Past Tense ~ Regular Verbs" src="https://medlangfanatic.h5p.com/content/1291850804183353469/embed" aria-label="Verb: Past Tense ~ Regular Verbs" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=verb-past-tense-regular-verbs",
            type: "exercise",
            display: "embed",
        },
        {
            title: "Parts of the body crossword - 1",
            link: <iframe title="Parts of the body crossword - 1" src="https://medlangfanatic.h5p.com/content/1291850832298021379/embed" aria-label="Parts of the body crossword - 1" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=parts-of-the-body-crossword-1",
            type: "exercise",
            display: "embed",
        },






        // {
        //     title: "1. Email Writing",
        //     children: [
        //         {
        //             title: "Sentence arrangement - Introductory email [1]",
        //             link: <iframe title="Sentence arrangement - Introductory email[1]" src="https://medlangfanatic.h5p.com/content/1291480456540279979/embed" width="1088" height="893" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *" aria-label="Email writing - Sentence arrangement - Introductory email"></iframe>,
        //             path: "?type=exercise&name=sentence-arrangement-introductory-email-1",
        //             type: "exercise",
        //             display: "embed",

        //         },
        //         {
        //             title: "Sentence arrangement - Introductory email [2]",
        //             link: <iframe title="Sentence arrangement - Introductory email[1]" src="https://medlangfanatic.h5p.com/content/1291480456540279979/embed" width="1088" height="893" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *" aria-label="Email writing - Sentence arrangement - Introductory email"></iframe>,
        //             path: "?type=exercise&name=sentence-arrangement-introductory-email-2",
        //             type: "exercise",
        //             display: "embed",
        //         }
        //     ]
        // }
    ]
}
]




export { instructors, courseDetail, faq, feedBack, about, blogContent, courseListContent, fbs, sideBarItemsDoc, sideBarItemsEx, slugCourseByCat }


// const x = [
//     {
//         "id": 670575,
//         "first_name": "BS.",
//         "last_name": "Hoàng Đức",
//         "bio": "Bác sĩ chuyên ngành Chăm sóc Giảm nhẹ/ Ung thư, Bệnh viện Ung Bướu TP.HCM\nGiảng viên tiếng Anh tại Jio Health\nHoàn thành khoá học Mastering Medical Teaching, Stanford Center for Professional Development năm 2021\nCựu Chủ nhiệm CLB tiếng Anh H.E.I. tại Đại học Y Dược TPHCM",
//         "user_id": 37355227,
//         "title": "BS.",
//         "slug": "duc-hoang",
//         "avatar_url": "https://import.cdn.thinkific.com/426600/BtWoznWRvOAQsmU8ClDw_bs.duc.jpg",
//         "name": "Hoàng Đức",

//     }, {
//         "id": 670573,
//         "first_name": "BS.",
//         "last_name": "Nguyễn Trần Thanh Trúc",
//         "bio": "Bác sĩ chuyên ngành Thần kinh, mảng nghiên cứu chính liên quan đến sa sút trí tuệ\nDu học sinh bậc Thạc sĩ tại Đài Loan. Từng tham gia các chương trình trao đổi sinh viên tại Nhật và Úc.\nGiảng viên tiếng Anh tại Jio Health\nCựu Chủ nhiệm CLB tiếng Anh H.E.I. tại Đại học Y Dược TPHCM",
//         "user_id": 37355227,
//         "title": "BS.",
//         "slug": "truc-tran",
//         "avatar_url": "https://import.cdn.thinkific.com/426600/l8Dfap0RPGYNRCbnRjpk_bs.truc.jpg",
//         "name": "Nguyễn Trần Thanh Trúc",
//     }, {
//         "id": 816372,
//         "first_name": "BS.",
//         "last_name": "Nguyễn Ngọc Quỳnh Trâm",
//         "bio": "Tốt nghiệp bác sĩ đa khoa hạng Summa Cum Laude với GPA 4.67/5 tại đại học Debrecen, Hungary\nCựu phó chủ tịch hội sinh viên Việt Nam tại Debrecen, Hungary",
//         "user_id": 37355227,
//         "title": "BS.",
//         "slug": "bs-nguy-n-ng-c-qu-nh-tram",
//         "avatar_url": "https://files.cdn.thinkific.com/instructors/000/816/3721659779231.small.jpg",
//         "name": "Nguyễn Ngọc Quỳnh Trâm",
//     }, {
//         "id": 670576,
//         "first_name": "Ths. BS CKI.",
//         "last_name": "Nguyễn Đình Cang",
//         "bio": "Thủ khoa khóa luận bác sĩ nội trú chuyên ngành Mắt 2022\nHọc bổng toàn phần Lancaster Course của đại học Harvard 2022\nGiảng viên Anh văn y khoa trong các chương trình hợp tác MEC-UMP (2018 - 2021) tại đại học Y dược và MEDSPACE (2021) tại đại học Y khoa Phạm Ngọc Thạch.\nGiảng viên tiếng Anh tại Jio Health.",

//         "user_id": 37355227,
//         "title": "Ths. BS CKI.",
//         "slug": "cang-nguyen",
//         "avatar_url": "https://import.cdn.thinkific.com/426600/KJcUAmL9SH6qPps6ilfy_Cang.jpg",

//         "name": "Nguyễn Đình Cang",

//     }, {

//         "id": 793608,
//         "first_name": "Hiệu",
//         "last_name": "Lê",
//         "bio": "Hello",

//         "user_id": 70962760,
//         "title": "BS.",
//         "slug": "hi-u-le",
//         "avatar_url": "/assets/tenant/defaults/instructor-avatar.png",
//         "email": "lethingochieu279@gmail.com",
//         "name": "Lê Hiệu",

//     }]


// {
//     "title": "Profile",
//         "icon": <FontAwesomeIcon icon={faChevronDown} />,
//             children: [
//                 {
//                     "title": "Profile",
//                     "path": "/profile"
//                 },
//                 {
//                     "title": "Settings",
//                     children: [
//                         {
//                             "title": "Account",
//                             "path": "/settings/account"
//                         },
//                         {
//                             "title": "Billing",
//                             children: [
//                                 {
//                                     "title": "Payment",
//                                     "path": "/settings/billing/payment"
//                                 },
//                                 {
//                                     "title": "Subscription",
//                                     "path": "/settings/billing/subscription"
//                                 }
//                             ]
//                         },
//                         {
//                             "title": "Notifications",
//                             "path": "/settings/notifications"
//                         }
//                     ]
//                 },
//                 {
//                     "title": "Logout",
//                     "path": "/logout"
//                 }
//             ]
// }