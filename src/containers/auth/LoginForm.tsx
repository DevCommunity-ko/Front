import Link from 'next/link';
import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

const LoginForm = () => {
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
    <Wrapper>
      <Title>로그인하기</Title>
      <SNSBlock>
        <SNSSubtitle>SNS 계정으로 간편하게 시작하기</SNSSubtitle>
        <SelectSNSItem>
          <SNSItemTemplateForTest onClick={loginNaver} />
          <SNSItemTemplate />
          <SNSItemTemplate />
          <SNSItemTemplate />
        </SelectSNSItem>
        <LabelKeepLoggedIn>
          <CheckboxKeepLoggedIn type="checkbox" />
          로그인 유지
        </LabelKeepLoggedIn>
      </SNSBlock>
      <ToRegisterBlock>
        <div>아직 마그넷 회원이 아니신가요?</div>
        <Link href="/register">회원가입</Link>
      </ToRegisterBlock>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  width: '22.5rem',
  '@mobileLarge': {
    width: '23.750rem',
    paddingTop: '6.25rem',
  },
  '@mobileSmall': {
    width: '13.188rem',
    paddingTop: '0',
  },
});

const InnerWrapperMobile = styled('div', {
  '@asd': {
    textAlign: 'left',
    display: 'inline-block',
    width: '13.125rem',
  },
});

const InnerBlockMobile = styled('div', {
  '@asd': {
    textAlign: 'center',
  },
});

const Title = styled('h2', {
  fontSize: '$title',
  margin: '0 0 2.5rem 0',
  padding: '0',
  '@mobileLarge': {
    padding: '0 0 0 0.625rem',
  },
  '@mobileSmall': {
    fontSize: '$subtitle',
    fontWeight: '@medium',
    padding: '0',
    margin: '0 0 1.25rem 0',
  },
});

const SNSSubtitle = styled('p', {
  fontSize: '$subtitle',
  margin: '0 0 1.313rem 0',
  '@mobileLarge': {
    margin: '0 0 1.25rem 0',
  },
  '@mobileSmall': {
    fontSize: '$smallMobile',
    fontWeight: '$regular',
    margin: '0 0 0.625rem 0',
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

  '@mobileSmall': {
    fontSize: '$smallMobile',
    fontWeight: '$medium',
  },
});

const SNSBlock = styled('div', {
  textAlign: 'center',
  width: '100%',
  fontSize: '$subtitle',

  marginBottom: '8.625rem',

  '@mobileLarge': {
    marginBottom: '8.75rem',
  },
  '@mobileSmall': {
    marginBottom: '4.438rem',
  },
});

const LabelKeepLoggedIn = styled('label', {
  marginTop: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  color: '$darkGray',

  '@mobileLarge': {
    fontSize: '$subtitle',
    fontWeight: '$bold',
    marginTop: '1.563rem',
  },
  '@mobileSmall': {
    marginTop: '1.25rem',
    fontSize: '$text',
    fontWeight: '$medium',
  },
});

const CheckboxKeepLoggedIn = styled('input', {
  width: '1.25em',
  height: '1.25em',
  marginRight: '0.5rem',

  '@mobileLarge': {
    width: '1.125rem',
    height: '1.125rem',
  },
});

const SelectSNSItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const SNSItemTemplate = styled('div', {
  backgroundColor: '$gray',
  cursor: 'pointer',

  width: '65px',
  height: '65px',
  borderRadius: '50px',

  '&:hover': {
    backgroundColor: '$lightGray',
  },

  '@mobileLarge': {
    width: '80px',
    height: '80px',
  },

  '@mobileSmall': {
    width: '45px',
    height: '45px',
  },
});

const SNSItemTemplateForTest = styled('div', {
  backgroundColor: 'green',
  cursor: 'pointer',

  width: '65px',
  height: '65px',
  borderRadius: '50px',

  '&:hover': {
    backgroundColor: 'lightgreen',
  },

  '@mobileLarge': {
    width: '80px',
    height: '80px',
  },

  '@mobileSmall': {
    width: '45px',
    height: '45px',
  },
});

export default LoginForm;
