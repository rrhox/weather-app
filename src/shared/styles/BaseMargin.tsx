import { css } from 'styled-components';

export type BaseMarginProps = {
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
};
export const BaseMargin = css<BaseMarginProps>`
  margin-top ${(props) => props?.mt ?? 0}rem;
  margin-bottom ${(props) => props?.mb ?? 0}rem;
  margin-right ${(props) => props?.mr ?? 0}rem;
  margin-left ${(props) => props?.ml ?? 0}rem;
`;
