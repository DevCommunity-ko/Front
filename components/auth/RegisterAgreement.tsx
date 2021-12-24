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

export const RegisterAgreement = ({ toPageNext, registerForm, setRegisterForm }: AgreementProps) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const [isErrorShown, setIsErrorShown] = useState(false);
  //allChecked, BasicTerm, PersonalInfo, SMS, Email
  const [checkedList, setCheckedLists] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const showAll = () => {
    setIsShowAll(true);
  };

  const handleCheckAll = () => {
    const isCheckedAll = checkedList[0];
    setCheckedLists([
      !isCheckedAll,
      !isCheckedAll,
      !isCheckedAll,
      !isCheckedAll,
      !isCheckedAll,
    ]);
  };

  const handleChecked = (index: number) => {
    let arrayCopied = [...checkedList];
    arrayCopied[index] = !checkedList[index];
    arrayCopied[0] =
      arrayCopied[1] && arrayCopied[2] && arrayCopied[3] && arrayCopied[4];
    setCheckedLists(arrayCopied);
  };

  const onButtonClick = (e) => {
    e.preventDefault();
    if (!(checkedList[1] && checkedList[2])) {
      setIsErrorShown(true);
    } else {
      let agreementsAdded = {
        ...registerForm,
        agreements: [ checkedList[1], checkedList[2], checkedList[3], checkedList[4]]
      }
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
      <FormBlock id="AgreeForm" isShowAll={isShowAll ? 1 : 0}>
        {registerFormItems.map((item, index) => (
          <CheckboxItem
            key={index}
            visibility={index ? (isShowAll ? 1 : 0) : 1}
            formItem={item}
            checkedState={checkedList[index]}
            onCheck={() => handleChecked(index)}
            handleCheckAll={handleCheckAll}
            showAll={showAll}
            isShowAll={isShowAll}
          />
        ))}
        <SpacerWithErrorMsg
          isShowAll={isShowAll ? 1 : 0}
          isErrorShown={isErrorShown ? 1 : 0}
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

const FormBlock = styled.form<{ isShowAll: number }>`
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
  isShowAll: number;
  isErrorShown: number;
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
