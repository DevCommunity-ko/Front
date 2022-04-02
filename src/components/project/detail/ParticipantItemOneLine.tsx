import { rem } from 'polished';
import React from 'react';

import { styled } from '../../../lib/styles/stitches.config';

export type ParticipantItemType = {
  name: string,
  image: string,
};

type Props = {
  index: number,
  participantListArray: ParticipantItemType[],
};

export const ParticipantItemOneLine = ({ index, participantListArray }: Props) => {
  return (
    <Wrapper>
      {participantListArray[index] && <ParticipantItem><TmpIcon /><Name>{participantListArray[index].name}</Name></ParticipantItem>}
      {participantListArray[index + 1] && <ParticipantItem><TmpIcon /><Name>{participantListArray[index + 1].name}</Name></ParticipantItem>}
      {participantListArray[index + 2] && <ParticipantItem><TmpIcon /><Name>{participantListArray[index + 2].name}</Name></ParticipantItem>}
    </Wrapper>
  );
};

const Wrapper = styled('div',{
  display: 'flex',
  width: '100%',

  marginBottom: rem(12), // TODO : 임의 간격입니다. 디자인 담당자와 협의 후 재조정되어야 합니다.

  '& > div:not(:last-child)': {
    marginRight: rem(24),
  },
});

const ParticipantItem = styled('div',{
  width: rem(59),
  height: rem(68),

  textAlign: 'center',
});

const TmpIcon = styled('div',{
  display: 'inline-block',

  width: rem(40),
  height: rem(40),

  backgroundColor: '#C4C4C4',
  borderRadius: '100%',

  marginBottom: rem(4),
});

const Name = styled('div',{

});
