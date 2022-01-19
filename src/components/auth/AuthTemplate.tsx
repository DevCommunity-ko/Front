import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

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
    marginTop: '0',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export const AuthTemplate: React.FC = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};
