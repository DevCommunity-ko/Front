import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { styled } from '../../lib/styles/stitches.config';
import { RoundButton } from '../common';

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
          <TitleSucceed>마그넷 가입완료</TitleSucceed>
          <SubTitleSucceed>
            회원인증 &rang; 정보입력 &rang; 가입완료
          </SubTitleSucceed>
          <MessageSucceed>가입이 완료되었습니다.</MessageSucceed>
          <RoundButton onClick={onClick}>확인</RoundButton>
        </BlockSucceed>
      ) : (
        <BlockFailed>
          <h2>죄송합니다</h2>
          <MessageFailed>
            다시 <Link href="/login">로그인</Link>하시거나
            <Link href="/register">회원가입</Link>을 시도해 주시기 바랍니다.
          </MessageFailed>
        </BlockFailed>
      )}
    </>
  );
};

const BlockTemplate = styled('div', {
  width: '30rem',
  textAlign: 'center',
  color: '$font',
  margin: '0',
  padding: '0',
});

const TitleSucceed = styled('h1', {
  fontSize: '$title',
  marginBottom: '0.625rem',
});

const SubTitleSucceed = styled('h4', {
  fontWeight: '$regular',
  fontSize: '$subtitle',
});

const MessageSucceed = styled('p', {
  margin: '6.25rem 0',
  fontSize: '$title',
  fontWeight: '$regular',
});

const MessageFailed = styled('p', {
  a: {
    fontSize: '$subtitle',
    fontWeight: '$bold',
    textDecoration: 'underline',
  },
});

const BlockSucceed = styled(BlockTemplate, {});

const BlockFailed = styled(BlockTemplate, {
  paddingTop: '5.875rem',
  width: '17rem',

  '& > *': {
    fontSize: '$subtitle',
    fontWeight: '$medium',
  },
});
