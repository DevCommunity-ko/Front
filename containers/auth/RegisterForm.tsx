import React, { useState } from 'react';
import styled from 'styled-components';
import { RegisterAgreement, RegisterDetail } from '../../components/auth';
import RegisterField from '../../components/auth/RegisterField';
import useUser from '../../store/modules/authHook';

export const RegisterForm = () => {
  const [pageStats, setPageStats] = useState(0);
  const pageTitle = ['가입하기', '상세정보 입력', '전문분야 설정'];

  const [registerForm, setRegisterForm] = useState({
    userId: undefined,
    socialToken: undefined,
    agreements: [false, false, false, false],
    name: undefined,
    gender: undefined,
    dob: undefined,
    email: undefined,
    phone: undefined,
    workfield: undefined,
    workSpecified: undefined,
    careerLength: undefined,
  });

  const toPageNext = () => {
    setPageStats(pageStats + 1);
  };

  // 소셜 로그인 구현이 완료되면, 회원가입이 완료되어 로그인 상태인 경우, register 페이지에 진입시 redirect 될 수 있도록 구현합니다.

  return (
    <RegisterBlock>
      <h2>{pageTitle[pageStats]}</h2>
      {/* <h4>forDebug</h4>
      <p>socialToken : {registerForm.userId}</p>
      <p>
        agreements : [ {registerForm.agreements[0].toString()},{' '}
        {registerForm.agreements[1].toString()},{' '}
        {registerForm.agreements[2].toString()},{' '}
        {registerForm.agreements[3].toString()}]
      </p>
      <p>name : {registerForm.name}</p>
      <p>sex : {registerForm.gender}</p>
      <p>dob : {registerForm.dob}</p>
      <p>email : {registerForm.email}</p>
      <p>phone : {registerForm.phone}</p>
      <p>workfield : {registerForm.workfield}</p>
      <p>workSpecified : {registerForm.workSpecified}</p>
      <p>careerLength : {registerForm.careerLength}</p> */}
      {pageStats === 0 ? (
        <RegisterAgreement
          toPageNext={toPageNext}
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
        />
      ) : (
        ''
      )}
      {pageStats === 1 ? (
        <RegisterDetail
          toPageNext={toPageNext}
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
        />
      ) : (
        ''
      )}
      {pageStats === 2 ? (
        <RegisterField
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
        />
      ) : (
        ''
      )}
    </RegisterBlock>
  );
};

const RegisterBlock = styled.div`
  width: 30rem;

  & > h2 {
    font-size: 1.875em;
    margin-bottom: 0 0 2.5rem 0;
    padding: 0;
  }
`;

export default RegisterForm;
