import React, { useState, useEffect } from 'react';

import { styled } from '../../lib/styles/stitches.config';
import { registerFormItems } from '../../lib/texts/texts';
import { RegisterPayload } from '../../store/modules/auth';
import { RoundButton } from '../common';

import { CheckboxItem } from './CheckboxItem';

type AgreementProps = {
  toPageNext: CallableFunction,
  registerForm: RegisterPayload,
  setRegisterForm: CallableFunction,
};

export const RegisterAgreement = ({
  toPageNext,
  registerForm,
  setRegisterForm,
}: AgreementProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isShowAll, setIsShowAll] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  // BasicTerm, PersonalInfo, SMS, Email
  const [checkedList, setCheckedLists] = useState([false, false, false, false]);

  const onClickShowMore = () => {
    setIsShowAll(true);
  };

  const handleCheckAll = () => {
    setCheckedLists((prev) => prev.map(() => !isCheckedAll));
    setIsCheckedAll(!isCheckedAll);
  };

  const handleChecked = (index: number) => {
    const arrayCopied = [...checkedList];
    arrayCopied[index] = !checkedList[index];
    setIsCheckedAll(arrayCopied.every(Boolean));
    setCheckedLists(arrayCopied);
  };

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!(checkedList[0] && checkedList[1])) {
      setIsErrorShown(true);
      return;
    }
    const agreementsAdded = {
      ...registerForm,
      agreements: checkedList,
    };
    setRegisterForm(agreementsAdded);
    toPageNext();
  };

  const screenChange = (event: { matches: boolean }) => {
    const matches: boolean = event.matches;
    setIsMobile(matches);
  };

  useEffect(() => {
    setIsMobile((window.innerWidth < 640) ? true : false);
    const mql = window.matchMedia('screen and (max-width: 640px)');
    mql.addEventListener('change', screenChange);
    return () => mql.removeEventListener('change', screenChange);
  }, []);

  // api/auth쪽으로 분리하는게 나을까요??
  const loginNaver = () => {
    const client_id = 'qco1iLqUirs5dpGJHK_L';
    const redirect_uri = encodeURI(
      'http://localhost:3000/login/authSocial/naver',
    );
    const state_string = Math.random().toString(36).substr(2, 11);
    const request_url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&state=${state_string}&redirect_uri=${redirect_uri}`;

    window.open(
      request_url,
      'windowname',
      'width=430, height=500, location=no, status=no, scrollbars=yes',
    );
  };

  return (
    <>
      <SNSBlock>
        <SNSSubtitle>SNS 계정으로 간편하게 시작하기</SNSSubtitle>
        <SelectSNSItem>
          <SNSItemTemplateForTest onClick={loginNaver}>
            {isMobile && <><SocialIconTemp>N</SocialIconTemp>네이버 계정으로 가입하기</>}
          </SNSItemTemplateForTest>
          <SNSItemTemporary />
          <SNSItemTemporary />
          <SNSItemTemporary />
        </SelectSNSItem>
      </SNSBlock>
      <FormBlock id="AgreeForm" isShowAll={isShowAll}>
        {registerFormItems.map((item, index) => (
          <CheckboxItem
            key={index}
            visibility={index ? isShowAll : true}
            formItem={item}
            checkedState={index === 0 ? isCheckedAll : checkedList[index - 1]}
            onChange={() => handleChecked(index - 1)}
            handleCheckAll={handleCheckAll}
            onClickShowMore={onClickShowMore}
            isShowAll={isShowAll}
          />
        ))}
        <SpacerWithErrorMsg isShowAll={isShowAll}>
          {isErrorShown && '필수 항목에 동의해주세요'}
        </SpacerWithErrorMsg>
        <RoundButton onClick={onButtonClick}>다음</RoundButton>
      </FormBlock>
    </>
  );
};

const SNSBlock = styled('div', {
  textAlign: 'center',
  width: '100%',
  marginBottom: '3.75rem',

  '@mobileLarge': {
    marginBottom: '1.813rem',
  },
});

const SNSSubtitle = styled('p', {
  fontSize: '$subtitle',
  margin: '0 0 1.313rem 0',

  '@mobileLarge': {
    fontSize: '$text',
    color: '$darkGray',
    fontWeight: '$regular',
    margin: '0 0 0.688rem 0',
  },
});

const SelectSNSItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 3.75rem',

  '@mobileLarge': {
    display: 'block',
    margin: '0',
  },
});

const SNSItemTemporary = styled('div', {
  backgroundColor: '$gray',
  cursor: 'pointer',

  width: '65px',
  height: '65px',
  borderRadius: '50px',

  '&:hover': {
    backgroundColor: '$lightGray',
  },

  '@mobileLarge': {
    display: 'none',
  },
});

const SNSItemTemplateForTest = styled('button', {
  backgroundColor: '#04cf5c',
  cursor: 'pointer',
  border: 'none',

  width: '65px',
  height: '65px',
  borderRadius: '50px',

  '&:hover': {
    backgroundColor: '#08ff6b',
  },

  '@mobileLarge': {
    position: 'relative',
    width: '100%',
    height: '2.5rem',
    padding: '0',
    color: 'white',
    fontSize: '$smallMobile',
    fontWeight: '$medium',
  },
});

const SocialIconTemp = styled('div', {
  // 아이콘 받으면 아이콘으로 대체
  fontWeight: '600',
  fontSize: '1.875em',
  position: 'absolute',
  left: '1.875rem',
  top: '0.43rem',
});

const FormBlock = styled('form', {
  variants: {
    isShowAll: {
      true: {
        marginBottom: '8.625rem',
      },
    },
  },
});

const SpacerWithErrorMsg = styled('div', {
  height: '2.5rem',
  color: '$alert',
  textAlign: 'center',
  variants: {
    isShowAll: {
      true: {
        height: '3.75rem',
      },
    },
  },

  '@mobileLarge': {
    marginTop: '1.5rem',
    fontSize: '$text',
    fontWeight: '$regular',
  },
});
