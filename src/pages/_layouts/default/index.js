import React from 'react';

import Header from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import Player from '../../../components/Player';

import { Container, Content } from '../../../styles/components';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Sidebar />

      <Content>
        <Header />
        {children}
      </Content>

      <Player />
    </Container>
  );
}
