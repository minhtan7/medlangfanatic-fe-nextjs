import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate, useParams } from 'react-router-dom';
import styles from '@/styles/Header.module.css'
import { slugTranslate } from '@/lib/slugTranslate';
import Link from 'next/link';
import { useRouter } from 'next/router';

function CourseHeader() {
    // const navigate = useNavigate()
    // const { slug } = useParams()
    const { query: { slug } } = useRouter()

    return (
        <Navbar id="header" collapseOnSelect expand="lg" className="bg-main" variant="dark">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand as="img" src="https://res.cloudinary.com/tanvo/image/upload/v1674243360/medlangfanatic/logo/logo_transparent_gnqfo9.webp" href="#home" width={96} />
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
                            <Link href={`/form/${slug.toLowerCase()}`}>
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
function MainHeader() {
    const router = useRouter()
    const currentPath = router.asPath
    return (
        <Navbar id="header" collapseOnSelect expand="lg" className="bg-main" variant="dark">
            <Container>
                <Link href="/" passHref>
                    <Navbar.Brand as="img" src="https://res.cloudinary.com/tanvo/image/upload/v1674243360/medlangfanatic/logo/logo_transparent_gnqfo9.webp" href="#home" width={96} />
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Link href="/" passHref className='text-decoration-none'>
                            <Nav.Link as="span" active={currentPath === "/"} className='me-3 text-decoration-none'>Trang chủ</Nav.Link>
                        </Link>
                        {/* <Nav.Link as={Link} className='me-3'>Trang chủ</Nav.Link> */}

                        <Link href="/#course-list-session" className='text-decoration-none'>
                            <Nav.Link as="span" active={currentPath === "/#course-list-session"} className='me-3'>Khóa học</Nav.Link>
                        </Link>

                        <Link className='me-3 text-decoration-none' href="/blogs" >
                            <Nav.Link as="span" active={currentPath === "/blogs"} className='me-3'>Blogs</Nav.Link>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { CourseHeader, MainHeader };