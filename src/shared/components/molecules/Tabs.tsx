import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { BaseContainerElementProps, BaseContainerElement } from '../../styles/BaseContainerElement';
import { Typography } from '../atoms/Typography';

export const WeekWeatherStyle = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const InnerStyle = styled.div<BaseContainerElementProps & { index: number }>`
  ${BaseContainerElement};
  border-top-left-radius: ${(props) => (props.index === 1 ? 0 : props.theme.borderRadius)};
  position: absolute;
  bottom: 0;
  padding: 3rem;
`;

export const TabStyle = styled.div`
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  position: absolute;
  top: 0;
  background: ${(props) => props.theme.colors.white};
  height: 10rem;
  width: 70%;
  display: flex;
  box-shadow: ${(props) => props.theme.shadows[100]};
`;

export const TabItem = styled.div<{ isActive: boolean }>`
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => (props.isActive ? props.theme.colors.blue[200] : props.theme.colors.white)};
  height: 7.6rem;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabContainer = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export type WeekWeatherProps = {
  title: string;
};

export const Tabs: React.FC<WeekWeatherProps> = ({ title }) => {
  const theme = useTheme();
  const [toggle, setToggle] = React.useState<number>(1);

  const toggleTab = (index: number) => {
    setToggle(index);
  };

  return (
    <WeekWeatherStyle>
      <TabStyle>
        <TabItem isActive={toggle === 1} onClick={() => toggleTab(1)}>
          <Typography variant="h5" weight="semibold">
            This week
          </Typography>
        </TabItem>
        <TabItem isActive={toggle === 2} onClick={() => toggleTab(2)}>
          <Typography variant="h5" weight="semibold">
            This month
          </Typography>
        </TabItem>
      </TabStyle>
      <InnerStyle index={toggle} background={theme.gradients[600]} height="38.8rem">
        <TabContainer isActive={toggle === 1}>
          <Typography variant="h5" weight="semibold">
            AAAAA
          </Typography>
        </TabContainer>
        <TabContainer isActive={toggle === 2}>
          <Typography variant="h5" weight="semibold">
            BBBB
          </Typography>
        </TabContainer>
      </InnerStyle>
    </WeekWeatherStyle>
  );
};
