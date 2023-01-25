import { useEffect } from "react";

export const useFilterCssRoot = ({ main, mainDark, contrast, slug, contrastLight }) => {
    useEffect(() => {
        var r = document.querySelector(':root');
        r.style.setProperty('--main', main);
        r.style.setProperty('--primary', main);
        r.style.setProperty('--main-dark', mainDark);
        r.style.setProperty('--contrast', contrast);
        r.style.setProperty('--contrast-light', contrastLight);


        return () => {
            r.style.setProperty('--main', "#011c7e");
            r.style.setProperty('--primary', "#011c7e");
            r.style.setProperty('--main-dark', "#131653");
            r.style.setProperty('--contrast', "#05feb1");
            r.style.setProperty('--contrast-light', "#05feb12e");
        }
    }, [slug, contrast, main, mainDark, contrastLight])
}
