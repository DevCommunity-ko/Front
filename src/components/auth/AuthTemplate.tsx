import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

const AuthTemplateBlock = styled('main', {
  marginTop: '15rem',
  display: 'flex',
  justifyContent: 'center',
});


export const AuthTemplate: React.FC = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};
