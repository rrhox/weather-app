import React, { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { BaseContainerElement, BaseContainerElementProps } from '../../styles/BaseContainerElement';
import { Icon, IconType } from './Icon';
import { Typography } from './Typography';

const BaseButton = css`
  cursor: pointer;
`;

const ButtonContained = styled.button<BaseContainerElementProps>`
  ${BaseContainerElement}
  ${BaseButton}
  color: ${(props) => props.theme.typography.colors[100]}
`;

const ButtonText = styled.button`
  ${BaseButton}
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.typography.colors[200]};
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'text' | 'contained';
  withIcon?: IconType;
  children: string | ReactNode;
};

const Button: FC<ButtonProps> = memo(({ variant, withIcon, children, ...rest }) => {
  const theme = useTheme();
  return variant === 'text' ? (
    <ButtonText {...rest}>
      {withIcon && <Icon name={withIcon} />}
      <Typography variant="subtitle2" weight="semibold" ml={1}>
        {children}
      </Typography>
    </ButtonText>
  ) : (
    <ButtonContained height="14rem" background={theme.gradients[300]} {...rest}>
      {withIcon && <Icon name={withIcon} />}
      <Typography variant="h5" weight="semibold">
        {children}
      </Typography>
    </ButtonContained>
  );
});

Button.displayName = 'Button';
export { Button };
