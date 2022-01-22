import React, { useState } from 'react';
import Router from 'next/router';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';
import { RoundButton } from '../common';
import { RegisterFormFieldItems } from '../../lib/texts/texts';

import { TextInputBox } from './TextInputBox';

type RegFieldProps = {
  registerForm: object,
  setRegisterForm: CallableFunction,
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

  const proceedRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 내부적으로 로그인 과정은 완료되었기 때문에, 추가 작업 없이 결과 페이지로 이동합니다.
    e.preventDefault();
    void Router.push('register/result');
  };

  return (
    <>
      <TitleArea>추가 정보 입력</TitleArea>
      <Container className="Container">
        <MobileBlock>
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
        </MobileBlock>
        <Spacer />
        <RoundButton onClick={onClickRegister}>가입하기</RoundButton>
        <ButtonLater onClick={proceedRegister}>나중에 입력할게요</ButtonLater>
      </Container>
    </>
  );
};

export default RegisterField;

const TitleArea = styled('h2', {
  fontSize: '$title',
  margin: `0 0 ${rem(40)} 0`,
  paddingTop: rem(141),
  textAlign: 'left',


  '@mobileLarge': {
    fontSize: '$subtitle',
    margin: `0 0 ${rem(20)} 0`,
    fontWeight: '$medium',
    paddingTop: rem(91 + 50), // 91 + Header
  },
  '@mobileSmall': {
    fontSize: '$text',
    margin: `0 0 ${rem(40)} 0`,
    paddingTop: rem(40 + 37), // 40 + Header
  },
});

const MobileBlock = styled('div', {
  '@mobileLarge': {
    textAlign: 'left',
  },
});

const Container = styled('form', {
  boxSizing: 'border-box',
  paddingTop: rem(67 - 40), // 표시되어야 할 여백 - TitleArea(RegisterForm)의 하단 마진
});

const Spacer = styled('div', {
  height: rem(52 - 20), // 표시되어야 할 여백 - TextInputBox의 하단 마진

  '@mobileLarge': {
    height: rem(60 - 20), // 표시되어야 할 여백 - TextInputBox의 하단 마진
  },
});

const ButtonLater = styled('button', {
  margin: `${rem(60)} auto 0 auto`,
  display: 'flex',
  cursor: 'pointer',
  textDecoration: 'underline',
  border: 'none',
  background: 'transparent',
  fontSize: '$text',
  fontWeight: '$regular',

  '@mobileLarge': {
    paddingBottom: rem(40),
    margin: `${rem(39)} auto 0 auto`,
  },
  '@mobileSmall': {
    margin: `${rem(5)} auto 0 auto`,
    fontSize: '$smallMobile',
  },
});
