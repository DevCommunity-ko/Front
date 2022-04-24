import React, { useState } from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';
import { registerFormItems } from '../../lib/texts/texts';
import { RoundButton } from '../common';

import { CheckboxItem } from './CheckboxItem';

import type { RegisterPayload } from '../../stores/auth';

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

  return (
    <>
      <TitleArea>가입하기</TitleArea>
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
  color: '$crimson',
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
