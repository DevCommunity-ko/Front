import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

export const AuthTemplate: React.FC = ({ children }) => {
  return <AuthTemplateBlock><SafeCenterBlock>{children}</SafeCenterBlock></AuthTemplateBlock>;
};

const AuthTemplateBlock = styled('main', {
  marginTop: rem(240), // 320 - 80(Header Height);
  display: 'flex',
  justifyContent: 'center',

  '@laptop': {
    marginTop: rem(110), // 190 - 80(Header Height);
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
