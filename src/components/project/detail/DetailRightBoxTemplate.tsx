import { rem } from 'polished';
import React from 'react';

import { styled } from '../../../lib/styles/stitches.config';

type Props = React.PropsWithChildren<{
  title: string,
}>;

export const DetailRightBoxTemplate = ({ children, title, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <Title>{title}</Title>
      <ContentWrap>
        {children}
      </ContentWrap>
    </Wrapper>
  );
};

const Wrapper = styled('div',{
  width: rem(269),

  borderRadius: rem(20),
  padding: `${rem(24)} ${rem(16)}`,

  boxSizing: 'border-box',
  border: '1px solid $gray',
});

const Title = styled('h2', {
  fontSize: '$text',
  fontWeight: '$regular', // DemiLight
  color: '$darkGray',

  marginBottom: rem(24),
});

const ContentWrap = styled('div',{
  padding: `0 ${rem(22 - 16)}`,
});

export const TypeTitle = styled('h3',{
  fontSize: '$text',
  fontWeight: '$regular', //DemiLight?

  marginBottom: rem(8),

  variants:{
    type:{
      frontend:{
        color: '$alert',
      },
      backend:{
        color: '$lightBlue',
      },
      design:{
        color: 'purple', // TODO: MAGNET-156 머지 후 $purple로 색상 교체하기
      },
      devops:{
        color: '$darkBlue',
      },
    },
  },
});
