import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 110px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 48px;

  ${Spinner} {
    height: 24px;
    margin-left: 10px;
  }
`;

export const List = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-left: 20px;
  text-decoration: none;

  img {
    height: 250px;
    transition: opacity 0.2s;
  }

  strong {
    margin-top: 10px;
    color: #fff;
    font-size: 13px;
  }

  p {
    margin-top: 5px;
    line-height: 22px;
    color: #b3b3b3;
    font-size: 13px;
  }

  &:hover img {
    opacity: 0.4;
  }

  &:first-child {
    margin: 0;
  }
`;
