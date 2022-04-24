import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

export const AuthTemplate: React.FC = ({ children }) => {
  return <AuthTemplateBlock><SafeCenterBlock>{children}</SafeCenterBlock></AuthTemplateBlock>;
};

const AuthTemplateBlock = styled('main', {
  paddingTop: rem(80),
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box',
  minHeight: '100%',

  '@laptop': {
  },
  '@mobileLarge': {
    width: '100%',
    padding: `0 ${rem(20)}`,
    marginTop: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  '@mobileSmall': {
    padding: `0 ${rem(10)}`,
  },
});

const SafeCenterBlock = styled('div', {
  // justify-content: safe center가 파이어폭스 외에는 지원되지 않아 해당 기능을 수행하는 블락을 구현했습니다.
  '@mobileLarge': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto 0',
  },
});
