import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Header = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
