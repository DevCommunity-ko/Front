import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

import type Stitches from '@stitches/react';

type Project= Stitches.VariantProps<typeof StyledType> ['projType'];

export type ProjItemTypes = {
  id: number,
  title: string,
  type: Project,
  isTeam: boolean,
  href: string,
  img: string,
};

type Props = {
  item: ProjItemTypes | undefined,
};

export const ProjItem = (item: Props) => {
  if (item.item === undefined) {
    return <></>;
  }
  return (
    <Wrapper role={'link'} tabIndex={0}>
      <ImageArea />
      <TextBlock>
        <ItemLeft>
          {item.item.title}
          <StyledType projType={item.item.type} />
        </ItemLeft>
        <StyledTeamType isTeam={item.item.isTeam} />
      </TextBlock>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  cursor: 'pointer',

  marginRight: rem(40),
});

const ImageArea = styled('div', {
  borderRadius: rem(4),

  width: rem(280),
  height: rem(186),
  backgroundColor: '$gray',

  marginBottom: rem(4),
});

const TextBlock = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ItemLeft = styled('div', {
  display: 'flex',
  color: 'black',
  fontWeight: '$medium',
  fontSize: '$text',
});

const StyledType = styled('div', {
  '&::after': {
    marginLeft: rem(4),
    padding: `0 ${rem(8)}`,
  
    width: 'fit-content',
    height: rem(23),

    boxSizing: 'border-box',
    borderRadius: rem(14),
    
    fontSize: '$text',
    fontWeight: '$regular',
  },

  variants: {
    projType: {
      web: {
        '&::after' : {
          border: '1px solid $blue',
          content: 'web',
          color: '$blue',
        },
      },
      ios: {
        '&::after' : {
          border: '1px solid $red',
          content: 'ios',
          color: '$red',
        },
      },
      android: {
        '&::after' : {
          border: '1px solid $darkBlue',
          content: '안드로이드',
          color: '$darkBlue',
        },
      },
      else: {
        '&::after' : {
          border: '1px solid $purple',
          content: '기타',
          color: '$purple',
        },
      },
    },
  },
});

const StyledTeamType = styled('div',{
  '&::after' : {
    fontWeight: '$regular', // DemiLight?
    fontSize: rem(14),
    content: '개인 프로젝트',
    color: '$red',
  },

  variants: {
    isTeam: {
      true: {
        '&::after' : {
          content: '팀 프로젝트',
          color: '$blue',
        },
      },
    },
  },
});
