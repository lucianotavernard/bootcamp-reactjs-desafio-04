import styled from 'styled-components';

import { Spinner } from '../Loading/styles';

export const Container = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  height: calc(100vh - 72px);
  width: 200px;
  color: #b3b3b3;
  background: #121212;

  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 11px;
      line-height: 26px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    ${Spinner} {
      height: 15px;
      margin-left: 5px;
    }
  }
`;

export const NewPlaylist = styled.button`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  border: 0;
  border-top: 1px solid #282828;
  color: #b3b3b3;
  background: transparent;
  font-size: 13px;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;
