import React from 'react';

import { styled } from '../../lib/styles/stitches.config';

type RoundButtonProps = React.PropsWithChildren<{
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}>;

export const RoundButton = ({
  children,
  onClick,
  ...rest
}: RoundButtonProps) => {
  return (
    <RoundButtonBlock {...rest} onClick={onClick}>
      {children}
    </RoundButtonBlock>
  );
};

const RoundButtonBlock = styled('button', {
  'width': '100%',
  'backgroundColor': '$gray',
  'borderRadius': '30px',
  'border': 'none',
  'fontSize': '1.1em',
  'fontWeight': '$bold',
  'height': '3rem',

  'cursor': 'pointer',

  '&:hover': {
    backgroundColor: '$lightGray',
  },
});
