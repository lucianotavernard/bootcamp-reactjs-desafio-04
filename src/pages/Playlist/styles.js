import styled, { css } from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  margin-top: 30px;

  ${Spinner} {
    height: 48px;
  }

  ${props => props.load
    && css`
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
  }

  div {
    margin-left: 20px;
    color: #fff;

    span {
      font-size: 11px;
      font-weight: 300;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }

    h1 {
      margin-top: 10px;
      font-size: 48px;
    }

    p {
      margin-top: 0;
      color: #b3b3b3;
      font-size: 11px;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }

    button {
      height: 32px;
      margin-top: 10px;
      padding: 0 35px;
      border: 0;
      border-radius: 16px;
      line-height: 32px;
      color: #fff;
      background: #1db854;
      font-size: 12px;
      letter-spacing: 1.11px;
    }
  }
`;

export const SongList = styled.table.attrs({
  cellPadding: 0,
  cellSpacing: 0,
})`
  width: 100%;
  margin-top: 20px;
  text-align: left;
  color: #fff;

  thead th {
    padding: 5px 10px;
    color: #b3b3b3;
    font-size: 11px;
    font-weight: normal;
    letter-spacing: 1.11px;
    text-transform: uppercase;

    &:last-child {
      text-align: right;
    }
  }
`;

export const SongItem = styled.tr`
  td {
    padding: 0 10px;
    border-top: 1px solid #282828;
    line-height: 40px;
    font-size: 13px;
    color: ${props => (props.playing ? '#1ed760' : '#fff')};
    background: ${props => (props.selected ? '#282828' : 'transparent')};

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    }
  }

  &:hover td {
    background: #282828;
  }
`;
