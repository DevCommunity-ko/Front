import { rem } from 'polished';
import React from 'react';

import { styled } from '../../../lib/styles/stitches.config';

type Props = {
  index: number,
  stackListArray: string[],
};

export const StackItemOneLine = ({ index, stackListArray }: Props) => {
  return (
    <Wrapper>
      {stackListArray[index] && <StackItem>{stackListArray[index]}</StackItem>}
      {stackListArray[index + 1] && <StackItem>{stackListArray[index + 1]}</StackItem>}
    </Wrapper>
  );
};

const Wrapper = styled('div',{
  display: 'flex',
  width: '100%',
   
  marginBottom: rem(12), // TODO : 임의 간격입니다. 디자인 담당자와 협의 후 재조정되어야 합니다.

  '& > div:not(:last-child)' : {
    marginRight: rem(24),
  },
});

const StackItem = styled('div',{
  width: rem(68),
  height: rem(29),

  borderRadius: rem(14),
  backgroundColor: '#F5F3F7',

  fontSize: '$smallText',
  fontWeight: '$regular', // DemiLight?
  color: '#1A141F',

  boxSizing: 'border-box',
  padding: `${rem(4)} ${rem(8)}`,
});
