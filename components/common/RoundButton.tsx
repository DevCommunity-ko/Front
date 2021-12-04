import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

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

export const RoundButton = ({ children, onClick }) => {
    return (
        <RoundButtonBlock onClick={onClick}>
            {children}
        </RoundButtonBlock>
    );
};


// export default RoundButton;
