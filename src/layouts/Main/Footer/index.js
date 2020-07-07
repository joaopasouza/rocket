import React from 'react';

import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <div className="pull-right hidden-xs">
        <b>Version</b> 1.0.0
      </div>
      <strong>
        Copyright &copy; 2020.{' '}
        <a
          href="https://github.com/joaopasouza"
          target="_blank"
          rel="noopener noreferrer"
        >
          @joaopasouza
        </a>
        .
      </strong>{' '}
      All rights reserved.
    </Container>
  );
};

export default Footer;
