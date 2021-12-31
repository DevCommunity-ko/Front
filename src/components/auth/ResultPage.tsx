import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import { RoundButton } from '../common';
import palette from '../../lib/styles/palette';

type ResultProps = {
  isSucceed: boolean,
};

export const ResultPage = ({ isSucceed }: ResultProps) => {
  const onClick = () => {
    void Router.push('/');
  };
  return (
    <>
      {isSucceed ? (
        <BlockSucceed>
          <h1>마그넷 가입완료</h1>
          <h4>회원인증 &rang; 정보입력 &rang; 가입완료</h4>
          <p>가입이 완료되었습니다.</p>
          <RoundButton onClick={onClick}>확인</RoundButton>
        </BlockSucceed>
      ) : (
        <BlockFailed>asd</BlockFailed>
      )}
    </>
  );
};

const BlockTemplate = styled.div`
  width: 30rem;
  text-align: center;
  * {
    margin: 0;
    padding: 0;
  }
`;

const BlockSucceed = styled(BlockTemplate)`
  * {
      color: ${palette.Font};
  }
  & > h1 {
    font-size: 1.875em;
    margin-bottom: 0.625rem;
  }
  & > h4 {
    font-weight: 400;
    font-size: 1.25em;
  }
  & > p {
    margin: 6.25rem 0;
    font-size: 1.875em;
    font-weight: 400;
  }
`;

const BlockFailed = styled(BlockTemplate)``;
