import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

export const HiddenDescription: React.FC = ({ children }) => {
  return (
    <DescriptionBlock>
      {children}
    </DescriptionBlock>
  );
};

const DescriptionBlock = styled('p',{
  position: 'absolute',
  clip: 'rect(0 0 0 0)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  border: 0,
  zIndex: '-99',
});
