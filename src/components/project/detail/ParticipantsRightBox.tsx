import { rem } from 'polished';
import React from 'react';

import { styled } from '../../../lib/styles/stitches.config';

import { DetailRightBoxTemplate, TypeTitle } from './DetailRightBoxTemplate';
import { ParticipantItemOneLine, ParticipantItemType } from './ParticipantItemOneLine';



export type ParticipantsDataTypes = { // 임의로 작성한 데이터 포맷입니다. API 확정 이후 변경 혹의 협의가 필요하며, 변경 가능성 있습니다.
  frontend?: ParticipantItemType[],
  backend?: ParticipantItemType[],
  design?: ParticipantItemType[],
  devops?: ParticipantItemType[],
};

type Props = {
  item: ParticipantsDataTypes,
};

// API 및 데이터타입 확정 이후 수정 가능성 있습니다.
export const ParticipantsRightBox = ({ item }: Props) => {
  return (
    <Wrapper title={'담당자'}>
      {item.frontend && <BlockParticipantsType>
        <TypeTitle type={'frontend'}>프론트엔드</TypeTitle>
        {item.frontend.map((fItem, index) => (
          ((index % 3 === 0) && fItem && item.frontend && <ParticipantItemOneLine index={index} participantListArray={item.frontend} key={index}/>)
        ))}
      </BlockParticipantsType>}

      {item.backend && <BlockParticipantsType>
        <TypeTitle type={'backend'}>백엔드</TypeTitle>
        {item.backend.map((bItem, index) => (
          ((index % 3 === 0) && bItem && item.backend && <ParticipantItemOneLine index={index} participantListArray={item.backend} key={index}/>)
        ))}
      </BlockParticipantsType>}

      {item.design && <BlockParticipantsType>
        <TypeTitle type={'design'}>디자인</TypeTitle>
        {item.design.map((dItem, index) => (
          ((index % 3 === 0) && dItem && item.design && <ParticipantItemOneLine index={index} participantListArray={item.design} key={index}/>)
        ))}
      </BlockParticipantsType>}

      {item.devops && <BlockParticipantsType>
        <TypeTitle type={'devops'}>DevOps</TypeTitle>
        {item.devops.map((dvItem, index) => (
          ((index % 3 === 0) && dvItem && item.devops && <ParticipantItemOneLine index={index} participantListArray={item.devops} key={index}/>)
        ))}
      </BlockParticipantsType>}
    </Wrapper>
  );
};

const Wrapper = styled(DetailRightBoxTemplate, {
  minHeight: rem(320),
});

const BlockParticipantsType = styled('div',{
  
});
