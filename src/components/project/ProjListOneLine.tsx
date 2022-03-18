import { rem } from 'polished';
import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

import { ProjItem, ProjItemTypes } from './ProjItem';

type ProjListProps = {
  index: number,
  projListArray: ProjItemTypes[],
};

export const ProjListOneLine = ({ index, projListArray }: ProjListProps) => {
  return (
    <Wrapper>
      <ProjItem item={projListArray[index]} />
      <ProjItem item={projListArray[index + 1]} />
      <ProjItem item={projListArray[index + 2]} />
      <ProjItem item={projListArray[index + 3]} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',

  marginBottom: rem(56),
});
