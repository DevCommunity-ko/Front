import React from 'react';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/common/Header';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const login = () => {
    return (
        <>
            <Header />
            <AuthTemplate>
                <LoginForm />
            </AuthTemplate>
        </>
    );
};

export default login;