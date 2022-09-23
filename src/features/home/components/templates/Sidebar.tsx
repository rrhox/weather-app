import styled from 'styled-components';

export const Sidebar = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-left: 5rem;

  @media (max-width: 1080px) {
    width: 100%;
    margin-left: 0;
  }
`;
