import React from 'react'

export const WelcomeDoc = () => {
    return (
        <div className='vh-100 '>
            <h1 className='text-main text-center mb-5'>Chào mừng bạn đến với chuyên mục<br />Tài Liệu Tiếng Anh Y Khoa chọn lọc!</h1>
            <p >Đây là nơi bạn có thể tìm kiếm các nguồn kiến thức được chắt lọc và thiết kế chỉnh chu từ đội ngũ Med Lang Fanatic.<br /><br />
                Một trong những cách học hiệu quả nhất chính là học thụ động nhai đi nhai lại, và luôn thúc đẩy bản thân mình phải nhớ lại những gì đã học một cách thật chủ động.<br /><br />
                Vậy thì còn chần chờ gì nữa, hãy bơm cho bản thân mình vài lít tự chủ, và vài kg động lực để cùng tiếp thêm kiến thức từ các tài liệu Tiếng Anh Y Khoa nào!
            </p>
            <div className='text-center overflow-hidden w-100 h-auto' >
                <img src="https://res.cloudinary.com/tanvo/image/upload/v1673988557/medlangfanatic/documentationPage-welcom_ja6fbo.png"
                    alt="welcome"
                    width="320" height="176"
                // style={{ transform: "scale(1.5)" }}
                />
            </div>
        </div>
    )
}
