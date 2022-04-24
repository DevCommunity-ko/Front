import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

import { ProjItem, ProjItemTypes } from './ProjItem';

type Props = {
  list: ProjItemTypes[],
};

export const ProjListContainer = (list: Props) => {
  return (
    <Wrapper>
      {list.list.map((item, index) => (
        <ProjItem item={item} key={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  rowGap: rem(56),
});
