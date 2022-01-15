import React, { useState } from 'react';

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
      <SNSBlock>
        <SNSSubtitle>SNS 계정으로 간편하게 시작하기</SNSSubtitle>
        <SelectSNSItem>
          <SNSItemTemporary />
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
});

const SNSSubtitle = styled('p', {
  fontSize: '$subtitle',
  margin: '0 0 1.313rem 0',
});

const SelectSNSItem = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 3.75rem',
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
});
