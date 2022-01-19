import React from 'react';
import { rem } from 'polished';

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
  'borderRadius': rem(30),
  'border': 'none',
  'fontSize': '$button',
  'fontWeight': '$bold',
  'height': rem(60),

  'cursor': 'pointer',

  // hover 효과는 임의 효과입니다. 디자인 확정 뒤 삭제될 수 있습니다.
  '&:hover': {
    backgroundColor: '$lightGray',
  },

  '@mobileLarge': {
    height: rem(31),
    fontSize: '$text',
    fontWeight: '$medium',
  },
});
