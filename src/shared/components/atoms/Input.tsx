import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  border-radius: ${(props) => props.theme.borderRadius};
  height: 14rem;
  width: ${(props) => (props?.width ? props.width : '100%')};
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
