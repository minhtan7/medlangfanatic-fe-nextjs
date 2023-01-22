import { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
};

const useScriptFbShare = () => {
    useEffect(() => {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            console.log(js)
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        console.log("here")
    });
}

export { useScript, useScriptFbShare };