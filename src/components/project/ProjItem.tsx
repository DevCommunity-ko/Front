import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

import type Stitches from '@stitches/react';

type Project = Stitches.VariantProps<typeof StyledType>['projType'];

export type ProjItemTypes = {
  id: number,
  title: string,
  type: Project,
  isTeam: boolean,
  img: string,
};

type Props = {
  item: ProjItemTypes | undefined,
};

export const ProjItem = (item: Props) => {
  if (item.item === undefined) {
    return null;
  }

  const handleSrcError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // TODO: 대체 이미지에 대한 논의 필요
    e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/8/89/HD_transparent_picture.png';
  };

  return (
    // REMINDER : 현재 item.item.img가 임시값 'img'로 지정되어 있어 404 에러 발생함. 
    <Wrapper tabIndex={0} href={`detail/${item.item.id}`}>
      <ImageArea src={item.item.img} onError={handleSrcError} />
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

const Wrapper = styled('a', {
  cursor: 'pointer',

  marginRight: rem(40),
});

const ImageArea = styled('img', {
  display: 'block',
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
        '&::after': {
          border: '1px solid $blue',
          content: 'web',
          color: '$blue',
        },
      },
      ios: {
        '&::after': {
          border: '1px solid $crimson',
          content: 'ios',
          color: '$crimson',
        },
      },
      android: {
        '&::after': {
          border: '1px solid $darkBlue',
          content: '안드로이드',
          color: '$darkBlue',
        },
      },
      else: {
        '&::after': {
          border: '1px solid $purple',
          content: '기타',
          color: '$purple',
        },
      },
    },
  },
});

const StyledTeamType = styled('div', {
  '&::after': {
    fontWeight: '$regular', // DemiLight?
    fontSize: rem(14),
    content: '개인 프로젝트',
    color: '$crimson',
  },

  variants: {
    isTeam: {
      true: {
        '&::after': {
          content: '팀 프로젝트',
          color: '$blue',
        },
      },
    },
  },
});
