import Stitches from '@stitches/react';
import { rem } from 'polished';
import React from 'react';

import { styled } from '../../../lib/styles/stitches.config';

type IssueTypes = Stitches.VariantProps<typeof Type> ['type'];

export type IssueItemTypes = {
  id: number,
  type: { key: IssueTypes, value: string },
  previewString: string,
  isSolved: boolean,
};

type Props = {
  item: IssueItemTypes | undefined,
};

export const IssueItem = ({ item }: Props) => {
  if (item === undefined) {
    return <></>;
  }

  return (
    <Wrapper role={'button'} tabIndex={0}>
      <ImgTemplate />
      <ContentWrap>
        <Type type={item.type.key}>{item.type.value}</Type>
        <Preview>{item.previewString}</Preview>
        <BlockOrientRight><IsSolved isSolved={item.isSolved}>{item.isSolved ? '해결됨' : '미해결'}</IsSolved></BlockOrientRight>
      </ContentWrap>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  width: rem(178),
  height: rem(265),
  borderRadius: rem(10),  

  cursor: 'pointer',
});

const ImgTemplate = styled('div',{
  backgroundColor: '$lightBlue',

  width: '100%',
  height: rem(134),

  borderTopLeftRadius: rem(10),
  borderTopRightRadius: rem(10),
});

const ContentWrap = styled('div', {
  backgroundColor: '$background',

  width: '100%',
  height: rem(265 - 134),

  borderBottomLeftRadius: rem(10),
  borderBottomRightRadius: rem(10),

  padding: `${rem(8)} ${rem(8)} ${rem(11)} ${rem(8)}`,
});

const Type = styled('div',{
  fontWeight: '$regular', //DemiLight
  fontSize: '$smallText',

  marginBottom: rem(4),

  variants: {
    type: {
      frontend : {
        color: '$alert',
      },
      backend : {
        color: '#3B90ED',
      },
    },
  },
});

const Preview = styled('div', {
  fontWeight: '$regular', //DemiLight
  fontSize: '$smallText',
  color: 'black',

  marginBottom: rem(16),

  width: rem(162),
  height: rem(42),

  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  wordWrap: 'break-word',
  wordBreak: 'keep-all',
  textOverflow: 'ellipsis',
  overflow: 'hidden',

  '-webkit-line-clamp': 2,
});

const BlockOrientRight = styled('div', {
  float: 'right',
  marginRight: rem(11 - 8), // TotalMargin - ParentMargin
});

const IsSolved = styled('div',{
  fontSize: '$smallText',
  fontWeight: '$regular',
  color: 'White',
    
  width: rem(55),
  height: rem(29),

  backgroundColor: '$gray',
  borderRadius: rem(14),

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  variants: {
    isSolved: {
      true: {
        backgroundColor: 'purple', // TODO: MAGNET-156 머지 후 $purple로 색상 교체하기
      },
    },
  },
});
