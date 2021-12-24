import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LoginForm = () => {
  return (
    <Wrapper>
      <h2>로그인하기</h2>
      <SNSBlock>
        <p>SNS 계정으로 간편하게 시작하기</p>
        <SelectSNSItem>
          <SNSItemTemplate />
          <SNSItemTemplate />
          <SNSItemTemplate />
          <SNSItemTemplate />
        </SelectSNSItem>
        <label>
          <input type="checkbox" />
          로그인 유지
        </label>
      </SNSBlock>
      <ToRegisterBlock>
        <div>아직 마그넷 회원이 아니신가요?</div>
        <Link href="/register">회원가입</Link>
      </ToRegisterBlock>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 22.5rem;

  & > h2 {
    font-size: 1.875em;
    margin-bottom: 0 0 2.5rem 0;
    padding: 0;
  }
`;

const ToRegisterBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.25em;

  & > div {
    font-weight: 400;
  }
`;

const SNSBlock = styled.div`
  text-align: center;
  width: 100%;

  margin-bottom: 8.625rem;

  & > p {
    font-weight: 400;
    font-size: 1.25em;
    margin: 0 0 1.313rem 0;
  }

  & > label {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    color: ${palette.Gray[2]};
    font-size: 1.25em;
    & > input {
      width: 1.25em;
      height: 1.25em;
      margin-right: 0.5rem;
    }
  }
`;

const SelectSNSItem = styled.div`
  display: flex;
  justify-content: space-between;
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

export default LoginForm;
