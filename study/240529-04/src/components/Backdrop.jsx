import PropTypes from "prop-types";
import "./custom.css";

export const Backdrop = ({ children }) => (
  <div className="backdrop">{children}</div>
);

Backdrop.propTypes = {
  children: PropTypes.element,
};
