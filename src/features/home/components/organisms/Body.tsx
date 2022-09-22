import styled from 'styled-components';

export const Body = styled.section`
  height: 50%;
  display: flex;
  gap: 5rem;
  margin-top: 3rem;

  & > div:first-child {
    width: 30%;
    background-color: blue;
  }

  & > div:last-child {
    width: 70%;
    background-color: red;
  }
`;
