import * as React from "react";
import PropTypes from "prop-types";

import { Button as MUIButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const TYPES_PROPS = {
  base: {
    color: "primary",
    variant: "text",
  },
  arrow: {
    endIcon: <ArrowForwardIcon />,
  },
};

const Button = ({ type, children, disabled = false, onClick, size = "small" }) => {
  const typeProps = React.useMemo(() => {
    return TYPES_PROPS[type] || {};
  }, [type]);

  return (
    <MUIButton
      {...TYPES_PROPS.base}
      {...typeProps}
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      {children}
    </MUIButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(Object.keys(TYPES_PROPS)),
  onClick: PropTypes.func,
  "data-testid": PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
export default Button;
