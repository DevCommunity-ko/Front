import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Head from 'next/head';
import Link from 'next/link';
import { Header, AuthTemplate } from '../../components/index';
import RegisterForm from '../../containers/auth/RegisterForm';

const register = () => {
  return (
    <>
      <Header />
      <AuthTemplate>
        <RegisterForm />
      </AuthTemplate>
    </>
  );
};

export default register;
