import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Responsive } from './Responsive';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link href="/" passHref={true}>
            <LogoTemp>로고</LogoTemp>
          </Link>
          <div className="right">
            <Link href="/login">로그인</Link>
            <div>&nbsp;&nbsp;|&nbsp;&nbsp; </div>
            <Link href="/register">회원가입</Link>
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
  background: pink; // 헤더 영역 시각적 확인 위해 넣은 임시 속성으로, 헤더 레이아웃 구현 후 삭제될 예정입니다.
`;

const Wrapper = styled(Responsive)`
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  background: green; // 헤더 영역 시각적 확인 위해 넣은 임시 속성으로, 헤더 레이아웃 구현 후 삭제될 예정입니다.

  .right {
    display: flex;
    align-items: center;
  }
`;

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

// 헤더 fixed이므로 Spacer 설정함
const Spacer = styled.div`
  height: 5rem;
`;

export default Header;
