import React from 'react';

import styled from 'styled-components';
import { Main } from '../components/templates/Main';
import { Sidebar } from '../components/templates/Sidebar';

const Container = styled.div`
  display: block;
  @media screen and (min-width: ${(props) => props.theme.breakpoint.lg}px) {
    width: 100%;
    display: flex;
  }
`;

export const Home = () => {
  return (
    <Container>
      <Main />
      <Sidebar />
    </Container>
  );
};
