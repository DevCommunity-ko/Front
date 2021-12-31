import React from 'react';
import Link from 'next/link';

import { styled } from '../../lib/styles/stitches.config';

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
            <Link href="/login" passHref={true}>
              <LoginButton>로그인</LoginButton>
            </Link>
            <PersonIconTemp />
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const HeaderBlock = styled('header', {
  position: 'fixed',
  width: '100%',
  verticalAlign: 'middle',
  background: 'white',
});

const Wrapper = styled(Responsive, {
  'display': 'flex',
  'height': '5rem',
  'alignItems': 'center',
  'justifyContent': 'space-between',

  '.right': {
    display: 'flex',
    alignItems: 'center',
  },
});

const MenuBlock = styled('div', {
  'display': 'flex',
  'alignItems': 'center',
  'marginRight': '5.875rem',

  '& > div:not(div:last-child)': {
    marginRight: '3.75rem',
  },

  '&:hover > div:not(div:hover)': {
    color: '$darkGray',
  },
});

const MenuItem = styled('div', {
  fontSize: '$20',
  cursor: 'pointer',
});

const LoginButton = styled('div', {
  height: '1.875rem',
  padding: '0 0.625rem',
  borderRadius: '1rem',
  border: '0.5px solid $font',
  fontSize: '$20',
  cursor: 'pointer',
  marginRight: '0.625rem',
});

/* 임시아이콘은 SVG 파일 받은 후 대체될 예정입니다. */

const LogoTemp = styled('div', {
  'width': '6.563rem',
  'height': '2.813rem',
  'backgroundColor': '$gray',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',

  'cursor': 'pointer',

  '&:hover': {
    backgroundColor: '$lightGray',
  },
});

const PersonIconTemp = styled('div', {
  width: '1.875rem',
  height: '1.875rem',
  backgroundColor: '$gray',
  borderRadius: '30px',
  cursor: 'pointer',
});

// 헤더 fixed이므로 Spacer 설정함
const Spacer = styled('div', {
  height: '5rem',
});
