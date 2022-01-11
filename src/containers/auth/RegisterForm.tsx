import React, { useState } from 'react';

import { styled } from '../../lib/styles/stitches.config';
import { RegisterAgreement } from '../../components/auth';
import { RegisterField } from '../../components/auth/RegisterField';

import type { RegisterPayload } from '../../store/modules/auth';

export const RegisterForm = () => {
  const [pageStats, setPageStats] = useState(0);
  const pageTitle = ['가입하기', '추가 정보 입력'];

  const [registerForm, setRegisterForm] = useState<RegisterPayload>({
    userId: '',
    socialToken: '',
    agreements: [false, false, false, false],
    name: '',
    gender: '',
    dob: new Date(),
    email: '',
    phone: '',
    workfield: '',
    workSpecified: '',
    careerLength: '',
  });

  const toPageNext = () => {
    setPageStats(pageStats + 1);
  };

  // 소셜 로그인 구현이 완료되면, 회원가입이 완료되어 로그인 상태인 경우, register 페이지에 진입시 redirect 될 수 있도록 구현해야 합니다.
  return (
    <RegisterBlock>
      <TitleArea toLeft={pageStats !== 0}>{pageTitle[pageStats]}</TitleArea>
      {pageStats === 0 && (
        <RegisterAgreement
          toPageNext={toPageNext}
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
        />
      )}
      {pageStats === 1 && (
        <RegisterField
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
        />
      )}
    </RegisterBlock>
  );
};

const TitleArea = styled('h2', {
  fontSize: '$title',
  margin: '0 0 2.5rem 0',
  padding: '0',

  variants: {
    toLeft: {
      true: {
        '@mobileLarge': {
          textAlign: 'left',
        },
      },
    },
  },

  '@mobileLarge': {
    fontSize: '$subtitle',
    margin: '0 0 1.25rem 0',
    fontWeight: '$medium',
  },
});

const RegisterBlock = styled('div', {
  width: '30rem',

  '@mobileLarge': {
    height: '100vh',
    width: '100%',
    paddingTop: '9.375rem',
    textAlign: 'center',
  },
});

export default RegisterForm;
