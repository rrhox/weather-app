import styled from 'styled-components';

export const Body = styled.section`
  height: 46.4rem;
  display: flex;
  gap: 5rem;
  margin-top: 3rem;

  & > div:first-child {
    width: 30%;
  }

  & > div:last-child {
    width: 70%;
  }
`;
