export const handleChangeSlide = (n, slide, setSlide, target) => {
    if ((slide === 0 && n === 1)
        || (slide === target.length - 1 && n === -1)
        || (slide > 0 && slide < target.length - 1)) {
        setSlide(slide + n)
    }
}