import React, { useEffect, useState } from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';
import { RegisterAgreement } from '../../components/auth';
import { RegisterField } from '../../components/auth/RegisterField';
import { rootSelector } from '../../stores';

import type { RegisterPayload } from '../../stores/auth';

export const RegisterForm = () => {
  const [pageStats, setPageStats] = useState(0);
  const authState = rootSelector(state => state.auth);

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

  useEffect(() => {
    if (authState.userData?.newMember) {
      setPageStats(1);
    }
  }, [authState.userData?.newMember]);

  const toPageNext = () => {
    setPageStats(pageStats + 1);
  };

  // 소셜 로그인 구현이 완료되면, 회원가입이 완료되어 로그인 상태인 경우, register 페이지에 진입시 redirect 될 수 있도록 구현해야 합니다.
  return (
    <RegisterBlock>
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

const RegisterBlock = styled('div', {
  width: rem(480),

  '@mobileLarge': {
    textAlign: 'center',
    width: '100%',
  },
});

export default RegisterForm;
