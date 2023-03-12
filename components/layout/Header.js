import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate, useParams } from 'react-router-dom';
import styles from '@/styles/Header.module.css'
import { slugTranslate } from '@/lib/slugTranslate';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Form, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SearchBlock, SearchResultNav } from '../utils/Search';
import { useEffect, useRef, useState } from 'react';
import apiService from '@/lib/apiService';
import { isMobile } from 'react-device-detect';

function CourseHeader() {
    // const navigate = useNavigate()
    // const { slug } = useParams()
    const { query: { slug } } = useRouter()

    return (
        <Navbar id="header" collapseOnSelect expand="lg" className="bg-main" variant="dark">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand as="img" src="https://res.cloudinary.com/tanvo/image/upload/v1674243360/medlangfanatic/logo/logo_transparent_gnqfo9.webp" href="#home" width={96} alt="medlangfanatic logo" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Link href="/" className='text-decoration-none'>
                            <Nav.Link as="span" className='me-3'  >Trang chủ</Nav.Link>
                        </Link>
                        <Nav.Link className='me-3' href="/#course-list-session"  >Khóa học</Nav.Link>
                        <Nav.Link className='me-3' href="#course-detail-content">Chương trình học</Nav.Link>
                        <Nav.Link className='me-3' href="#instructors">Giảng viên</Nav.Link>
                        <Nav.Link className='me-3' href="#faq">FAQ</Nav.Link>
                        {slugTranslate({ target: "recruitStatus", slug }) ?
                            <Link href={`/form/${slug.toLowerCase()}`} className='text-decoration-none'>
                                <Nav.Link
                                    as={"span"}
                                    className={`${styles.signUp} ${slugTranslate({ slug, target: "signUpHover" })}`}
                                >Đăng ký ngay
                                </Nav.Link>
                            </Link> :
                            <Nav.Link
                                as={"span"}
                                className={`${styles.signUp} ${slugTranslate({ slug, target: "signUpHover" })}`}>
                                Đã đủ học viên
                            </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
// function MainHeader() {
//     const router = useRouter()
//     const currentPath = router.asPath
//     return (
//         <Navbar id="header" collapseOnSelect expand="lg" className="bg-main" variant="dark">
//             <Container>
//                 <Link href="/" passHref>
//                     <Navbar.Brand as="img" src="https://res.cloudinary.com/tanvo/image/upload/v1674243360/medlangfanatic/logo/logo_transparent_gnqfo9.webp" href="#home" width={96} />
//                 </Link>

//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="me-auto ms-4" >
//                         <Link href="/" passHref className='text-decoration-none'>
//                             <Nav.Link as="span" active={currentPath === "/"} className='me-3 text-decoration-none'>Trang chủ</Nav.Link>
//                         </Link>
//                         {/* <Nav.Link as={Link} className='me-3'>Trang chủ</Nav.Link> */}

//                         <Link href="/#course-list-session" className='text-decoration-none'>
//                             <Nav.Link as="span" active={currentPath === "/#course-list-session"} className='me-3'>Khóa học</Nav.Link>
//                         </Link>

//                         <Link className='me-3 text-decoration-none' href="/blogs" >
//                             <Nav.Link as="span" active={currentPath === "/blogs"} className='me-3'>Blogs</Nav.Link>
//                         </Link>
//                         {/* <Link className='me-3 text-decoration-none' href="/documents" >
//                             <Nav.Link as="span" active={currentPath === "/documents"} className='me-3'>Tài liệu</Nav.Link>
//                         </Link> */}
//                         {/* <Link className='me-3 text-decoration-none' href="/game" >
//                             <Nav.Link as="span" active={currentPath === "/game"} className='me-3'>Game</Nav.Link>
//                         </Link> */}
//                         {/* <Link className='sign-up' href="/register-form" >
//                             <Nav.Link as="div" active={currentPath === "/#course-list-session"} className='me-3'>Đăng ký ngay</Nav.Link>
//                         </Link> */}
//                     </Nav>
//                     <Nav>

//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

function MainHeader() {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [mobile, setMobile] = useState(false)
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        const fetchSearch = async (search) => {
            const res = await apiService.get(`/posts/search/${search}`)
            setResults(res.data.posts)
        }
        if (search) {
            fetchSearch(search)
        }

    }, [search])
    const handleDeleteSearch = () => {
        setResults([])
        setSearch("")
    }
    const router = useRouter()
    const currentPath = router.asPath
    const refAds = useRef()
    const [viewAds, setViewAds] = useState(true)
    useEffect(() => {
        const ref = refAds.current
        const observer = new IntersectionObserver((entries,) => {
            const entry = entries[0];
            console.log(entry)
            if (entry.isIntersecting) {
                setViewAds(true)
            } else {
                setViewAds(false)
            }
        })
        observer.observe(ref)
        return () => {
            observer.unobserve(ref);
        };
    }, [])
    useEffect(() => {
        setMobile(isMobile)
    }, [isMobile])
    return (
        <>
            <div ref={refAds} className={styles.ads}>
                {mobile ?
                    <p className='m-0'>Học hỏi không giới hạn kiến thức chuyên khoa Y <br />
                        Đăng ký ngay Khoá học Combo từ vựng hoàn chỉnh {" "}
                        <Link href="/courses/combo-vocabulary" className='text-decoration-none text-main'>
                            <b>Tiết kiệm tới  31%</b>
                        </Link>
                    </p>
                    :
                    <p className='m-0'>Học hỏi không giới hạn kiến thức chuyên khoa Y <br />
                        Đăng ký ngay Khoá học Combo từ vựng hoàn chỉnh {" "}
                        <Link href="/courses/combo-vocabulary" className='text-decoration-none text-main'>
                            <b>Tiết kiệm tới  31%</b>
                        </Link>
                    </p>

                }
            </div>
            <Navbar id="header" collapseOnSelect expand="lg" className={`box-shadow-card ${viewAds ? "" : "position-fixed"} bg-white w-100`} style={{ top: 0, left: 0, zIndex: 10000, transition: "top 0.5s cubic-bezier(0.42, 0, 0.58, 1)", willChange: "transform" }}>

                <Container>
                    <Link href="/" passHref>
                        <Navbar.Brand as="img" src="https://res.cloudinary.com/tanvo/image/upload/v1676544705/medlangfanatic/logo/logo-white-background_qba4wk.jpg" href="#home" width={96} />
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className={`ms-3 ms-md-5 position-relative ${styles.search}`}  >
                            <SearchBlock search={search} handleChange={handleChange} handleDeleteSearch={handleDeleteSearch} />
                            <div className='position-absolute' style={{ zIndex: "100", width: "20rem", height: "auto", top: "3rem", left: "0px" }} >
                                <SearchResultNav results={results} />
                            </div>
                        </div>
                        {/* <div className="flex-grow-1"></div> */}
                        <Nav className="ms-auto ms-4" >
                            <Link href="/" passHref className='text-decoration-none'>
                                <Nav.Link as="span" active={currentPath === "/"} className='me-3 text-decoration-none text-main'>Trang chủ</Nav.Link>
                            </Link>
                            {/* <Link href="/#course-list-session" passHref className='text-decoration-none'>
                                <Nav.Link as="span" active={currentPath === "/courses"} className='me-3 text-decoration-none text-main'>Khóa học</Nav.Link>
                            </Link> */}
                            <NavDropdown title="Khóa học" id="basic-nav-dropdown" className={styles.dropdown}>
                                <Link href="/courses?type=all" passHref className='text-decoration-none'>
                                    <NavDropdown.Item href='/courses?type=readingAndListening' className='text-main'>
                                        <p className='m-0 fw-bold'>All Courses</p>
                                        <small>Tất cả khóa học</small>
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/courses?type=readingAndListening" passHref className='text-decoration-none'>
                                    <NavDropdown.Item href='/courses?type=readingAndListening' className='text-main'>
                                        <p className='m-0 fw-bold'>Reading & Listening</p>
                                        <small>Cách đọc và nghe tài liệu Y văn</small>
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/courses?type=all" passHref className='text-decoration-none'>
                                    <NavDropdown.Item href='/courses?type=all' className='text-main'>
                                        <p className='m-0 fw-bold'>Speaking</p>
                                        <small>Trình bệnh án lâm sàng, thuyết trình</small>
                                    </NavDropdown.Item>
                                </Link>
                                <Link href="/courses" passHref className='text-decoration-none'>
                                    <NavDropdown.Item href="/courses/mavl" className='text-main'>
                                        <p className='m-0 fw-bold'>Vocabulary</p>
                                        <small>Tư duy và cách học từ hiệu quả</small>
                                    </NavDropdown.Item>
                                </Link>
                            </NavDropdown>


                            <Link className='me-3 text-decoration-none' href="/blogs" >
                                <Nav.Link as="span" active={currentPath === "/blogs"} className='me-3 text-main'>Blogs</Nav.Link>
                            </Link>
                            {/* <Link className='me-3 text-decoration-none' href="/documents" >
                            <Nav.Link as="span" active={currentPath === "/documents"} className='me-3'>Tài liệu</Nav.Link>
                        </Link> */}
                            {/* <Link className='me-3 text-decoration-none' href="/game" >
                            <Nav.Link as="span" active={currentPath === "/game"} className='me-3'>Game</Nav.Link>
                        </Link> */}
                            {/* <Link className='sign-up' href="/register-form" >
                            <Nav.Link as="div" active={currentPath === "/#course-list-session"} className='me-3'>Đăng ký ngay</Nav.Link>
                        </Link> */}
                        </Nav>
                        <Nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <div style={{ height: "100px" }}></div> */}
        </>
    );
}



export { CourseHeader, MainHeader };