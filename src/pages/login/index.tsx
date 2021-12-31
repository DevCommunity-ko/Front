import React from 'react';
import Head from 'next/head';

import { Header } from '../../components/common/Header';
import { AuthTemplate } from '../../components/index';
import LoginForm from '../../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>MAGNET - 로그인</title>
      </Head>
      <Header />
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
