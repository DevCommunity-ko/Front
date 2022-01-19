import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { styled } from '../../lib/styles/stitches.config';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isButtonLogin, setIsButtonLogin] = useState(false);
  const user = '수민'; // Redux 작업 하시면서 변경 부탁드릴게요!

  useEffect(() => {
    // isButtonLogin 상태 체크 구문
    const pathnames = location.pathname.split('/');
    const lastPath = pathnames.pop() || pathnames.pop();
    (lastPath === 'login') ? setIsButtonLogin(false) : setIsButtonLogin(true);
    // isLoggedIn 상태 체크 구문
    /*
       여기에 Redux와 연동된 setIsLoggedIn() 구문이 필요합니다.
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
                <LoginButton isButtonLogin={isButtonLogin}>{isButtonLogin ? '로그인' : '회원가입'}</LoginButton>
              </Link>)}
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

const HelloBlock = styled('div', {
  marginLeft: '5.688rem',
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
    marginLeft: '2.438rem',
    fontSize: '$text',
  },
  '@tablet': {
    marginLeft: '2.063rem',
  },
  '@mobileLarge': {
    marginLeft: '0',
  },
});

const HeaderBlock = styled('header', {
  fontWeight: '$regular',
  position: 'fixed',
  top: '0',
  width: '100%',
  verticalAlign: 'middle',
  background: 'white',
  height: '5rem',

  '@mobileLarge': {
    height: '3.125rem',
  },
});

const Wrapper = styled('div', {
  margin: '0 9.375%',
  'display': 'flex',
  'height': '5rem',
  'alignItems': 'center',
  'justifyContent': 'space-between',

  '.right': {
    display: 'flex',
    alignItems: 'center',
  },

  '@laptop': {
    margin: '0 1.25rem',
  },

  '@mobileLarge': {
    height: '3.125rem',
  },
});

const MenuBlock = styled('div', {
  'display': 'flex',
  'alignItems': 'center',

  '& > div:not(div:last-child)': {
    marginRight: '3.75rem',
    '@tablet': {
      marginRight: '3.125rem',
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
  variants: {
    isButtonLogin: {
      true: {
        marginLeft: '9.688rem',
        '@laptop': {
          marginLeft: '6.438rem',
        },
        '@tablet': {
          marginLeft: '3.188rem',
        },
      },
    },
  },

  marginLeft: '8.563rem',
  fontWeight: '$bold',
  height: '1.875rem',
  padding: '0 0.625rem',
  borderRadius: '1rem',
  border: '0.5px solid $font',
  fontSize: '$subtitle',
  cursor: 'pointer',

  '@laptop': {
    marginLeft: '5.313rem',
  },
  '@tablet': {
    marginLeft: '2.063rem',
  },
  '@mobileLarge': {
    height: '1.438rem',
    fontSize: '$text',
    fontWeight: '$regular',
  },
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

  '@mobileLarge': {
    width: '5.625rem',
    height: '1.875rem',
  },
});

const PersonIconTemp = styled('div', {
  width: '1.875rem',
  height: '1.875rem',
  backgroundColor: '$gray',
  borderRadius: '30px',
  cursor: 'pointer',
  marginLeft: '0.625rem',

  '@mobileSmall': {
    width: '1.5rem',
    height: '1.5rem',
  },
});

// 헤더 fixed이므로 Spacer 설정함
const Spacer = styled('div', {
  height: '5rem',
  '@mobileLarge': {
    display: 'none',
  },
});
