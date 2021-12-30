import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { styled } from '../../lib/styles/stitches.config';
import { RoundButton } from '..';

type ResultProps = {
  isSucceed: boolean;
};

export const ResultPage = ({ isSucceed }: ResultProps) => {
  const onClick = () => {
    Router.push('/');
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
        <BlockFailed>
          <h2>죄송합니다</h2>
          <p>
            다시 <Link href="/login">로그인</Link>하시거나{' '}
            <Link href="/register">회원가입</Link>을 시도해 주시기 바랍니다.
          </p>
        </BlockFailed>
      )}
    </>
  );
};

const BlockTemplate = styled('div', {
  width: '30rem',
  textAlign: 'center',
  color: '$Font',
  margin: '0',
  padding: '0',
});

const BlockSucceed = styled(BlockTemplate, {
  '& > h1': {
    fontSize: '$30',
    marginBottom: '0.625rem',
  },
  '& > h4': {
    fontWeight: '$Regular',
    fontSize: '$20',
  },
  '& > p': {
    margin: '6.25rem 0',
    fontSize: '$30',
    fontWeight: '$Regular',
  },
});

const BlockFailed = styled(BlockTemplate, {
  paddingTop: '5.875rem',
  width: '17rem',
  height: '100vh',
  '& > *': {
    fontSize: '$20',
    fontWeight: '$Medium',
  },
  'a': {
    fontSize: '1em',
    fontWeight: '$Bold',
    textDecoration: 'underline'
  }
});
