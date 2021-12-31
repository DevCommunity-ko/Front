import React from 'react';
import Head from 'next/head';

import { Header, AuthTemplate } from '../../components/index';
import { RegisterForm } from '../../containers/auth/RegisterForm';

const register = () => {
  return (
    <>
      <Head>
        <title>MAGNET - 회원가입</title>
      </Head>
      <Header />
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </>
  );
};

export default register;
