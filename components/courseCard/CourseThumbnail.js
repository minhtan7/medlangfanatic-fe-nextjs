const { Card, Button } = require("react-bootstrap")

export const CourseThumbnailVertical = ({ course }) => {
    return (
        <Card id={course.idEl} className='box-shadow-card'>
            < Card.Img variant="top" src={course.image} style={{ borderRadius: 0 }} />
            <Card.Body className='text-center'>
                <Card.Title className='fw-bold ' dangerouslySetInnerHTML={{ __html: course.title }} />
                <Card.Text className=''>
                    {course.content}
                </Card.Text>
                <div
                // className='d-md-flex'
                >
                    {/* <Button className="mb-2 mb-md-0 btn-primary-contrast btn-sign-up-contrast me-2"
                        onClick={() => navigate("/register-form/mavl-trial")} variant="primary">
                        <small>Học thử</small>
                    </Button> */}
                    <a href={course.path} target="_blank" rel="noreferrer">
                        <Button variant="primary"
                            className={`mb-2 ${course.btnClass}`} style={{ width: "10rem" }}><small>Tìm hiểu thêm</small>
                        </Button>
                    </a>
                    {course.recruit &&
                        <a href={course.path} target="_blank" rel="noreferrer">
                            <Button variant="primary"
                                className={`recruit-btn ${course.btnClass}`} style={{ width: "11rem" }}>
                                <small>Đang mở đăng ký</small>
                                <span></span>
                            </Button>
                        </a>}
                </div>
            </Card.Body>
        </Card>
    )
}