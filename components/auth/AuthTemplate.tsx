import { styled } from '../../lib/styles/stitches.config';
import React from 'react';

const AuthTemplateBlock = styled('main', {
  marginTop: '15rem',
  display: 'flex',
  justifyContent: 'center',
});


export const AuthTemplate: React.FC = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};
