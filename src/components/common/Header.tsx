import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import palette from '../../lib/styles/palette';

import { Responsive } from './Responsive';

export const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link href="/" passHref={true}>
            <LogoTemp>로고</LogoTemp>
          </Link>
          <div className="right">
            <MenuBlock>
              <MenuItem>게시판</MenuItem>
              <MenuItem>콘텐츠</MenuItem>
              <MenuItem>유저 리스트</MenuItem>
            </MenuBlock>
            <Link href="/login" passHref={true}><LoginButton>로그인</LoginButton></Link>
            <PersonIconTemp />
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  vertical-align: middle;
  background: white;
`;

const Wrapper = styled(Responsive)`
  display: flex;
  height: 5rem;
  align-items: center; 
  justify-content: space-between;

  .right {
    display: flex;
    align-items: center;
  }
`;

const MenuBlock = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5.875rem;

  @media (max-width: 1280px) {
    margin-right: 4.75rem;
  }

  & > div:not(div:last-child) {
    margin-right: 3.75rem;
  }

  &:hover > div:not(div:hover){
    color: ${palette.Gray[2]};
  }
`;

const MenuItem = styled.div`
  font-size: 1.25em;
  cursor: pointer;
`;

const LoginButton = styled.div`
  height: 1.875rem;
  padding: 0 0.625rem;
  border-radius: 1rem;
  border: 0.5px solid ${palette.Font[0]};
  font-size: 1.25em;
  cursor: pointer;
  margin-right: 0.625rem;
`;

/* 임시아이콘은 SVG 파일 받은 후 대체될 예정입니다. */

const LogoTemp = styled.div`
  width: 6.563rem;
  height: 2.813rem;
  background-color: ${palette.Gray[1]};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: ${palette.Gray[0]};
  }
`;

const PersonIconTemp = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  background-color: ${palette.Gray[1]};
  border-radius: 30px;
  cursor: pointer;
`;

// 헤더 fixed이므로 Spacer 설정함
const Spacer = styled.div`
  height: 5rem;
`;
