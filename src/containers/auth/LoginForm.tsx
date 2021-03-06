import React, { useEffect, useState } from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';
import { getNaverAuthUrl } from '../../lib/api/auth';
import { rootSelector } from '../../stores';

const LoginForm = () => {
  const [isMobile, setIsMobile] = useState(false);

  rootSelector((state) => console.log(state.auth.userData));

  const screenChange = (event: MediaQueryListEvent) => {
    const { matches } = event;
    setIsMobile(matches);
  };

  const onClickNaverLogin = () => {
    window.location.href = getNaverAuthUrl();
  };

  useEffect(() => {
    const mobileLargeWidth = 640; // @mobileLarge
    setIsMobile(window.innerWidth < mobileLargeWidth);
    const mql = window.matchMedia(`screen and (max-width: ${mobileLargeWidth}px)`);
    mql.addEventListener('change', screenChange);
    return () => mql.removeEventListener('change', screenChange);
  }, []);

  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <SNSBlock>
        <SNSSubtitle>SNS 계정으로 간편하게 시작하기</SNSSubtitle>
        <SelectSNSItem>
          <SNSItemTemplateForTest onClick={onClickNaverLogin}>
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
    </Wrapper>
  );
};

// TODO : 디자인에서 리소스를 받은 후 대체(삭제)될 요소입니다.
const SocialIconTemp = styled('div', {
  fontWeight: '600',
  fontSize: '1.875em',
  position: 'absolute',
  left: rem(30),
  top: rem(4),

  '@mobileSmall': {
    left: rem(27),
    top: rem(3),
  },
});

const MobileBlock = styled('div', {
  '@mobileLarge': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: rem(360),
  minHeight: '100%',

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
  '@mobileSmall': {
    fontSize: '$text',
    margin: `0 0 ${rem(20)} 0`,
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
  '@mobileSmall': {
    fontSize: '$smallMobile',
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
  '@mobileSmall': {
    marginTop: rem(11),
    fontSize: '$smallMobile',
  },
});

const CheckboxKeepLoggedIn = styled('input', {
  width: rem(18),
  height: rem(18),
  marginRight: rem(8),

  '@mobileLarge': {
    marginRight: rem(5),
  },
  '@mobileSmall': {
    width: rem(15),
    height: rem(15),
    marginRight: rem(7.5),
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
  borderRadius: '100%',

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
  borderRadius: '100%',

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
    fontSize: '$text',
    fontWeight: '$medium',
  },
  '@mobileSmall': {
    height: rem(30),
    fontSize: '$smallMobile',
  },
});

export default LoginForm;
