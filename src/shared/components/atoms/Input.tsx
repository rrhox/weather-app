import React, { ButtonHTMLAttributes, FC, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';

const InputStyle = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  border-radius: ${(props) => props.theme.borderRadius};
  height: 14rem;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadows[100]};
  font-size: 2.8rem;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.weight.semibold};
  padding-left: 4rem;
  border: none;
  color: ${(props) => props.theme.typography.colors[200]};
  position: relative;

  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.grey[400]};
  }

  &::before {
    content: '';
    background: red;
    position: absolute;
    height: 5rem;
    width: 5rem;
    right: 0;
    top: 0;
  }
`;

const Button = styled.button`
  display: inline-block;
  border-radius: ${(props) => props.theme.borderRadius};
  height: 100%;
  background: ${(props) => props.theme.gradients[300]};
  width: 5.6rem;
  border-radius: 2.5rem;
  position: absolute;
  right: 0;
  top: 0;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

type InputProps = InputHTMLAttributes<HTMLInputElement> & ButtonHTMLAttributes<HTMLButtonElement>;
const Input: FC<InputProps> = memo(({ ...rest }) => {
  return (
    <Container>
      <InputStyle {...rest} />
      <Button {...rest}>
        <Icon name="search" />
      </Button>
    </Container>
  );
});

Input.displayName = 'Input';
export { Input };
