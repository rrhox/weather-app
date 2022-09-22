import React, { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { BaseMargin, BaseMarginProps } from '../../styles/BaseMargin';

export const H1 = styled.h1`
  ${BaseMargin}
  font-size: 5rem;
`;

export const H2 = styled.h2`
  ${BaseMargin}
  font-size: 4.2rem;
`;

export const H3 = styled.h3`
  ${BaseMargin}
  font-size: 3.2rem;
`;

export const H4 = styled.h4`
  ${BaseMargin}
  font-size: 3rem;
`;

export const H5 = styled.h5`
  ${BaseMargin}
  font-size: 2.8rem;
`;

export const H6 = styled.h6`
  ${BaseMargin}
  font-size: 2.6rem;
`;

export const Subtitle1 = styled.span`
  ${BaseMargin}
  font-size: 2.2rem;
`;

export const Subtitle2 = styled.span`
  ${BaseMargin}
  font-size: 2rem;
`;

export const Body1 = styled.p`
  ${BaseMargin}
  font-size: 1.5rem;
`;

export const Body2 = styled.p`
  ${BaseMargin}
  font-size: 1.2rem;
`;

export type TypographyProps = BaseMarginProps & {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
  weight: keyof DefaultTheme['typography']['weight'];
  // size?: number;
  inline?: boolean;
  children: ReactNode | string | number;
};
const Typography: React.FC<TypographyProps> = React.memo(({ variant, weight, inline, mt, mb, mr, ml, children }) => {
  const theme = useTheme();
  const Component = React.useMemo(() => {
    switch (variant) {
      case 'h1':
        return H1;
      case 'h2':
        return H2;
      case 'h3':
        return H3;
      case 'h4':
        return H4;
      case 'h5':
        return H5;
      case 'h6':
        return H6;
      case 'subtitle1':
        return Subtitle1;
      case 'subtitle2':
        return Subtitle2;
      case 'body1':
        return Body1;
      case 'body2':
        return Body2;

      default:
        return Body1;
    }
  }, [variant]);

  return (
    <Component
      style={{
        display: inline ? 'inline-block' : 'block',
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.weight[weight],
      }}
      mt={mt}
      mb={mb}
      mr={mr}
      ml={ml}>
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';
export { Typography };
