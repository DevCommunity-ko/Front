import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '../../components/common/Header';
import { AuthTemplate } from '../../components/index';
import LoginForm from '../../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Header />
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </>
  );
};

export default LoginPage;
