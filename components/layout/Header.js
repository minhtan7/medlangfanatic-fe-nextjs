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

    return (
        <Navbar id="header" collapseOnSelect expand="lg" className="bg-main" variant="dark">
            <Container>
                <Navbar.Brand as="img" onClick={() => navigate("/")} src="https://res.cloudinary.com/tanvo/image/upload/v1674243360/medlangfanatic/logo/logo_transparent_gnqfo9.webp" href="#home" width={96} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link className='me-3' onClick={() => navigate("/")} >Trang chủ</Nav.Link>
                        <Nav.Link className='me-3' href="/#course-list-session"  >Khóa học</Nav.Link>
                        <Nav.Link className='me-3' href="#course-detail-content">Chương trình học</Nav.Link>
                        <Nav.Link className='me-3' href="#instructors">Giảng viên</Nav.Link>
                        <Nav.Link className='me-3' href="#faq">FAQ</Nav.Link>
                        <Nav.Link
                        // className={`${styles.signUp} ${slugTranslate({ slug, target: "signUpHover" })}`}
                        // onClick={() => navigate(`/register-form/${slug.toLowerCase()}`)} 
                        >Đăng ký ngay</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
function MainHeader() {
    const router = useRouter()
    const currentPath = router.pathname
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
                        <Link href="/" passHref><Nav.Link as="div" active={currentPath === "/"} className='me-3'>Trang chủ</Nav.Link></Link>
                        {/* <Nav.Link as={Link} className='me-3'>Trang chủ</Nav.Link> */}

                        <Link href="/#course-list-session"><Nav.Link as="div" active={currentPath === "/#course-list-session"} className='me-3'>Khóa học</Nav.Link></Link>

                        {/* <Nav.Link className='me-3' onClick={() => navigate("/blogs")} >Blogs</Nav.Link> */}
                        {/* <Nav.Link className='me-3' onClick={() => navigate("/documentation")} >Tài liệu</Nav.Link> */}
                        {/* <Nav.Link className='me-3' onClick={() => navigate("/game")} >Game</Nav.Link> */}
                        {/* <Nav.Link className='sign-up' onClick={() => navigate("/register-form")} >Đăng ký ngay</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export { CourseHeader, MainHeader };