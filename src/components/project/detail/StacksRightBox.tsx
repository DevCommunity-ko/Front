
import { rem } from 'polished';
import React from 'react';

import { styled } from '../../../lib/styles/stitches.config';

import { DetailRightBoxTemplate, TypeTitle } from './DetailRightBoxTemplate';
import { StackItemOneLine } from './StackItemOneLine';

export type StackDataTypes = { // 임의로 작성한 데이터 포맷입니다. API 확정 이후 변경 혹의 협의가 필요하며, 변경 가능성 있습니다.
  frontend?: string[],
  backend?: string[],
  design?: string[],
  devops?: string[],
};

type Props = {
  item: StackDataTypes,
};

// API 및 데이터타입 확정 이후 수정 가능성 있습니다.
export const StacksRightBox = ({ item }: Props) => {
  return (
    <Wrapper title={'기술 스택'}>
      {item.frontend && 
        <BlockStackType>
          <TypeTitle type={'frontend'}>프론트엔드</TypeTitle>
          {item.frontend.map((fItem, index) => (
            ((index % 2) === 0) && fItem && item.frontend && (<StackItemOneLine index={index} stackListArray={item.frontend} key={index}/>)
          ))}
        </BlockStackType>}

      {item.backend &&
        <BlockStackType>
          <TypeTitle type={'backend'}>백엔드</TypeTitle>
          {item.backend.map((bItem, index) => (
            ((index % 2) === 0) && bItem && item.backend && (<StackItemOneLine index={index} stackListArray={item.backend} key={index}/>)
          ))}
        </BlockStackType>}

      {item.design &&
      <BlockStackType>
        <TypeTitle type={'design'}>디자인</TypeTitle>
        {item.design.map((dItem, index) => (
          ((index % 2) === 0) && dItem && item.design && (<StackItemOneLine index={index} stackListArray={item.design} key={index}/>)
        ))}
      </BlockStackType>}

      {item.devops &&
      <BlockStackType>
        <TypeTitle type={'devops'}>DevOps</TypeTitle>
        {item.devops.map((dvItem, index) => (
          ((index % 2) === 0) && dvItem && item.devops && (<StackItemOneLine index={index} stackListArray={item.devops} key={index}/>)
        ))}
      </BlockStackType>}
    </Wrapper>
  );
};

const Wrapper = styled(DetailRightBoxTemplate, {
  marginBottom: rem(20),

  minHeight: rem(242),
});

const BlockStackType = styled('div',{
  
});
