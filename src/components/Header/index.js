import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/19474041?v=4" alt="User" />
      Luciano Tavernard
    </User>
  </Container>
);

export default Header;
