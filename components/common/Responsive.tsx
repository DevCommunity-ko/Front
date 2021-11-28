import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    margin: 0 9.375%;

    /*media settings*/
    @media (max-width: 1024px) {
        //중단점 및 반응형 디자인 확정되면 추가될 예정입니다.
    }
`;

const Responsive = ({ children, ...rest }) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
};

export default Responsive;