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
});

const Title = styled('h2', {
  fontSize: '$30',
  marginBottom: '0 0 2.5rem 0',
  padding: '0',
});

const SNSSubtitle = styled('p', {
  fontSize: '$20',
  margin: '0 0 1.313rem 0',
});

const ToRegisterBlock = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  fontWeight: '$bold',
  fontSize: '$20',

  '& > div': {
    fontWeight: '$regular',
  },
});

const SNSBlock = styled('div', {
  textAlign: 'center',
  width: '100%',
  fontSize: '$20',

  marginBottom: '8.625rem',
});

const LabelKeepLoggedIn = styled('label', {
  marginTop: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  color: '$darkGray',
});

const CheckboxKeepLoggedIn = styled('input', {
  width: '1.25em',
  height: '1.25em',
  marginRight: '0.5rem',
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
});

export default LoginForm;
