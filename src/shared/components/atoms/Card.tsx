import styled from 'styled-components';

export const Card = styled.div<{
  height: string;
  width: string;
  background: string;
}>`
  border-radius: ${(props) => props.theme.borderRadius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows[100]};
  font-family: ${(props) => props.theme.typography.fontFamily};
  padding: 2rem;
`;
