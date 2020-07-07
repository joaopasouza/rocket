import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ children, variant, size, block, flat, ...props }) => {
  return (
    <Container
      variant={variant}
      size={size}
      block={block}
      flat={flat}
      {...props}
    >
      {children}
    </Container>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'danger',
    'warning',
    'olive',
    'purple',
    'navy',
    'orange',
    'marron',
  ]).isRequired,
  size: PropTypes.oneOf(['lg', 'sm', 'xs', '']),
  block: PropTypes.bool,
  flat: PropTypes.bool,
};

Button.defaultProps = {
  size: '',
  block: false,
  flat: false,
};

export default Button;
