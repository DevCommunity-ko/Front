import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { CheckboxItem } from '.';
import { registerFormItems } from '../../lib/texts/texts';
import { RoundButton } from '..';

type AgreementProps = {
  toPageNext: Function;
  registerForm: object;
  setRegisterForm: Function;
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

  const showAll = () => {
    setIsShowAll(true);
  };

  const handleCheckAll = () => {
    setCheckedLists([
      !isCheckedAll,
      !isCheckedAll,
      !isCheckedAll,
      !isCheckedAll,
    ]);
    setIsCheckedAll(!isCheckedAll);
  };

  const handleChecked = (index: number) => {
    let arrayCopied = [...checkedList];
    arrayCopied[index] = !checkedList[index];
    setIsCheckedAll(arrayCopied.every(Boolean));
    setCheckedLists(arrayCopied);
  };

  const onButtonClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!(checkedList[0] && checkedList[1])) {
      setIsErrorShown(true);
    } else {
      let agreementsAdded = {
        ...registerForm,
        agreements: checkedList,
      };
      setRegisterForm(agreementsAdded);
      toPageNext();
    }
  };

  return (
    <>
      <SNSBlock>
        <p>SNS 계정으로 간편하게 시작하기</p>
        <SelectSNSItem>
          <SNSItemTemplate />
          <SNSItemTemplate />
          <SNSItemTemplate />
          <SNSItemTemplate />
        </SelectSNSItem>
      </SNSBlock>
      <FormBlock id="AgreeForm" isShowAll={isShowAll}>
        {registerFormItems.map((item, index) => (
          <CheckboxItem
            key={index}
            visibility={index ? isShowAll : true}
            formItem={item}
            checkedState={index == 0 ? isCheckedAll : checkedList[index - 1]}
            onCheck={() => handleChecked(index - 1)}
            handleCheckAll={handleCheckAll}
            showAll={showAll}
            isShowAll={isShowAll}
          />
        ))}
        <SpacerWithErrorMsg
          isShowAll={isShowAll}
          isErrorShown={isErrorShown}
        >
          필수 항목에 동의해주세요
        </SpacerWithErrorMsg>
        <RoundButton onClick={(e) => onButtonClick(e)}>다음</RoundButton>
      </FormBlock>
    </>
  );
};

const SNSBlock = styled.div`
  text-align: center;
  width: 100%;

  margin-bottom: 3.75rem;

  & > p {
    font-size: 1.25em;
    margin: 0 0 1.313rem 0;
  }
`;

const SelectSNSItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3.75rem;
`;

const SNSItemTemplate = styled.div`
  background-color: ${palette.Gray[1]};
  cursor: pointer;

  width: 65px;
  height: 65px;
  border-radius: 50px;

  &:hover {
    background-color: ${palette.Gray[0]};
  }
`;

const FormBlock = styled.form<{ isShowAll: boolean }>`
  & > p {
    margin: 0 0 1.25rem 0;
    font-weight: 400;
    word-break: keep-all;
    color: ${palette.Gray[2]};
  }

  ${(props) =>
    props.isShowAll &&
    css`
      margin-bottom: 8.625rem;
    `}
`;

type spacerProps = {
  isShowAll: boolean;
  isErrorShown: boolean;
};

const SpacerWithErrorMsg = styled.div<spacerProps>`
  height: 2.5rem;
  color: transparent;
  text-align: center;

  ${(props) =>
    !props.isShowAll &&
    css`
      height: 3.75rem;
    `}

  ${(props) =>
    props.isErrorShown &&
    css`
      color: ${palette.Alert[0]};
    `}
`;
