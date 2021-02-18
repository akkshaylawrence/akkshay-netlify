import "@styles/globals.scss";
import PropTypes from "prop-types";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

Application.defaultProps = {
  Component: null,
  pageProps: null,
};

Application.propTypes = {
  Component: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};

export default Application;
