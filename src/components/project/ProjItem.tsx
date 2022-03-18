import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

export type ProjItemTypes = {
  id: number,
  title: string,
  type: string,
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
    <Wrapper>
      <ImageArea>
        {item.item.id}
      </ImageArea>
      <TextBlock>
        <ItemLeft>
          {item.item.title}{item.item.type}
        </ItemLeft>
        {item.item.isTeam ? '팀 프로젝트' : '개인 프로젝트'}
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
});

const TextBlock = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const ItemLeft = styled('div', {

});
