import Link from "next/link";
import PropTypes from "prop-types";

export default function LinkRenderer({ children, href }) {
  return href.startsWith("/") || href === "" ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

LinkRenderer.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};
