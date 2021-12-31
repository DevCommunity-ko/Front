import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

export const RoundButton = ({ children, onClick, ...rest }) => {
  return <RoundButtonBlock {...rest} onClick={onClick}>{children}</RoundButtonBlock>;
};

const RoundButtonBlock = styled.button`
  width: 100%;
  background-color: ${palette.Gray[1]};
  border-radius: 30px;
  border: none;
  font-size: 1.1em;
  font-weight: 700;
  height: 3rem;

  cursor: pointer;

  &:hover {
    background-color: ${palette.Gray[0]};
  }
`;



// export default RoundButton;
