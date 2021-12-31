import React from 'react';
import { Header, AuthTemplate } from '../../components/index';
import { ResultPage } from '../../components/auth';

const register = () => {
  return (
    <>
      <Header />
      <AuthTemplate>
          {/* 회원가입 결과에 따라 isSucceed 다르게 적용될 수 있도록 해야 */}
          <ResultPage isSucceed={true} />
      </AuthTemplate>
    </>
  );
};

export default register;