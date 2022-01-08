import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

const ResponsiveBlock = styled('div', {
  //default : on Desktop (1920*1080)
  margin: '0 9.375%',

  '@laptop': {},
  '@tablet': {},
  '@mobileLarge': {},  
});

export const Responsive: React.FC = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};
