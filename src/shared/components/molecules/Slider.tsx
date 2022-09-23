import React, { FC, memo, ReactNode, useCallback, useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Circle = styled.div<{ isActive: boolean }>`
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & span {
    display: inline-block;
    height: ${(props) => (props.isActive ? '1rem' : '0.6rem')};
    width: ${(props) => (props.isActive ? '1rem' : '0.6rem')};
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.white};
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  padding: 0.5rem;
`;

const Body = styled.div`
  height: 90%;
`;

const InnerBody = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  height: 90%;
`;

type SliderProps = {
  children: ReactNode[];
};
const Slider: FC<SliderProps> = memo(({ children }) => {
  const [toggle, setToggle] = useState<number>(1);

  const toggleTab = useCallback(
    (index: number) => () => {
      setToggle(index);
    },
    [toggle],
  );

  return (
    <SliderContainer>
      <Body>
        {children.map((child, index: number) => (
          <InnerBody key={index} isActive={toggle === index + 1}>
            {child}
          </InnerBody>
        ))}
      </Body>
      <Footer>
        {children.map((_child, index: number) => (
          <Circle key={index} isActive={toggle === index + 1} onClick={toggleTab(index + 1)}>
            <span />
          </Circle>
        ))}
      </Footer>
    </SliderContainer>
  );
});

Slider.displayName = 'Slider';
export { Slider };
