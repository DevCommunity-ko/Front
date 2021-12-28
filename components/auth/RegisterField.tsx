import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { TextInputBox } from '.';
import { RoundButton } from '..';
import { RegisterFormFieldItems } from '../../lib/texts/texts';

type RegFieldProps = {
  registerForm: object;
  setRegisterForm: Function;
};

const RegisterField = ({ registerForm, setRegisterForm }: RegFieldProps) => {
  const [fieldDataList, setFieldDataList] = useState([
    '', // workfield
    '', // workSpecified
    '', // careerLength
  ]);

  const onClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    let newRegisterForm = {
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
    Router.push('register/result');
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
      <RoundButton onClick={(e) => onClick(e)}>가입하기</RoundButton>
      <AnchorBlock>
        <a onClick={onClick}>나중에 입력할게요</a>
      </AnchorBlock>
    </Container>
  );
};

export default RegisterField;

const Container = styled.form`
  box-sizing: border-box;
  padding-top: 1.75rem;
`;

const Spacer = styled.div`
  height: 2rem;
`;

const AnchorBlock = styled.div`
  margin-top: 3.75rem;
  display: flex;
  justify-content: center;

  & > a {
    cursor: pointer;
    text-decoration: underline;
  }
`;
