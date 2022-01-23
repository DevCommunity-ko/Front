import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonLogin, setIsButtonLogin] = useState(false);
  const user = '수민'; // TODO : Redux 연동 이후 Redux 형태에 맞게 사용할 수 있도록 변동 가능한 값으로 수정하기

  useEffect(() => {
    // isButtonLogin 상태 체크 구문
    const pathnames = location.pathname.split('/');
    const lastPath = pathnames.pop() || pathnames.pop();
    (lastPath === 'login') ? setIsButtonLogin(false) : setIsButtonLogin(true);
    // isLoggedIn 상태 체크 구문
    /*
       TODO : Redux 연동 후 setIsLoggedIn() 구문 작성하기.
    */
  }, []);

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link href="/" passHref={true}>
            <LogoTemp>로고</LogoTemp>
          </Link>
          <div className="right">
            <MenuBlock>
              {/* 게시판 리스트 현재 확정되지 않고 변동 가능성 있어 하드코딩 해 두었습니다. */}
              <MenuItem>게시판</MenuItem>
              <MenuItem>콘텐츠</MenuItem>
              <MenuItem>유저 리스트</MenuItem>
            </MenuBlock>
            {isLoggedIn ?
              (<><HelloBlock>반가워요,&nbsp;<span>{user}</span>님</HelloBlock><PersonIconTemp /></>) :
              (<Link href={isButtonLogin ? '/login' : '/register'} passHref={true}>
                <LoginButton>{isButtonLogin ? '로그인' : '회원가입'}</LoginButton>
              </Link>)}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const HelloBlock = styled('div', {
  display: 'flex',
  fontSize: '$subtitle',
  fontWeight: '$medium',
  width: 'max-content',
  '& > span': {
    textDecoration: 'underline',
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '6.875rem', // length of 5 letters in korean
  },
  '@laptop': {
    fontSize: '$text',
  },
  '@mobileSmall': {
    fontSize: '$smallMobile',
  },
});

const HeaderBlock = styled('header', {
  fontWeight: '$regular',
  position: 'fixed',
  top: '0',
  width: '100%',
  verticalAlign: 'middle',
  background: 'white',
  height: rem(80),
  zIndex: '10', // 헤더보다 위는 10 이상, 헤더 아래는 10 이하를 사용할 수 있도록 임의의 기준값으로 '10'을 주었습니다. 

  '@mobileLarge': {
    height: rem(50),
  },
  '@mobileSmall': {
    height: rem(37),
  },
});

const Wrapper = styled('div', {
  margin: '0 9.375%',
  'display': 'flex',
  'height': rem(80),
  'alignItems': 'center',
  'justifyContent': 'space-between',

  '.right': {
    display: 'flex',
    alignItems: 'center',
  },

  '@laptop': {
    margin: `0 ${rem(20)}`,
  },
  '@mobileLarge': {
    height: rem(50),
  },
  '@mobileSmall': {
    height: rem(37),
  },
});

const MenuBlock = styled('div', {
  'display': 'flex',
  'alignItems': 'center',

  '& > div': {
    marginRight: rem(60),
    '@tablet': {
      marginRight: rem(50),
    },
  },

  '@mobileLarge': {
    display: 'none',
  },
});

const MenuItem = styled('div', {
  fontSize: '$subtitle',
  cursor: 'pointer',

  '&:hover': {
    fontWeight: '$bold',
    textDecoration: 'underline',
  },

  '@laptop': {
    fontSize: '$text',
  },
});

const LoginButton = styled('div', {
  fontWeight: '$bold',
  height: rem(30),
  padding: `0 ${rem(10)}`,
  borderRadius: rem(16),
  border: '0.5px solid $font',
  fontSize: '$subtitle',
  cursor: 'pointer',

  '@mobileLarge': {
    height: rem(24),
    fontSize: '$text',
    fontWeight: '$regular',
  },
  '@mobileSmall': {
    height: rem(17),
    fontSize: '$smallMobile',
  },
});


/* 임시아이콘은 SVG 파일 받은 후 대체될 예정입니다. */
const LogoTemp = styled('div', {
  'width': rem(105),
  'height': rem(45),
  'backgroundColor': '$gray',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',

  'cursor': 'pointer',

  '&:hover': {
    backgroundColor: '$lightGray',
  },

  '@mobileLarge': {
    width: rem(90),
    height: rem(30),
  },
  '@mobileSmall': {
    width: rem(49),
    height: rem(17),
  },
});

/* 임시아이콘은 SVG 파일 받은 후 대체될 예정입니다. */
const PersonIconTemp = styled('div', {
  width: rem(30),
  height: rem(30),
  backgroundColor: '$gray',
  borderRadius: '100%',
  cursor: 'pointer',
  marginLeft: '0.625rem',

  '@mobileLarge': {
    width: rem(24),
    height: rem(24),
    borderRadius: '100%',
  },
});

// 헤더 fixed이므로 Spacer 설정함
const Spacer = styled('div', {
  height: rem(80),

  //mobile에서는 화면의 기준이 상단이 아닌 화면 중앙이므로 별도의 Spacer를 설정하지 않습니다.
  '@mobileLarge': {
    display: 'none',
  },
});
