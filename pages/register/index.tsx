import React from 'react';
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
