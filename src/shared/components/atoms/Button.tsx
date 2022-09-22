import React, { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';
import { BaseContainerElement, BaseContainerElementProps } from '../../styles/BaseContainerElement';
import { Icon, IconType } from './Icon';
import { Typography } from './Typography';

export const ButtonStyle = styled.button<BaseContainerElementProps>`
  ${BaseContainerElement}
`;

export const ButtonTextStyle = styled.button`
  display: flex;
  align-items: center;
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'text' | 'contained';
  withIcon?: IconType;
  children: string | ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ variant, withIcon, children, ...rest }) => {
  const theme = useTheme();
  return variant === 'text' ? (
    <ButtonTextStyle {...rest}>
      {withIcon && <Icon name={withIcon} />}
      <Typography variant="subtitle2" weight="semibold" ml={1}>
        {children}
      </Typography>
    </ButtonTextStyle>
  ) : (
    <ButtonStyle height="14rem" background={theme.gradients[300]} {...rest}>
      {withIcon && <Icon name={withIcon} />}
      <Typography variant="h5" weight="semibold">
        {children}
      </Typography>
    </ButtonStyle>
  );
};
