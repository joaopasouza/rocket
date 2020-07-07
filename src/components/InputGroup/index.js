import React from 'react';

import { Container, LabelField, InputField, Message } from './styles';

function InputGroup({ children, label, name, error, errorMessage, ...props }) {
  return (
    <Container error={error}>
      {label && <LabelField htmlFor={name}>{label}</LabelField>}

      <div className="input-group">
        <InputField name={name} {...props} />

        <span className="input-group-btn">{children}</span>
      </div>

      {error && <Message>{errorMessage}</Message>}
    </Container>
  );
}

export default InputGroup;
