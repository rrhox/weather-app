import { css } from 'styled-components';

export type BaseContainerElementProps = {
  height?: string;
  width?: string;
  background: string;
};
export const BaseContainerElement = css<BaseContainerElementProps>`
  border-radius: ${(props) => props.theme.borderRadius};
  height: ${(props) => (props?.height ? props.height : '100%')};
  width: ${(props) => (props?.width ? props.width : '100%')};
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.theme.shadows[100]};
`;
