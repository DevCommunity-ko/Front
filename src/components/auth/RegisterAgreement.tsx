import React, { useState, useEffect } from 'react';
import { rem } from 'polished';

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

  const screenChange = (event: MediaQueryListEvent) => {
    const { matches } = event;
    setIsMobile(matches);
  };

  useEffect(() => {
    const mobileWidthLarge = 640; // @mobileLarge
    setIsMobile((window.innerWidth < mobileWidthLarge) ? true : false);
    const mql = window.matchMedia('screen and (max-width: 640px)');
    mql.addEventListener('change', screenChange);
    return () => mql.removeEventListener('change', screenChange);
  }, []);

  // TODO : redux 통합 이후 slice action으로 분리하기
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
      <TitleArea isShowAll={isShowAll}>가입하기</TitleArea>
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
      </FormBlock>
      <AbsoluteBlock isShowAll={isShowAll}>
        <SpacerWithErrorMsg isShowAll={isShowAll}>
          {isErrorShown && '필수 항목에 동의해주세요'}
        </SpacerWithErrorMsg>
        <RoundButton onClick={onButtonClick}>다음</RoundButton>
      </AbsoluteBlock>
    </>
  );
};

const AbsoluteBlock = styled('div', {
  variants: {
    isShowAll: {
      true: {
        // 버튼이 화면 아래에 딱 붙지 않도록 하는 여백 공간입니다. 높이는 확정된 크기입니다.
        marginBottom: rem(138),
      },
      false: {
        '@mobileSmall': {
          position: 'absolute',
          bottom: rem(30.44),
          width: '100%',
          left: '50%',
          transform: 'translate(-50%, 0)',
        },
      },
    },
  },
});


const TitleArea = styled('h2', {
  fontSize: '$title',
  margin: `0 0 ${rem(40)} 0`,
  padding: '0',

  '@mobileLarge': {
    fontSize: '$subtitle',
    margin: `0 0 ${rem(20)} 0`,
    fontWeight: '$medium',
  },
  '@mobileSmall': {
    fontSize: '$text',
  },

  variants: {
    isShowAll: {
      true: {
        paddingTop: rem(150),
      },
    },
  },
});

const SNSBlock = styled('div', {
  textAlign: 'center',
  width: '100%',
  marginBottom: rem(60),

  '@mobileLarge': {
    marginBottom: rem(29),
  },
});

const SNSSubtitle = styled('p', {
  fontSize: '$subtitle',
  fontWeight: '$regular',
  margin: `0 0 ${rem(21)} 0`,

  '@mobileLarge': {
    fontSize: '$text',
    color: '$darkGray',
    fontWeight: '$regular',
    margin: `0 0 ${rem(10)} 0`,
  },
  '@mobileSmall': {
    fontSize: '$smallMobile',
  },
});

const SelectSNSItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: `0 ${rem(60)}`,

  '@mobileLarge': {
    display: 'block',
    margin: '0',
  },
});

// TODO : 디자인에서 리소스를 받은 후 대체될 요소입니다.
const SNSItemTemporary = styled('div', {
  backgroundColor: '$gray',
  cursor: 'pointer',

  width: rem(65),
  height: rem(65),
  borderRadius: rem(50),

  // hover 효과는 임의 효과입니다. 디자인 확정 뒤 삭제될 수 있습니다.
  '&:hover': {
    backgroundColor: '$lightGray',
  },

  '@mobileLarge': {
    display: 'none',
  },
});

// TODO : 디자인에서 리소스를 받은 후 대체(삭제)될 요소입니다.
const SNSItemTemplateForTest = styled('button', {
  backgroundColor: '#04cf5c',
  cursor: 'pointer',
  border: 'none',

  width: rem(65),
  height: rem(65),
  borderRadius: rem(50),

  // hover 효과는 임의 효과입니다. 디자인 확정 뒤 삭제될 수 있습니다.
  '&:hover': {
    backgroundColor: '#08ff6b',
  },

  '@mobileLarge': {
    position: 'relative',
    width: '100%',
    height: rem(40),
    padding: '0',
    color: 'white',
    fontSize: '$text',
    fontWeight: '$medium',
  },
  '@mobileSmall': {
    height: rem(30),
    fontSize: '$smallMobile',
  },
});

// TODO : 디자인에서 리소스를 받은 후 대체(삭제)될 요소입니다.
const SocialIconTemp = styled('div', {
  fontWeight: '600',
  fontSize: '1.875em',
  position: 'absolute',
  left: rem(30),
  top: rem(4),

  '@mobileSmall': {
    left: rem(27),
    top: rem(3),
  },
});

const FormBlock = styled('form', {
  variants: {
    isShowAll: {
      true: {
        '@mobileSmall': {
          marginBottom: rem(20),
        },
      },
    },
  },
});

const SpacerWithErrorMsg = styled('div', {
  height: rem(40), // 60 - 20(CheckboxItem의 하단 여백)
  color: '$alert',
  textAlign: 'center',
  fontWeight: '$regular',
  lineHeight: rem(40),

  variants: {
    isShowAll: {
      true: {
        height: rem(42),
        '@mobileLarge': {
          lineHeight: rem(33),
          marginTop: rem(9),
          height: rem(33),
        },
        '@mobileSmall': {
          marginTop: 0,
          height: 'fit-content',
        },
      },
    },
  },

  '@mobileLarge': {
    marginTop: rem(24),
    fontSize: '$text',
  },
  '@mobileSmall': {
    fontSize: '$smallMobile',
  },
});
