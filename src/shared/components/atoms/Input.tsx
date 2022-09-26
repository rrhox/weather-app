import React, { ButtonHTMLAttributes, FC, InputHTMLAttributes, memo, useCallback, useState } from 'react';
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
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
  position: relative;
`;

type InputProps = InputHTMLAttributes<HTMLInputElement> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    handleSubmit: (data: string) => void;
  };
const Input: FC<InputProps> = memo(({ handleSubmit, ...rest }) => {
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      handleSubmit(search);
    },
    [search],
  );

  return (
    <Form>
      <InputStyle {...rest} onChange={handleChange} />
      <Button {...rest} onClick={onSubmit}>
        <Icon name="search" />
      </Button>
    </Form>
  );
});

Input.displayName = 'Input';
export { Input };
