import { rem } from 'polished';
import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

export const SearchBox = () => {
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    // TODO : 백엔드에 새 쿼리를 송신해 리스트를 새로고침시킬 수 있는 구문을 추가해야 합니다.
  };
  
  return (
    <Wrapper onSubmit={onSubmit}>
      <SearchIcon />
      <StyledInput placeholder='입력하세요'/>
    </Wrapper>
  );
};

const Wrapper = styled('form',{
  display: 'flex',
  alignItems: 'center',

  border: '1px solid #E5E0EB',
  borderRadius: rem(22),
  paddingLeft: rem(15),

  height: rem(45),
  width: rem(378),
});

// TODO : 검색 아이콘 에셋을 받은 뒤 교체되어야 합니다.
const SearchIcon = styled('div', {
  width: rem(24),
  height: rem(24),

  backgroundColor: '$gray',

  marginRight: rem(10),
});

const StyledInput = styled('input', {
  height: rem(21),
  width: rem(320),
  border: 'none',
  outline: 'none',

  '&::placeholder': {
    fontFamily: 'Noto Sans KR',
    fontSize: rem(14),
    fontWeight: '$regular', //DemiLight?
    color: '#ABA7AF',
  },
});
