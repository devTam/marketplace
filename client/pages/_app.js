import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/styles.css";
import Nav from "../components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";

function _app({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position='top-center'/>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default _app;
