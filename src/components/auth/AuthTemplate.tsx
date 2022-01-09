import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

const AuthTemplateBlock = styled('main', {
  marginTop: '15rem',
  display: 'flex',
  justifyContent: 'center',

  '@laptop': {
    marginTop: '6.875rem',
  },
  '@mobileLarge': {
    width: '100%',
    padding: '0 1.25rem',
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
