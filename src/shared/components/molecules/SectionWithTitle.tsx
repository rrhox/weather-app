import React, { FC, memo, ReactNode } from 'react';
import styled from 'styled-components';
import { Typography } from '../atoms/Typography';

const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.typography.colors[200]};
`;
type SectionWithTitleProps = {
  title: string;
  children: ReactNode;
};
const SectionWithTitle: FC<SectionWithTitleProps> = memo(({ title, children }) => {
  return (
    <Container>
      <Typography variant="h5" weight="semibold" mb={2}>
        {title}
      </Typography>
      {children}
    </Container>
  );
});

SectionWithTitle.displayName = 'SectionWithTitle';
export { SectionWithTitle };
