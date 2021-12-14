import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import CheckboxItem from './CheckboxItem';
import { RoundButton } from '../index';
import { registerFormItems } from '../../lib/texts/texts';
import useUser from '../../store/modules/authHook';

export const RegisterForm = () => {
  const [isShowAll, setIsShowAll] = useState(false);
  //allChecked, BasicTerm, PersonalInfo, SMS, Email
  const [checkedList, setCheckedLists] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const { login } = useUser();

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

  const handleChecked = async (index: number) => {
    let arrayCopied = [...checkedList];
    arrayCopied[index] = !checkedList[index];
    arrayCopied[0] =
      arrayCopied[1] && arrayCopied[2] && arrayCopied[3] && arrayCopied[4];
    setCheckedLists(arrayCopied);
  };

  const onButtonClick = async (e) => {
    /* 자세한 동작은 화면 전환 및 동작 방식 협의 후 결정 */
    console.log('obc()');
    e.preventDefault();
    if (!(checkedList[1] && checkedList[2])) {
      setIsShowAll(true);
      /* */
    } else {
      /* */
      login({ userId: 'userId', socialToken: 'SocialTokenTest'});
    }
  };

  return (
    <RegisterBlock isShowAll={isShowAll ? 1 : 0}>
      <h2>가입하기</h2>
      <SNSBlock>
        <p>SNS 계정으로 간편하게 시작하기</p>
        <SelectSNSItem>
          <SNSItemTemplate />
          <SNSItemTemplate />
          <SNSItemTemplate />
          <SNSItemTemplate />
        </SelectSNSItem>
      </SNSBlock>
      <FormBlock id="AgreeForm">
        {registerFormItems.map((item, index) => (
          <CheckboxItem
            key={index}
            visibility={index ? (isShowAll ? 1 : 0) : 1}
            formItem={item}
            checkedState={checkedList[index]}
            onCheck={() => handleChecked(index)}
            handleCheckAll={handleCheckAll}
            showAll={showAll}
          />
        ))}
        <Spacer isShowAll={isShowAll ? 1 : 0} />
        <RoundButton onClick={(e) => onButtonClick(e)}>다음</RoundButton>
      </FormBlock>
    </RegisterBlock>
  );
};

const RegisterBlock = styled.div<{ isShowAll: number }>`
  width: 30rem;

  & > h2 {
    font-size: 1.875em;
    margin-bottom: 0 0 2.5rem 0;
    padding: 0;
  }

  ${(props) =>
    props.isShowAll &&
    css`
      margin-bottom: 8.625rem;
    `}
`;

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
  justify-content: space-around;
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

const FormBlock = styled.form`
  & > p {
    margin: 0 0 1.25rem 0;
    font-weight: 400;
    word-break: keep-all;
    color: ${palette.Gray[2]};
  }
`;

const BlockAgreeAll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  & > label {
    font-size: 1.25em;
    font-weight: 700;
    display: flex;
    align-items: center;

    & > input {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.375rem;
    }
  }

  & > span {
    text-decoration: underline;
    color: ${palette.Gray[2]};
    cursor: pointer;
    font-weight: 700;

    &:hover {
      color: ${palette.Font[0]};
    }
  }
`;

const Spacer = styled.div<{ isShowAll: number }>`
  height: 2.5rem;

  ${(props) =>
    !props.isShowAll &&
    css`
      height: 3.75rem;
    `}
`;

export default RegisterForm;
