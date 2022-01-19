import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

const LoginForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  const screenChange = (event: MediaQueryListEvent) => {
    const { matches } = event;
    setIsMobile(matches);
  };

  useEffect(() => {
    const mobileWidthLarge = 640; // @mobileLarge
    setIsMobile((window.innerWidth < mobileWidthLarge) ? true : false);
    const mql = window.matchMedia('screen and (max-width: 640px)');
    mql.addEventListener('change', screenChange);
    return () => mql.removeEventListener('change', screenChange);
  }, []);

  const loginNaver = () => {
    const client_id = 'qco1iLqUirs5dpGJHK_L';
    const redirect_uri = encodeURI(
      'http://localhost:3000/login/authSocial/naver',
    );
    const state_string = Math.random().toString(36).substr(2, 11);
    const request_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&state=${state_string}&redirect_uri=${redirect_uri}`;

    window.open(
      request_url,
      'windowname',
      'width=430, height=500, location=no, status=no, scrollbars=yes',
    );
  };

  return (
    <>
      <Wrapper>
        <Title>로그인하기</Title>
        <SNSBlock>
          <SNSSubtitle>SNS 계정으로 간편하게 시작하기</SNSSubtitle>
          <SelectSNSItem>
            <SNSItemTemplateForTest onClick={loginNaver}>
              {isMobile && <><SocialIconTemp>N</SocialIconTemp>네이버 계정 로그인</>}
            </SNSItemTemplateForTest>
            <SNSItemTemplate />
            <SNSItemTemplate />
            <SNSItemTemplate />
          </SelectSNSItem>
          <MobileBlock>
            <LabelKeepLoggedIn>
              <CheckboxKeepLoggedIn type="checkbox" />
              로그인 유지
            </LabelKeepLoggedIn>
          </MobileBlock>
        </SNSBlock>
        <AbsoluteBlock>
          <ToRegisterBlock>
            <div>아직 마그넷 회원이 아니신가요?</div>
            <Link href="/register">회원가입</Link>
          </ToRegisterBlock>
        </AbsoluteBlock>
      </Wrapper>
    </>
  );
};

const SocialIconTemp = styled('div', {
  // 아이콘 받으면 아이콘으로 대체 (매직넘버 하드코딩)
  fontWeight: '600',
  fontSize: '1.875em',
  position: 'absolute',
  left: '1.875rem',
  top: '0.43rem',
});

const MobileBlock = styled('div', {
  '@mobileLarge': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const Wrapper = styled('div', {
  width: rem(360),

  '@mobileLarge': {
    textAlign: 'center',
    width: '100%',
  },
});

const Title = styled('h2', {
  fontSize: '$title',
  margin: `0 0 ${rem(40)} 0`,
  padding: '0',

  '@mobileLarge': {
    fontSize: '$subtitle',
    fontWeight: '$medium',
    margin: `0 0 ${rem(41)} 0`,
  },
});

const SNSSubtitle = styled('p', {
  fontSize: '$subtitle',
  fontWeight: '$regular',
  margin: `0 0 ${rem(21)} 0`,

  '@mobileLarge': {
    margin: `0 0 ${rem(10)} 0`,
    fontSize: '$text',
    color: '$gray',
    fontWeight: '$regular',
  },
});

const AbsoluteBlock = styled('div', {
  '@mobileLarge': {
    position: 'absolute',
    bottom: rem(56),
    left: '50%',
    transform: 'translate(-50%, 0)',
  },
});

const ToRegisterBlock = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: '$bold',
  fontSize: '$subtitle',

  '& > div': {
    fontWeight: '$regular',
  },

  '@mobileLarge': {
    fontSize: '$smallMobile',
    fontWeight: '$medium',
    width: 'max-content',

    '& > div': {
      marginRight: rem(6),
    },
  },
});

const SNSBlock = styled('div', {
  textAlign: 'center',
  width: '100%',
  fontSize: '$subtitle',

  marginBottom: rem(138),

  '@mobileLarge': {
    marginBottom: '0',
  },
});

const LabelKeepLoggedIn = styled('label', {
  marginTop: rem(40),
  display: 'flex',
  alignItems: 'center',
  color: '$darkGray',
  right: '0',

  '@mobileLarge': {
    marginTop: rem(20),
    fontSize: '$text',
  },
});

const CheckboxKeepLoggedIn = styled('input', {
  width: rem(18),
  height: rem(18),
  marginRight: rem(8),

  '@mobileLarge': {
    marginRight: rem(5),
  },
});

const SelectSNSItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@mobileLarge': {
    display: 'block',
    width: '100%',
    height: rem(40), // rem(40) * 내부 요소 개수만큼 설정. button 하면 왜 추가 영역이 생기는지 모르겠음
  },
});

// TODO : 디자인에서 리소스를 받은 후 대체될 요소입니다.
const SNSItemTemplate = styled('div', {
  backgroundColor: '$gray',
  cursor: 'pointer',

  width: rem(65),
  height: rem(65),
  borderRadius: rem(65), // make it circle

  // hover 효과는 임의 효과입니다. 디자인 확정 뒤 삭제될 수 있습니다.
  '&:hover': {
    backgroundColor: '$lightGray',
  },

  '@mobileLarge': {
    display: 'none',
  },
});

// TODO : 디자인에서 리소스를 받은 후 대체될 요소입니다.
const SNSItemTemplateForTest = styled('button', {
  backgroundColor: '#04cf5c', // 임의 색상입니다.
  cursor: 'pointer',
  border: 'none',

  width: rem(65),
  height: rem(65),
  borderRadius: rem(65), // make it circle

  // hover 효과는 임의 효과입니다. 디자인 확정 뒤 삭제될 수 있습니다.
  '&:hover': {
    backgroundColor: '#08ff6b',
  },

  '@mobileLarge': {
    position: 'relative',
    width: '100%',
    height: rem(40),
    padding: '0',
    color: 'white',
    fontSize: '$smallMobile',
    fontWeight: '$medium',
  },
});

export default LoginForm;
