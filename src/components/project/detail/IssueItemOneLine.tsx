import { rem } from 'polished';
import React from 'react';

import { styled } from '../../../lib/styles/stitches.config';

import { IssueItem, IssueItemTypes } from './IssueItem';

type Props = {
  index: number,
  itemListArray: IssueItemTypes[],
};

export const IssueItemOneLine = ({ index, itemListArray }: Props) => {
  return (
    <Wrapper>
      <IssueItem item={itemListArray[index]} />
      <IssueItem item={itemListArray[index + 1]} />
      <IssueItem item={itemListArray[index + 2]} />
    </Wrapper>
  );
};

const Wrapper = styled('div',{
  display: 'flex',
  width: '100%',

  marginBottom: rem(16),

  '&>div:not(last-child)': {
    marginRight: rem(16),
  },
});
