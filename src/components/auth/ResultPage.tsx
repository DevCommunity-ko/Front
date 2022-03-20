import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { rem } from 'polished';

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
      {false ? (
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
            다시 <Link href="/login">로그인</Link>하시거나&nbsp;
            <Link href="/register">회원가입</Link>을<br /> 시도해 주시기 바랍니다.
          </MessageFailed>
        </BlockFailed>
      )}
    </>
  );
};

const BlockTemplate = styled('div', {
  display: 'flex',
  minHeight: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  width: rem(480),
  textAlign: 'center',
  color: '$font',
  margin: '0',
  padding: '0',
});

const TitleSucceed = styled('h1', {
  fontSize: '$title',
  marginBottom: rem(10),

  '@mobileLarge': {
    fontSize: '$subtitle',
    fontWeight: '$medium',
    marginBottom: rem(11),
  },
  '@mobileSmall': {
    fontSize: '$text',
    marginBottom: rem(4),
  },
});

const SubTitleSucceed = styled('h4', {
  fontWeight: '$regular',
  fontSize: '$subtitle',
  margin: 0,

  '@mobileLarge': {
    fontSize: '$text',
  },
  '@mobileSmall': {
    fontSize: '$smallMobile',
  },
});

const MessageSucceed = styled('p', {
  margin: `${rem(100)} 0`,
  fontSize: '$title',
  fontWeight: '$regular',

  '@mobileLarge': {
    fontSize: '$subtitle',
    margin: `${rem(60)} 0`,
  },
  '@mobileSmall': {
    fontSize: '$text',
    margin: `${rem(30)} 0 ${rem(50)} 0`,
  },
});

const MessageFailed = styled('p', {
  a: {
    fontSize: '$subtitle',
    fontWeight: '$bold',
    textDecoration: 'underline',

    '@mobileSmall': {
      fontSize: '$text',
    },
  },
});

const BlockSucceed = styled(BlockTemplate, {
  '@mobileLarge': {
    width: '100%',
  },
});

const BlockFailed = styled(BlockTemplate, {
  '& > *': {
    fontSize: '$subtitle',
    fontWeight: '$medium',

    '@mobileSmall': {
      fontSize: '$text',
    },
  },

  '@mobileLarge': {
    paddingTop: 0,
    width: '100%',
  },
});
