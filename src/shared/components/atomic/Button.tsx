import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  background: red;
  color: black;
`;
