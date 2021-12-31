import React, { useState } from 'react';
import Router from 'next/router';

import { styled } from '../../lib/styles/stitches.config';
import { RoundButton } from '../common';
import { RegisterFormFieldItems } from '../../lib/texts/texts';

import { TextInputBox } from './TextInputBox';

type RegFieldProps = {
  registerForm: object;
  setRegisterForm: CallableFunction;
};

export const RegisterField = ({
  registerForm,
  setRegisterForm,
}: RegFieldProps) => {
  const [fieldDataList, setFieldDataList] = useState([
    '', // workfield
    '', // workSpecified
    '', // careerLength
  ]);

  const onClickRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newRegisterForm = {
      ...registerForm,
      workfield: fieldDataList[0],
      workSpecified: fieldDataList[1],
      careerLength: fieldDataList[2],
    };
    setRegisterForm(newRegisterForm);
    /*
      이 부분에서 모든 필드가 입력되었는지 확인한 후, 백엔드 서버로 전송하는 과정이 필요합니다.
      socialToken 부분이 완성되고, 백엔드 API가 완성되면 작성합니다.
    */
    void Router.push('register/result');
  };

  return (
    <Container>
      {RegisterFormFieldItems.map((item, index) => (
        <TextInputBox
          key={index}
          label={item.label}
          type={item.type}
          index={index}
          placeholder={item.placeholder}
          dropdown={item.dropdown}
          DataList={fieldDataList}
          setDataList={setFieldDataList}
        />
      ))}
      <Spacer />
      <RoundButton onClick={onClickRegister}>가입하기</RoundButton>
      <AnchorBlock onClick={() => { /* noop */}}>나중에 입력할게요</AnchorBlock>
    </Container>
  );
};

export default RegisterField;

const Container = styled('form', {
  boxSizing: 'border-box',
  paddingTop: '1.75rem',
});

const Spacer = styled('div', { height: '2rem' });

const AnchorBlock = styled('button', {
  margin: '3.75rem auto 0 auto',
  display: 'flex',
  cursor: 'pointer',
  textDecoration: 'underline',
  border: 'none',
  background: 'transparent',
  fontSize: '$16',
  fontWeight: '$regular',
});
