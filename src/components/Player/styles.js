import styled from 'styled-components';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 12px;
  background: #282828;
`;

export const Current = styled.div`
  display: flex;
  align-items: center;
  width: 220px;

  img {
    width: 48px;
    height: 48px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 12px;

    span {
      color: #fff;
      font-size: 13px;
    }

    small {
      margin-top: 5px;
      color: #b3b3b3;
      font-size: 11px;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 0 15px;
    border: 0;
    background: transparent;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    color: #b3b3b3;
    font-size: 11px;
  }
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`;
