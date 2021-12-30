import React from 'react';
import { styled } from '../../lib/styles/stitches.config';

type RoundButtonProps = React.PropsWithChildren<{
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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
  width: '100%',
  backgroundColor: '$Gray',
  borderRadius: '30px',
  border: 'none',
  fontSize: '1.1em',
  fontWeight: '$Bold',
  height: '3rem',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$LightGray',
  },
});
