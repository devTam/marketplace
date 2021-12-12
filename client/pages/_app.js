import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import Nav from "../components/Nav";

function _app({Component, pageProps}) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}

export default _app
