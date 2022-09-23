import React, { FC, memo, ReactNode, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import { useTheme } from 'styled-components';
import { BaseContainerElementProps, BaseContainerElement } from '../../styles/BaseContainerElement';

import { Typography } from '../atoms/Typography';

const TabsContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Body = styled.div<BaseContainerElementProps & { index: number }>`
  ${BaseContainerElement};
  border-top-left-radius: ${(props) => (props.index === 1 ? 0 : props.theme.borderRadius)};
  position: absolute;
  bottom: 0;
  padding: 3rem;
`;

const TabList = styled.div`
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

const TabItem = styled.div<{ isActive: boolean }>`
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => (props.isActive ? props.theme.colors.blue[200] : props.theme.colors.white)};
  color: ${(props) => (props.isActive ? props.theme.typography.colors[100] : props.theme.typography.colors[200])};
  height: 7.6rem;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabContainer = styled.div<{ isActive: boolean }>`
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  color: ${(props) => (props.isActive ? props.theme.typography.colors[100] : props.theme.typography.colors[200])};
  align-items: center;
  justify-content: center;
  height: 100%;
`;

type TabDataProps = {
  tabLabel: string;
  content: ReactNode;
};

type TabsProps = {
  data: [TabDataProps, TabDataProps];
};
const Tabs: FC<TabsProps> = memo(({ data }) => {
  const theme = useTheme();
  const [toggle, setToggle] = useState<number>(1);

  const dataMemo = useMemo(() => {
    return data;
  }, []);

  const toggleTab = useCallback(
    (index: number) => () => {
      setToggle(index);
    },
    [toggle],
  );

  return (
    <TabsContainer>
      <TabList>
        {dataMemo.map((dt, index: number) => (
          <TabItem key={index} isActive={toggle === index + 1} onClick={toggleTab(index + 1)}>
            <Typography variant="h5" weight="semibold">
              {dt.tabLabel}
            </Typography>
          </TabItem>
        ))}
      </TabList>
      <Body index={toggle} background={theme.gradients[600]} height="38.8rem">
        {dataMemo.map((dt, index: number) => (
          <TabContainer key={index} isActive={toggle === index + 1}>
            {dt.content}
          </TabContainer>
        ))}
      </Body>
    </TabsContainer>
  );
});

Tabs.displayName = 'Tabs';
export { Tabs };
