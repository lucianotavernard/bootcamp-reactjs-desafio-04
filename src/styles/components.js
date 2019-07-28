import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  flex: 1;
  display: flex;
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  min-height: calc(100vh - 72px);
  margin-left: 200px;
  padding: 0 20px;

  background: linear-gradient(to bottom, #414141 0%, #181818 100%), transparent;
  background-size: 100% 250px;
  background-repeat: no-repeat;
  background-position: top;
`;
