import React from 'react';
import PropTypes from 'prop-types';

import { Container, LabelField, InputField, Message } from './styles';

const Input = ({ label, error, errorMessage, ...props }) => {
  return (
    <Container error={error}>
      {label && <LabelField>{label}</LabelField>}

      <InputField {...props} />

      {error && <Message>{errorMessage}</Message>}
    </Container>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  error: false,
  errorMessage: '',
};

export default Input;
