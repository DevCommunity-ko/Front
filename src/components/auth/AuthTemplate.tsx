import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

const AuthTemplateBlock = styled('main', {
  marginTop: '15rem',
  display: 'flex',
  justifyContent: 'center',

  '@laptop': {
    marginTop: '6.875rem',
  },
  '@mobile': {
    marginTop: '6.25rem',
  },
});


export const AuthTemplate: React.FC = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};
