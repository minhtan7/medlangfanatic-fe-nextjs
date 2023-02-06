// import { MLF_A_COMPREHENSIVE_LIST_OF_PREFIXES, MLF_bo_tu_vung_om_nghen, MLF_Medical_Academic_Vocabulary_List, MLF_ROOT_PREFIX_SUFFIX } from "../pages/DocumentationPage/MLF_Medical_Academic_Vocabulary_List"

import { MLF_A_COMPREHENSIVE_LIST_OF_PREFIXES, MLF_Medical_Academic_Vocabulary_List, MLF_ROOT_PREFIX_SUFFIX, MLF_bo_tu_vung_om_nghen } from "documents"

const slugs = {
    // link: {
    //     "medical-terminology": "https://webforms.pipedrive.com/f/ckweFskLyr2V5zNB3vMuVsB0jgaEbAHXcuRFz8YBHN5O4Bsdk3od9WJ8rD19uCnL0f",
    //     "mavl": "https://webforms.pipedrive.com/f/6Na7FxACrR9AIRnhT8dm44I4RAqCPurExWfMOooL85t0s1JxH2m9WyyqEEW9kzCo5t",
    //     "clinical-case-presentation": "https://webforms.pipedrive.com/f/6FCJQ2wrJH8q1JR8NoyJCeF6vDA2GVbfYVh7DtgOjGkeqHjg3o2Vz8YsFpp2euHWUP",
    //     "communication-with-patients-101": "https://webforms.pipedrive.com/f/6jZHCqSSCU9dyeZNUMyqnLlrTYi9jR0xgoaCnmtUYHvmJDLwZfhQCsc3rCD9AvMo1B"
    // },
    id: {
        "medical-terminology": 2026776,
        "mavl": 1751294,
        "clinical-case-presentation": 1522731,
        "communication-with-patients-101": 1522730
    },
    recruitStatus: {
        "communication-with-patients-101": false,
        "clinical-case-presentation": false,
        "medical-terminology": true,
        mavl: true
    },
    // "register-form": {
    //     "medical-terminology": 2026776,
    //     "mavl": 1751294,
    //     "clinical-case-presentation": 1522731
    // },

    thumbnail: {
        "medical-terminology": "https://res.cloudinary.com/tanvo/image/upload/v1674322582/medlangfanatic/courses/mt/mt-thumbnail_rr3nlj.jpg",
        "mavl": "https://res.cloudinary.com/tanvo/image/upload/v1674322596/medlangfanatic/courses/mavl/mavl-thumbnail_ker6a6.svg",
        "clinical-case-presentation": "https://res.cloudinary.com/tanvo/image/upload/v1671965829/medlangfanatic/courses/presenting-clinical-case-from-scratch/pccs-thumbnail_nei3t5.jpg",
        "communication-with-patients-101": "https://res.cloudinary.com/tanvo/image/upload/v1672313340/medlangfanatic/courses/cwp/communications_ycbuwr.jpg",

    },

    hero: {
        "medical-terminology": "https://res.cloudinary.com/tanvo/image/upload/v1674322583/medlangfanatic/courses/mt/mt-hero_image_hinkon.jpg",
        "mavl": "https://res.cloudinary.com/tanvo/image/upload/v1674322595/medlangfanatic/courses/mavl/mavl-hero_image_x411wv.webp",
        "clinical-case-presentation": "https://res.cloudinary.com/tanvo/image/upload/v1671966012/medlangfanatic/courses/presenting-clinical-case-from-scratch/pccs-hero_t1cx34.jpg",
        "communication-with-patients-101": "https://res.cloudinary.com/tanvo/image/upload/v1672311931/medlangfanatic/courses/cwp/cwp-hero_rrcnmv.jpg"
    },
    targetDate: {
        "medical-terminology": new Date(2022, 10, 5, 0, 0, 0),
        "mavl": new Date(2022, 10, 5, 0, 0, 0),
        "clinical-case-presentation": new Date(2023, 2, 4, 0, 0, 0),
        "communication-with-patients-101": new Date(2023, 2, 4, 0, 0, 0)
    },
    signUpHover: {
        "medical-terminology": "sign-up-mt",
        "mavl": "sign-up-mavl",
        "clinical-case-presentation": "sign-up-mavl",

    },
    courseTitle: {
        mavl: "Medical Academic Vocabulary List",
        "medical-terminology": "Medical Terminology",
        "clinical-case-presentation": "Presenting Clinical Cases From Scratch",
        "communication-with-patients-101": "Communication With Patients 101",
    },
    // "medical-terminology": {
    //     link: "https://webforms.pipedrive.com/f/ckweFskLyr2V5zNB3vMuVsB0jgaEbAHXcuRFz8YBHN5O4Bsdk3od9WJ8rD19uCnL0f",
    //     id: 2026776,
    //     "register-form": 2026776,
    //     thumbnail: "/images/mt-thumbnail.jpg",
    //     "mavl": "/images/mavl-thumbnail.svg",
    //     hero: "/images/mt-hero_image.jpg"
    // },
    instructors: {
        "bac-si-tran-quang-hung": {
            img: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.hung_kgiok1.webp",
            info: [
                "Trưởng phòng Đào tạo Jio Health",
                "Sáng lập Med Lang Fanatic",
                "Sáng lập câu lạc bộ tiếng Pháp khoa Y Đại học Y Dược TPHCM",
                "Học bổng toàn phần khóa huấn luyện Giảng viên của Học viện giao tiếp trong lĩnh vực y tế của Mỹ (Academy of Communication in Healthcare)",
                "Tu nghiệp về ghép tế bào gốc tạo máu tại Lyon, Pháp.",
                "Thành viên của Hội nghị quốc tế những người trẻ nói tiếng Pháp năm 2018 tại Genève, Thụy Sỹ và Trại hè Pháp ngữ châu Á - Thái Bình Dương năm 2013.",
                "Speaker tại Polyglot Gathering 2018 tại Bratislava, Slovakia",
                <span key={1}>Cây bút của <a className="text-main" style={{ textDecoration: "none" }} href="https://s4be.cochrane.org">https://s4be.cochrane.org</a> - dự án giảng dạy về thống kê y học của Cochrane UK</span>,
                "Phiên dịch viên trong nhiều hội thảo và hội nghị y khoa",
            ],
            exp: [
                "Phối hợp với Tổng Lãnh sự quán Hoa Kỳ tại TPHCM tổ chức khóa học “Communication in English with Patients and Caregivers”.",
                "Phối hợp với CLB tiếng Anh khoa Y Đại học Y Dược TPHCM (H.E.I.) và CLB tiếng Anh Đại học Y khoa Phạm Ngọc Thạch (Esculape) xây dựng chương trình dạy tiếng Anh y khoa thường niên dành cho sinh viên.",
                "Giảng viên chính trong nhiều khóa học tại Med Lang Fanatic",
            ],
            bio: "BS. Trần Quang Hưng có ước mơ cải thiện ngoại ngữ của nhân viên y tế tại Việt Nam. Trong khoảng thời gian du học tại châu Âu, anh đã có cơ hội trao đổi kinh nghiệm với các polyglot hàng đầu thế giới tại Polyglot Gathering 2018 tại Bratislava, Slovakia. Anh cũng là người Việt Nam duy nhất hoàn thành khóa Huấn luyện Giảng viên giao tiếp trong lĩnh vực Y khoa tại ACH, Hoa Kỳ, và đã kết hợp với Tổng lãnh sự quán Hoa Kỳ tổ chức thành công nhiều khóa học về giao tiếp bằng tiếng Anh với bệnh nhân.",
            title: "Founder Med Lang Fanatic",
            name: "Trần Quang Hưng",
            quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
            quoteAuthor: "Pele"
        },
        "bac-si-nguyen-dinh-cang": {
            img: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.cang_qpbtvb.jpg",
            info: [
                "Thủ khoa khóa luận Bác sĩ Nội trú chuyên ngành Mắt (2021)",
                "Học bổng toàn phần Lancaster Course của đại học Harvard (2021)",
                "Phiên dịch viên trong nhiều hội thảo và hội nghị y khoa",
                "Học bổng Học Mãi (2017)",
            ],
            exp: [
                "Giảng viên tiếng Anh hợp tác với Tổng lãnh sự quán Hoa Kỳ tại TPHCM: Khóa học Communication in English with Patients and Caregivers (2019 – nay)",
                "Giảng viên tiếng Anh trong các chương trình thường niên hợp tác với Đại học Y khoa Phạm Ngọc Thạch và khoa Y Đại học Y Dược TPHCM (2019 – nay)",
                "Giảng viên IELTS tại ICOM (2016 – 2017)",
                "Giảng viên tiếng Anh tại ILA (2015 – 2016)",
            ],
            bio: "BS. Nguyễn Đình Cang là bác sĩ chuyên ngành Mắt, đã có kinh nghiệm giảng dạy Anh văn y khoa tại Tổng lãnh sự quán Hoa Kỳ, tại đại học Y khoa Phạm Ngọc Thạch và tại khoa Y Đại học Y Dược TPHCM. Anh là 1 trong 2 người Việt Nam đạt học bổng toàn phần Lancaster Course của đại học Harvard vào năm 2021. Anh cũng là thủ khoa khóa luận Bác sĩ Nội trú và có kinh nghiệm phiên dịch trong nhiều hội thảo và hội nghị y khoa.",
            title: "Instructor at Med Lang Fanatic",
            name: "Nguyễn Đình Cang",
            quote: "In learning you will teach, and in teaching you will learn.",
            quoteAuthor: "Phil Collins"
        },
        "bac-si-nguyen-ngoc-quynh-tram": {
            img: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.tram_lphdre.webp",
            info: [
                "Tốt nghiệp hạng Ưu tại Đại học Debrecen, Hungary với GPA toàn khóa 4.67/5",
                "Nguyên phó chủ tịch Hội sinh viên Việt Nam tại Đại học Debrecen, Hungary",
                "Phiên dịch viên trong nhiều hội thảo và hội nghị y khoa",
                "Học bổng Học Mãi (2017)",
            ],
            exp: [
                "Tổ chức các workshop Kỹ năng lâm sàng tại Hội sinh viên Việt Nam Đại học Debrecen, Hungary về các chủ đề như Trình bày bệnh án lâm sàng bằng tiếng Anh, kỹ năng khám lâm sàng.",
                "Giảng dạy Khoa học cơ bản bằng tiếng Anh, tại hội sinh viên Việt Nam Đại học Debrecen, Hungary",
                "Giảng viên tiếng Anh hợp tác với Tổng lãnh sự quán Hoa Kỳ tại TPHCM: Khóa học Communication in English with Patients and Caregivers",
            ],
            bio: "BS. Nguyễn Ngọc Quỳnh Trâm từng là du học sinh tại Úc và tại Hungary. Chị tốt nghiệp hạng Ưu tại đại học Debrecen Hungary và từng giữ vị trí phó chủ tịch hội sinh viên Việt Nam. Chị cũng có kinh nghiệm viết báo và trình hội thảo khoa học khi còn là sinh viên y. Định hướng trong tương lai của BS Trâm là làm việc trong hệ thống NHS của Anh Quốc.",
            title: "Instructor at Med Lang Fanatic",
            name: "Nguyễn Ngọc Quỳnh Trâm",
            quote: "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
            quoteAuthor: "Dr. Seuss"
        },
        "bac-si-tran-nguyen-thanh-huong": {
            img: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.huong_ggmqir.png",
            info: [
                "Bác sĩ, khoa Phẫu thuật tim trẻ em, Bệnh viện Đại học Y Dược TP.HCM.",
                "Bác sĩ thực tập Nhi khoa tại phòng khám MD Kids Pediatrics, McKinney, Texas, USA. (2020)",
                "Chứng nhận thi đậu kỳ thi USMLE Step 1 & Step 2 Clinical Knowledge.",
                "Sinh viên học lâm sàng tại Bệnh viện Westmead, Sydney – Chương trình học bổng Quỹ Học Mãi, Trường Y khoa Đại học Sydney, Australia",
                "Cựu Chủ nhiệm CLB tiếng Anh H.E.I. tại Đại học Y Dược TPHCM",
                'Trưởng nhóm biên dịch sách "The End of Alzheimer"',
            ],
            exp: [
                "Người hướng dẫn khóa học khám bệnh bằng tiếng Anh “English communication in Medicine” – Đồng tổ chức bởi American Center – Tổng lãnh sự quán Mỹ tại TP.HCM và tổ chức Med Lang Fanatic.",
                "Gia sư cá nhân bằng tiếng Anh cho sinh viên Y khoa và sinh viên Điều dưỡng tại Việt Nam và Mỹ.",
                "Trưởng nhóm tình nguyện viên phiên dịch y khoa – Dự án hợp tác trao đổi chuyên môn và mổ tim từ thiện giữa tổ chức phi lợi nhuận MD1World, USA và Bệnh viên Tim Hà Nội, Việt Nam.",
                "Chứng chỉ OET (Occupational English Test) - Medicine.",
                "Chứng chỉ IELTS 8.0.",
                "Chứng chỉ đào tạo liên tục – Phương pháp giảng dạy và lượng giá lâm sàng dựa trên năng lực(Đại học Y Dược TP.HCM)."
            ],
            // bio: "BS. Nguyễn Ngọc Quỳnh Trâm từng là du học sinh tại Úc và tại Hungary. Chị tốt nghiệp hạng Ưu tại đại học Debrecen Hungary và từng giữ vị trí phó chủ tịch hội sinh viên Việt Nam. Chị cũng có kinh nghiệm viết báo và trình hội thảo khoa học khi còn là sinh viên y. Định hướng trong tương lai của BS Trâm là làm việc trong hệ thống NHS của Anh Quốc.",
            title: "Instructor at Med Lang Fanatic",
            name: "Nguyễn Trần Thanh Hương",
            quote: "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
            quoteAuthor: "Plato"
        }
    },
    // metaData: {
    //     mavl: {
    //         description: "Khóa học MAVL hướng dẫn bạn phân nhóm từ vựng giúp liên tưởng, và bài tập tương tác đa dạng giúp hiểu sâu hàm nghĩa các từ vựng.",
    //         title: "Medical Academic Vocabulary List",
    //         imageUrl: "/images/mavl-thumbnail.svg",
    //         imageAlt: "Medical Academic Vocabulary List",
    //         link: "/mavl"
    //     },
    //     "medical-terminology": {
    //         description: "Medical Terminology: An essential course for healthcare professional: xây dựng vững chắc căn bản thuật ngữ y khoa tiếng Anh sau 60 giờ học đúng lộ trình.",
    //         title: "Medical Terminology: An essential course for healthcare professional",
    //         imageUrl: "/images/mt-thumbnail.jpeg",
    //         imageAlt: "Medical Terminology: An essential course for healthcare professional",
    //         link: "/medical-terminology"
    //     }
    // },
    exercise: {
        // "sentence-arrangement-introductory-email-1": {
        //     title: "Sentence arrangement - Introductory email [1]",
        //     embed: <iframe title="Sentence arrangement - Introductory email [1]" src="https://medlangfanatic.h5p.com/content/1291480456540279979/embed" width="1088" height="893" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *" aria-label="Email writing - Sentence arrangement - Introductory email"></iframe>,
        //     type: "exercise",
        //     display: "embed"
        // },
        // "sentence-arrangement-introductory-email-2": {
        //     title: "Sentence arrangement - Introductory email [2]",
        //     embed: <iframe title="Sentence arrangement - Introductory email [2]" src="https://medlangfanatic.h5p.com/content/1291480460970908039/embed" width="1088" height="893" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *" aria-label="Email writing - Sentence arrangement - Introductory email [2]"></iframe>,
        //     type: "exercise",
        //     display: "embed"

        // },
        "adjectives-1": {
            title: "Adjectives - 1",
            embed: <iframe title="Adjective - 1" src="https://medlangfanatic.h5p.com/content/1291833633302303469/embed" aria-label="Adjectives - 1" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            type: "exercise",
            path: "?type=exercise&name=adjectives-1",
            display: "embed"
        },
        "adjectives-2": {
            title: "Adjectives - 2",
            embed: <iframe title="Adjective - 2" src="https://medlangfanatic.h5p.com/content/1291850774359074189/embed" aria-label="Adjectives - 2" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            type: "exercise",
            path: "?type=exercise&name=adjectives-2",
            display: "embed"
        },
        "nouns": {
            title: "Nouns",
            embed: <iframe title="Nouns" src="https://medlangfanatic.h5p.com/content/1291852626946752509/embed" aria-label="Nouns" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            type: "exercise",
            path: "?type=exercise&name=nouns",
            display: "embed"
        },
        "verbs-1": {
            title: "Verbs - 1",
            embed: <iframe title="Verbs - 1" src="https://medlangfanatic.h5p.com/content/1291850780613494819/embed" aria-label="Verbs - 1" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=verbs-1",
            type: "exercise",
            display: "embed"
        },
        "verbs-2": {
            title: "Verbs - 2",
            embed: <iframe title="Verbs - 2" src="https://medlangfanatic.h5p.com/content/1291850795749973129/embed" aria-label="Verbs - 2" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=verbs-2",
            type: "exercise",
            display: "embed"
        },
        "adverbs": {
            title: "Adverbs",
            embed: <iframe title="Adverbs" src="https://medlangfanatic.h5p.com/content/1291852644956310699/embed" aria-label="Adverbs" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=adverbs",
            type: "exercise",
            display: "embed"
        },
        "phrasal-verbs": {
            title: "Phrasal Verbs",
            embed: <iframe title="Phrasal Verbs" src="https://medlangfanatic.h5p.com/content/1291852638453240539/embed" aria-label="Phrasal Verbs" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=phrasal-verbs",
            type: "exercise",
            display: "embed"
        },
        "verbs-mixed-tenses": {
            title: "Verbs: Mixed Tenses",
            embed: <iframe title="Verbs: Mixed Tenses" src="https://medlangfanatic.h5p.com/content/1291852630590442609/embed" aria-label="Verbs: Mixed Tenses" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=verbs-mixed-tenses",
            type: "exercise",
            display: "embed"
        },
        "verb-past-tense-regular-verbs": {
            title: "Verb: Past Tense ~ Regular Verbs",
            embed: <iframe title="Verb: Past Tense ~ Regular Verbs" src="https://medlangfanatic.h5p.com/content/1291850804183353469/embed" aria-label="Verb: Past Tense ~ Regular Verbs" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=verb-past-tense-regular-verbs",
            type: "exercise",
            display: "embed"
        },
        "parts-of-the-body-crossword-1": {
            title: "Parts of the body crossword - 1",
            embed: <iframe title="Parts of the body crossword - 1" src="https://medlangfanatic.h5p.com/content/1291850832298021379/embed" aria-label="Parts of the body crossword - 1" width="1088" height="637" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>,
            path: "?type=exercise&name=parts-of-the-body-crossword-1",
            type: "exercise",
            display: "embed"
        }
        // <script src="https://medlangfanatic.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
    },
    book: {
        "bo-tu-vung-x-quang-long-nguc": {
            title: "Bộ từ vựng X-quang lồng ngực (Fleishner 2008)",
            link: "https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing",
            type: "book",
            path: "?type=document&name=bo-tu-vung-x-quang-long-nguc",
            display: "download",
            image: "https://res.cloudinary.com/tanvo/image/upload/v1674049290/medlangfanatic/tu-vung-x-quang-nguc_o4njwr.jpg"
        },
        "ban-ron-lam-sao-hoc-tieng-anh": {
            title: "Bận rộn làm sao học tiếng Anh",
            link: "https://drive.google.com/file/d/1bomzB9sYaQQ6tGMVRBaqNig3D6f4WUCD/view?usp=sharing",
            type: "book",
            path: "?type=document&name=ban-ron-lam-sao-hoc-tieng-anh",
            display: "download",
            image: "https://res.cloudinary.com/tanvo/image/upload/v1674049648/medlangfanatic/ban-ron-lam-sao-hoc-tieng-anh_tttmoj.jpg"
        },
    },
    collection: {
        "medical-academic-vocabulary-list": {
            title: "Medical Academic Vocabulary List",
            link: "https://drive.google.com/file/d/14gR4lureVsFvVQfzNkVea_y0rhfbQ2-3/view?usp=sharing",
            type: "document",
            path: "?type=document&name=medical-academic-vocabulary-list",
            display: "html",
            html: <div dangerouslySetInnerHTML={{ __html: MLF_Medical_Academic_Vocabulary_List }}></div>

        },
        "prefixes-suffixes-and-combining-forms": {
            title: "Prefixes, suffixes, and combining forms",
            link: "https://drive.google.com/file/d/1zHqOXs5SYbghJ5zVsHUDBOa-YR0XJ8W3/view?usp=sharing",
            type: "document",
            path: "?type=document&name=prefixes-suffixes-and-combining-forms",
            display: "html",
            html: <div dangerouslySetInnerHTML={{ __html: MLF_A_COMPREHENSIVE_LIST_OF_PREFIXES }}></div>

        },
        "root-prefixes-suffixes": {
            title: "MLF | Root + Prefix + Suffix",
            link: "",
            type: "document",
            path: "?type=document&name=root-prefixes-suffixes",
            display: "html",
            html: <div dangerouslySetInnerHTML={{ __html: MLF_ROOT_PREFIX_SUFFIX }}></div>
        },
        "hoc-cach-hoi-benh-su-bang-tieng-anh-nhu-the-nao": {
            title: "Học cách hỏi bệnh sử bằng tiếng Anh như thế nào?",
            link: "https://drive.google.com/file/d/1bILvlnU3yNn2kRfDDTEwlOyjoZl0GUfM/view?usp=sharing",
            type: "document",
            path: "?type=document&name=hoc-cach-hoi-benh-su-bang-tieng-anh-nhu-the-nao?",
            display: "download",
            image: "https://res.cloudinary.com/tanvo/image/upload/v1674049932/medlangfanatic/hoc-cach-hoi-benh-su-bang-tieng-anh-nhu-the-nao_l074zo.jpg"
        },
        "bo-tu-vung-ve-om-nghen": {
            title: "MLF | Bộ từ vựng về Ốm nghén",
            link: "https://drive.google.com/file/d/1bILvlnU3yNn2kRfDDTEwlOyjoZl0GUfM/view?usp=sharing",
            type: "document",
            path: "?type=document&name=bo-tu-vung-ve-om-nghen",
            display: "html",
            html: <div dangerouslySetInnerHTML={{ __html: MLF_bo_tu_vung_om_nghen }}></div>

        }
    },
    categories: {
        tips: "tips học tiếng Anh Y Khoa",
        "learning.how.to.learn": "phương pháp học",
        "medical english": "tiếng Anh y khoa",
        "medical vocabulary": "từ vựng Anh Văn Y khoa",
        jargon: "biệt ngữ Y khoa",
        speaking: "nói tiếng Anh Y khoa",
        communication: "giao tiếp tiếng Anh Y khoa",
        listening: "nghe tiếng Anh Y khoa"
    }
}

export const slugTranslate = ({ slug, target }) => slugs[target][slug.toLowerCase()]