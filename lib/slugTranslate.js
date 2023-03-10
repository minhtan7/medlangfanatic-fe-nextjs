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
        "communication-with-patients-101": 1522730,
        "listening-skills": 1522738,
        "how-to-learn-medical-vocabulary": 2167218
    },
    recruitStatus: {
        "communication-with-patients-101": true,
        "clinical-case-presentation": false,
        "medical-terminology": true,
        mavl: true,
        "listening-skills": true,
        "how-to-learn-medical-vocabulary": true,
        "combo-vocabulary": true
    },
    // "register-form": {
    //     "medical-terminology": 2026776,
    //     "mavl": 1751294,
    //     "clinical-case-presentation": 1522731
    // },

    thumbnail: {
        "medical-terminology": "https://res.cloudinary.com/tanvo/image/upload/v1677147133/medlangfanatic/courses/MT_jpdcgb.png",
        "mavl": "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/mavl_su5gsx.png",
        "clinical-case-presentation": "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/pccs_ejihsz.png",
        "communication-with-patients-101": "https://res.cloudinary.com/tanvo/image/upload/v1677147280/medlangfanatic/courses/cwp101_ism7zx.png",
        "listening-skills": "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/listieng-to-the-language-of-medicine_ehpgrx.png",
        "how-to-learn-medical-vocabulary": "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/how-to-learn-medical-vocabulary_lhhr2j.png",
        "combo-vocabulary": "https://res.cloudinary.com/tanvo/image/upload/v1677147132/medlangfanatic/courses/a-comprehensive-course-of-medical-vocabulary_zqxndy.png"
    },

    hero: {
        "medical-terminology": "https://res.cloudinary.com/tanvo/image/upload/v1674322583/medlangfanatic/courses/mt/mt-hero_image_hinkon.jpg",
        "mavl": "https://res.cloudinary.com/tanvo/image/upload/v1674322595/medlangfanatic/courses/mavl/mavl-hero_image_x411wv.webp",
        "clinical-case-presentation": "https://res.cloudinary.com/tanvo/image/upload/v1671966012/medlangfanatic/courses/presenting-clinical-case-from-scratch/pccs-hero_t1cx34.jpg",
        "communication-with-patients-101": "https://res.cloudinary.com/tanvo/image/upload/v1672311931/medlangfanatic/courses/cwp/cwp-hero_rrcnmv.jpg",
        "listening-skills": "https://res.cloudinary.com/tanvo/image/upload/v1672311931/medlangfanatic/courses/cwp/cwp-hero_rrcnmv.jpg",
        "how-to-learn-medical-vocabulary": "https://res.cloudinary.com/tanvo/image/upload/v1672311931/medlangfanatic/courses/cwp/cwp-hero_rrcnmv.jpg"
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
        "how-to-learn-medical-vocabulary": "How to learn Medical Vocabulary"
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
                "Tr?????ng ph??ng ????o t???o Jio Health",
                "S??ng l???p Med Lang Fanatic",
                "S??ng l???p c??u l???c b??? ti???ng Ph??p khoa Y ?????i h???c Y D?????c TPHCM",
                "H???c b???ng to??n ph???n kh??a hu???n luy???n Gi???ng vi??n c???a H???c vi???n giao ti???p trong l??nh v???c y t??? c???a M??? (Academy of Communication in Healthcare)",
                "Tu nghi???p v??? gh??p t??? b??o g???c t???o m??u t???i Lyon, Ph??p.",
                "Th??nh vi??n c???a H???i ngh??? qu???c t??? nh???ng ng?????i tr??? n??i ti???ng Ph??p n??m 2018 t???i Gen??ve, Th???y S??? v?? Tr???i h?? Ph??p ng??? ch??u ?? - Th??i B??nh D????ng n??m 2013.",
                "Speaker t???i Polyglot Gathering 2018 t???i Bratislava, Slovakia",
                <span key={1}>C??y b??t c???a <a className="text-main" style={{ textDecoration: "none" }} href="https://s4be.cochrane.org">https://s4be.cochrane.org</a> - d??? ??n gi???ng d???y v??? th???ng k?? y h???c c???a Cochrane UK</span>,
                "Phi??n d???ch vi??n trong nhi???u h???i th???o v?? h???i ngh??? y khoa",
            ],
            exp: [
                "Ph???i h???p v???i T???ng L??nh s??? qu??n Hoa K??? t???i TPHCM t??? ch???c kh??a h???c ???Communication in English with Patients and Caregivers???.",
                "Ph???i h???p v???i CLB ti???ng Anh khoa Y ?????i h???c Y D?????c TPHCM (H.E.I.) v?? CLB ti???ng Anh ?????i h???c Y khoa Ph???m Ng???c Th???ch (Esculape) x??y d???ng ch????ng tr??nh d???y ti???ng Anh y khoa th?????ng ni??n d??nh cho sinh vi??n.",
                "Gi???ng vi??n ch??nh trong nhi???u kh??a h???c t???i Med Lang Fanatic",
            ],
            bio: "BS. Tr???n Quang H??ng c?? ?????c m?? c???i thi???n ngo???i ng??? c???a nh??n vi??n y t??? t???i Vi???t Nam. Trong kho???ng th???i gian du h???c t???i ch??u ??u, anh ???? c?? c?? h???i trao ?????i kinh nghi???m v???i c??c polyglot h??ng ?????u th??? gi???i t???i Polyglot Gathering 2018 t???i Bratislava, Slovakia. Anh c??ng l?? ng?????i Vi???t Nam duy nh???t ho??n th??nh kh??a Hu???n luy???n Gi???ng vi??n giao ti???p trong l??nh v???c Y khoa t???i ACH, Hoa K???, v?? ???? k???t h???p v???i T???ng l??nh s??? qu??n Hoa K??? t??? ch???c th??nh c??ng nhi???u kh??a h???c v??? giao ti???p b???ng ti???ng Anh v???i b???nh nh??n.",
            title: "Founder Med Lang Fanatic",
            name: "Tr???n Quang H??ng",
            quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.",
            quoteAuthor: "Pele"
        },
        "bac-si-nguyen-dinh-cang": {
            img: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.cang_qpbtvb.jpg",
            info: [
                "Th??? khoa kh??a lu???n B??c s?? N???i tr?? chuy??n ng??nh M???t (2021)",
                "H???c b???ng to??n ph???n Lancaster Course c???a ?????i h???c Harvard (2021)",
                "Phi??n d???ch vi??n trong nhi???u h???i th???o v?? h???i ngh??? y khoa",
                "H???c b???ng H???c M??i (2017)",
            ],
            exp: [
                "Gi???ng vi??n ti???ng Anh h???p t??c v???i T???ng l??nh s??? qu??n Hoa K??? t???i TPHCM: Kh??a h???c Communication in English with Patients and Caregivers (2019 ??? nay)",
                "Gi???ng vi??n ti???ng Anh trong c??c ch????ng tr??nh th?????ng ni??n h???p t??c v???i ?????i h???c Y khoa Ph???m Ng???c Th???ch v?? khoa Y ?????i h???c Y D?????c TPHCM (2019 ??? nay)",
                "Gi???ng vi??n IELTS t???i ICOM (2016 ??? 2017)",
                "Gi???ng vi??n ti???ng Anh t???i ILA (2015 ??? 2016)",
            ],
            bio: "BS. Nguy???n ????nh Cang l?? b??c s?? chuy??n ng??nh M???t, ???? c?? kinh nghi???m gi???ng d???y Anh v??n y khoa t???i T???ng l??nh s??? qu??n Hoa K???, t???i ?????i h???c Y khoa Ph???m Ng???c Th???ch v?? t???i khoa Y ?????i h???c Y D?????c TPHCM. Anh l?? 1 trong 2 ng?????i Vi???t Nam ?????t h???c b???ng to??n ph???n Lancaster Course c???a ?????i h???c Harvard v??o n??m 2021. Anh c??ng l?? th??? khoa kh??a lu???n B??c s?? N???i tr?? v?? c?? kinh nghi???m phi??n d???ch trong nhi???u h???i th???o v?? h???i ngh??? y khoa.",
            title: "Instructor at Med Lang Fanatic",
            name: "Nguy???n ????nh Cang",
            quote: "In learning you will teach, and in teaching you will learn.",
            quoteAuthor: "Phil Collins"
        },
        "bac-si-nguyen-ngoc-quynh-tram": {
            img: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.tram_lphdre.webp",
            info: [
                "T???t nghi???p h???ng ??u t???i ?????i h???c Debrecen, Hungary v???i GPA to??n kh??a 4.67/5",
                "Nguy??n ph?? ch??? t???ch H???i sinh vi??n Vi???t Nam t???i ?????i h???c Debrecen, Hungary",
                "Phi??n d???ch vi??n trong nhi???u h???i th???o v?? h???i ngh??? y khoa",
                "H???c b???ng H???c M??i (2017)",
            ],
            exp: [
                "T??? ch???c c??c workshop K??? n??ng l??m s??ng t???i H???i sinh vi??n Vi???t Nam ?????i h???c Debrecen, Hungary v??? c??c ch??? ????? nh?? Tr??nh b??y b???nh ??n l??m s??ng b???ng ti???ng Anh, k??? n??ng kh??m l??m s??ng.",
                "Gi???ng d???y Khoa h???c c?? b???n b???ng ti???ng Anh, t???i h???i sinh vi??n Vi???t Nam ?????i h???c Debrecen, Hungary",
                "Gi???ng vi??n ti???ng Anh h???p t??c v???i T???ng l??nh s??? qu??n Hoa K??? t???i TPHCM: Kh??a h???c Communication in English with Patients and Caregivers",
            ],
            bio: "BS. Nguy???n Ng???c Qu???nh Tr??m t???ng l?? du h???c sinh t???i ??c v?? t???i Hungary. Ch??? t???t nghi???p h???ng ??u t???i ?????i h???c Debrecen Hungary v?? t???ng gi??? v??? tr?? ph?? ch??? t???ch h???i sinh vi??n Vi???t Nam. Ch??? c??ng c?? kinh nghi???m vi???t b??o v?? tr??nh h???i th???o khoa h???c khi c??n l?? sinh vi??n y. ?????nh h?????ng trong t????ng lai c???a BS Tr??m l?? l??m vi???c trong h??? th???ng NHS c???a Anh Qu???c.",
            title: "Instructor at Med Lang Fanatic",
            name: "Nguy???n Ng???c Qu???nh Tr??m",
            quote: "The more that you read, the more things you will know. The more that you learn, the more places you???ll go.",
            quoteAuthor: "Dr. Seuss"
        },
        "bac-si-tran-nguyen-thanh-huong": {
            img: "https://res.cloudinary.com/tanvo/image/upload/v1674247540/medlangfanatic/Instructors/dr.huong_ggmqir.png",
            info: [
                "B??c s??, khoa Ph???u thu???t tim tr??? em, B???nh vi???n ?????i h???c Y D?????c TP.HCM.",
                "B??c s?? th???c t???p Nhi khoa t???i ph??ng kh??m MD Kids Pediatrics, McKinney, Texas, USA. (2020)",
                "Ch???ng nh???n thi ?????u k??? thi USMLE Step 1 & Step 2 Clinical Knowledge.",
                "Sinh vi??n h???c l??m s??ng t???i B???nh vi???n Westmead, Sydney ??? Ch????ng tr??nh h???c b???ng Qu??? H???c M??i, Tr?????ng Y khoa ?????i h???c Sydney, Australia",
                "C???u Ch??? nhi???m CLB ti???ng Anh H.E.I. t???i ?????i h???c Y D?????c TPHCM",
                'Tr?????ng nh??m bi??n d???ch s??ch "The End of Alzheimer"',
            ],
            exp: [
                "Ng?????i h?????ng d???n kh??a h???c kh??m b???nh b???ng ti???ng Anh ???English communication in Medicine??? ??? ?????ng t??? ch???c b???i American Center ??? T???ng l??nh s??? qu??n M??? t???i TP.HCM v?? t??? ch???c Med Lang Fanatic.",
                "Gia s?? c?? nh??n b???ng ti???ng Anh cho sinh vi??n Y khoa v?? sinh vi??n ??i???u d?????ng t???i Vi???t Nam v?? M???.",
                "Tr?????ng nh??m t??nh nguy???n vi??n phi??n d???ch y khoa ??? D??? ??n h???p t??c trao ?????i chuy??n m??n v?? m??? tim t??? thi???n gi???a t??? ch???c phi l???i nhu???n MD1World, USA v?? B???nh vi??n Tim H?? N???i, Vi???t Nam.",
                "Ch???ng ch??? OET (Occupational English Test) - Medicine.",
                "Ch???ng ch??? IELTS 8.0.",
                "Ch???ng ch??? ????o t???o li??n t???c ??? Ph????ng ph??p gi???ng d???y v?? l?????ng gi?? l??m s??ng d???a tr??n n??ng l???c(?????i h???c Y D?????c TP.HCM)."
            ],
            // bio: "BS. Nguy???n Ng???c Qu???nh Tr??m t???ng l?? du h???c sinh t???i ??c v?? t???i Hungary. Ch??? t???t nghi???p h???ng ??u t???i ?????i h???c Debrecen Hungary v?? t???ng gi??? v??? tr?? ph?? ch??? t???ch h???i sinh vi??n Vi???t Nam. Ch??? c??ng c?? kinh nghi???m vi???t b??o v?? tr??nh h???i th???o khoa h???c khi c??n l?? sinh vi??n y. ?????nh h?????ng trong t????ng lai c???a BS Tr??m l?? l??m vi???c trong h??? th???ng NHS c???a Anh Qu???c.",
            title: "Instructor at Med Lang Fanatic",
            name: "Nguy???n Tr???n Thanh H????ng",
            quote: "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.",
            quoteAuthor: "Plato"
        }
    },
    // metaData: {
    //     mavl: {
    //         description: "Kh??a h???c MAVL h?????ng d???n b???n ph??n nh??m t??? v???ng gi??p li??n t?????ng, v?? b??i t???p t????ng t??c ??a d???ng gi??p hi???u s??u h??m ngh??a c??c t??? v???ng.",
    //         title: "Medical Academic Vocabulary List",
    //         imageUrl: "/images/mavl-thumbnail.svg",
    //         imageAlt: "Medical Academic Vocabulary List",
    //         link: "/mavl"
    //     },
    //     "medical-terminology": {
    //         description: "Medical Terminology: An essential course for healthcare professional: x??y d???ng v???ng ch???c c??n b???n thu???t ng??? y khoa ti???ng Anh sau 60 gi??? h???c ????ng l??? tr??nh.",
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
            title: "B??? t??? v???ng X-quang l???ng ng???c (Fleishner 2008)",
            link: "https://drive.google.com/file/d/1poqFtcStj9ZjTU6qflnlMDaKbHxEzukc/view?usp=sharing",
            type: "book",
            path: "?type=document&name=bo-tu-vung-x-quang-long-nguc",
            display: "download",
            image: "https://res.cloudinary.com/tanvo/image/upload/v1674049290/medlangfanatic/tu-vung-x-quang-nguc_o4njwr.jpg"
        },
        "ban-ron-lam-sao-hoc-tieng-anh": {
            title: "B???n r???n l??m sao h???c ti???ng Anh",
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
            title: "H???c c??ch h???i b???nh s??? b???ng ti???ng Anh nh?? th??? n??o?",
            link: "https://drive.google.com/file/d/1bILvlnU3yNn2kRfDDTEwlOyjoZl0GUfM/view?usp=sharing",
            type: "document",
            path: "?type=document&name=hoc-cach-hoi-benh-su-bang-tieng-anh-nhu-the-nao?",
            display: "download",
            image: "https://res.cloudinary.com/tanvo/image/upload/v1674049932/medlangfanatic/hoc-cach-hoi-benh-su-bang-tieng-anh-nhu-the-nao_l074zo.jpg"
        },
        "bo-tu-vung-ve-om-nghen": {
            title: "MLF | B??? t??? v???ng v??? ???m ngh??n",
            link: "https://drive.google.com/file/d/1bILvlnU3yNn2kRfDDTEwlOyjoZl0GUfM/view?usp=sharing",
            type: "document",
            path: "?type=document&name=bo-tu-vung-ve-om-nghen",
            display: "html",
            html: <div dangerouslySetInnerHTML={{ __html: MLF_bo_tu_vung_om_nghen }}></div>

        }
    },
    categories: {
        tips: "tips h???c ti???ng Anh Y Khoa",
        "learning.how.to.learn": "ph????ng ph??p h???c",
        "medical english": "ti???ng Anh y khoa",
        "medical vocabulary": "t??? v???ng Anh V??n Y khoa",
        jargon: "bi???t ng??? Y khoa",
        speaking: "n??i ti???ng Anh Y khoa",
        communication: "giao ti???p ti???ng Anh Y khoa",
        listening: "nghe ti???ng Anh Y khoa"
    }
}

export const slugTranslate = ({ slug, target }) => slugs[target][slug.toLowerCase()]