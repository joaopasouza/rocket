import React from 'react';

import { Container, Menu, List } from './styles';

const Sidebar = ({ children }) => {
  return (
    <Container>
      <Menu>
        <List>{children}</List>
      </Menu>
    </Container>
  );
};

export default Sidebar;
