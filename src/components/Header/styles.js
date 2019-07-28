import styled from 'styled-components';

import SearchIcon from '../../assets/images/search.svg';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 24px;
  padding: 6px 7px 6px 26px;
  border-radius: 12px;
  background: #fff url(${SearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    border: 0;
    color: #121212;
    font-size: 13px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 13px;

  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
