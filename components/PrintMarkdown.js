import PropTypes from 'prop-types';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import LinkRenderer from '@components/LinkRenderer';

const Table = props => <table>{props.children}</table>;

export default function PrintMarkdown({ markdown }) {
  return <ReactMarkdown plugins={[gfm]} renderers={{ link: LinkRenderer, table: Table }} children={markdown}/>;
}

PrintMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired
};
