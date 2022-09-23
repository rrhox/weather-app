import React from 'react';
import styled from 'styled-components';
import { BaseContainerElement, BaseContainerElementProps } from '../../../../shared/styles/BaseContainerElement';
import { Typography } from '../../../../shared/components/atoms/Typography';
import { useTheme } from 'styled-components';
import { Icon } from '../../../../shared/components/atoms/Icon';

export const WeatherCardStyle = styled.div<BaseContainerElementProps>`
  ${BaseContainerElement};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  color: ${(props) => props.theme.typography.colors[100]};
`;

export type WeatherCardProps = {
  title: string;
};

export const WeatherCard: React.FC<WeatherCardProps> = ({ title }) => {
  const theme = useTheme();
  return (
    <WeatherCardStyle height="14rem" background={theme.gradients[100]}>
      <div>
        <Typography variant="h6" weight="semibold">
          {title}
        </Typography>
        <Typography variant="body1" weight="medium">
          Friday 18,
        </Typography>
        <Typography variant="body1" weight="medium">
          september
        </Typography>
        <Typography variant="body2" weight="light">
          2:38 PM
        </Typography>
      </div>
      <div>
        <Icon name="sunny" />
      </div>
      <div>
        <Typography variant="h1" weight="bold">
          {'18°'}
        </Typography>
      </div>
    </WeatherCardStyle>
  );
};
