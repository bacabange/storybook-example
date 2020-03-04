import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ children, type, ...rest }) => {
  let classType = ["btn", `btn-${type}`];

  return (
    <button className={classType.join(" ")} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "success", "danger", "warning", "info"]),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: "primary",
  disabled: false
};

export default Button;
