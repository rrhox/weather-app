import React from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { BaseContainerElementProps, BaseContainerElement } from '../../styles/BaseContainerElement';
import { BaseMargin, BaseMarginProps } from '../../styles/BaseMargin';
import { Icon } from '../atoms/Icon';
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

export const SliderContainer = styled.div`
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

const FooterSlider = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  padding: 0.5rem;
`;
const BodySlider = styled.div`
  height: 90%;
`;

const CardDay = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  height: 100%;
  width: 30%;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadows[100]};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const AAAA = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const SliderCard: React.FC<{ day: string }> = ({ day }) => {
  return (
    <CardDay>
      <Typography variant="subtitle1" weight="semibold">
        {day}
      </Typography>
      <Typography variant="h2" weight="semibold">
        18°
      </Typography>
      <div>
        <Icon name="sunny" />
      </div>
    </CardDay>
  );
};

export const Slider: React.FC<any> = () => {
  const theme = useTheme();
  const [toggle, setToggle] = React.useState<number>(1);

  const toggleTab = (index: number) => {
    setToggle(index);
  };

  return (
    <SliderContainer>
      <BodySlider>
        <AAAA isActive={toggle === 1}>
          <SliderCard day="Lun" />
          <SliderCard day="Mar" />
          <SliderCard day="Mer" />
        </AAAA>
        <AAAA isActive={toggle === 2}>
          <SliderCard day="Gio" />
          <SliderCard day="Ven" />
          <SliderCard day="Sab" />
        </AAAA>
        <AAAA isActive={toggle === 3}>
          <SliderCard day="Dom" />
        </AAAA>
      </BodySlider>
      <FooterSlider>
        <Circle isActive={toggle === 1} onClick={() => toggleTab(1)}>
          <span />
        </Circle>

        <Circle isActive={toggle === 2} onClick={() => toggleTab(2)}>
          <span />
        </Circle>

        <Circle isActive={toggle === 3} onClick={() => toggleTab(3)}>
          <span />
        </Circle>
      </FooterSlider>
    </SliderContainer>
  );
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
          <Slider />
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
