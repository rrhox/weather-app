import React from 'react';
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
  label: string;
  variant: 'text' | 'button';
  withIcon?: IconType;
};

export const Button: React.FC<ButtonProps> = ({ label, variant, withIcon, ...rest }) => {
  const theme = useTheme();
  return variant === 'text' ? (
    <ButtonTextStyle {...rest}>
      {withIcon && <Icon name={withIcon} />}
      <Typography variant="subtitle2" weight="semibold" ml={1}>
        {label}
      </Typography>
    </ButtonTextStyle>
  ) : (
    <ButtonStyle height="14rem" background={theme.gradients[300]} {...rest}>
      {withIcon && <Icon name={withIcon} />}
      <Typography variant="h5" weight="semibold">
        {label}
      </Typography>
    </ButtonStyle>
  );
};
