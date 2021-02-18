import PropTypes from 'prop-types';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import LinkRenderer from '@components/LinkRenderer';

// eslint-disable-next-line react/prop-types
const Table = ({ children }) => <table>{children}</table>;

export default function PrintMarkdown({ markdown }) {
  return (
    <ReactMarkdown plugins={[gfm]} renderers={{ link: LinkRenderer, table: Table }}>
      {markdown}
    </ReactMarkdown>
  );
}

PrintMarkdown.defaultProps = {
  markdown: ''
};

PrintMarkdown.propTypes = {
  markdown: PropTypes.string,
};
