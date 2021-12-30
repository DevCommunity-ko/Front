import React, { useState } from 'react';
import { styled } from '../../lib/styles/stitches.config';
import { TextInputBox, TextInputBoxWithButtons } from '.';
import { RoundButton } from '..';
import { RegisterFormDetailItems } from '../../lib/texts/texts';

type DetailProps = {
  toPageNext: Function;
  registerForm: object;
  setRegisterForm: Function;
};

export const RegisterDetail = ({
  toPageNext,
  registerForm,
  setRegisterForm,
}: DetailProps) => {
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [errorStatusList, setErrorStatusList] = useState([
    false, //name
    false, //bod
    false, //email
    false, //phone
    false, //phone verification stub
  ]);
  const [detailDataList, setDetailDataList] = useState([
    '', // name
    '', // bod
    '', // email
    '', // phone
    '', // phone verification stub
    '', // gender
  ]);

  const verifyAllFields = () => {
    return new Promise<boolean>((resolve) => {
      //19xx 혹은 20xx년생의 생년월일 입력 형식
      const DateRegex =
        /^(19|20)\d{2}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])/;
      //이메일 정규식
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let ErrorList = [...errorStatusList];
      if (detailDataList[0] === '') {
        // name 필드 유효하지 않은 경우
        ErrorList[0] = true;
      } else {
        ErrorList[0] = false;
      }
      if (
        detailDataList[1] === '' ||
        detailDataList[5] === '' ||
        DateRegex.exec(detailDataList[1]) === null
      ) {
        // 생년월일 필드 && 성별 필드 유효하지 않은 경우
        ErrorList[1] = true;
      } else {
        ErrorList[1] = false;
      }
      if (
        detailDataList[2] === '' ||
        emailRegex.exec(detailDataList[2]) === null
      ) {
        // 이메일 필드 유효하지 않은 경우
        ErrorList[2] = true;
      } else {
        ErrorList[2] = false;
      }
      if (detailDataList[3] === '') {
        // 전화번호 필드 유효하지 않은 경우
        ErrorList[3] = true;
      } else {
        ErrorList[3] = false;
      }
      if (detailDataList[4] === '') {
        // 인증번호 필드 유효하지 않은 경우
        ErrorList[4] = true;
      } else {
        ErrorList[4] = false;
      }
      setErrorStatusList(ErrorList);

      resolve(
        ErrorList[0] ||
          ErrorList[1] ||
          ErrorList[2] ||
          ErrorList[3] ||
          ErrorList[4],
      );
    });
  };

  const checkAndSetFormData = (isErrorFound: boolean) => {
    if (
      // 필드에 에러가 하나도 없는 경우
      isErrorFound
    ) {
      return;
    }

    let newRegisterForm = {
      ...registerForm,
      name: detailDataList[0],
      dob: detailDataList[1],
      email: detailDataList[2],
      phone: detailDataList[3],
      gender: detailDataList[5],
    };
    setRegisterForm(newRegisterForm);
    toPageNext();
  };

  const onButtonClick = async (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    await verifyAllFields().then((isErrorFound) => {
      checkAndSetFormData(isErrorFound);
    });
  };
  return (
    <>
      <AccountConnectedTemplate>
        <SocialIconTemp>N</SocialIconTemp>
        <SocialAccountDiscription>
          네이버 계정과 연결되었습니다.
        </SocialAccountDiscription>
      </AccountConnectedTemplate>
      <FormBlock id="DetailForm">
        {RegisterFormDetailItems.map((item, index) =>
          item.buttonList ? (
            <TextInputBoxWithButtons
              key={index}
              index={index}
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
              buttonList={item.buttonList}
              errorStatus={errorStatusList[index]}
              errorMsg={item.errorMsg}
              required={item.required}
              DataList={detailDataList}
              setDataList={setDetailDataList}
            />
          ) : (
            <TextInputBox
              key={index}
              index={index}
              label={item.label}
              type={item.type}
              placeholder={item.placeholder}
              errorStatus={errorStatusList[index]}
              errorMsg={item.errorMsg}
              required={item.required}
              DataList={detailDataList}
              setDataList={setDetailDataList}
            />
          ),
        )}
        <Spacer />
        <RoundButton
          onClick={(e: React.MouseEvent<HTMLSpanElement>) => onButtonClick(e)}
        >
          다음
        </RoundButton>
      </FormBlock>
    </>
  );
};

const Spacer = styled('div', {
  height: '2.5rem',
});

const AccountConnectedTemplate = styled('div', {
  height: '3.813rem',
  width: '100%',
  borderRadius: '30px',
  display: 'flex',
  alignItems: 'center',

  padding: '0 2.438rem',

  backgroundColor: '$Gray',
  marginBottom: '2.5rem',
});

const SocialIconTemp = styled('div', {
  backgroundColor: '$Gray',
  marginRight: '1.25rem',
  fontWeight: '600',
  fontSize: '1.875em',
  color: '$Font',
});

const SocialAccountDiscription = styled('div', {
  color: '$Font',
  fontSize: '$20',
  fontWeight: '$Regular',
});

const FormBlock = styled('form', {
  marginBottom: '8.625rem',
});
