import { Link, useResolvedPath, useMatch } from "react-router-dom";
import "./custom-link.styles.scss";

const CustomLink = ({ to, children, className, ...props }) => {
  const resolevd = useResolvedPath(to);
  const match = useMatch({ path: resolevd.pathname, end: true });

  return (
    <Link
      {...props}
      to={to}
      className={`custom-link ${match ? "active" : ""} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
