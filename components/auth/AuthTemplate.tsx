import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
    margin-top: 15rem;
    display: flex;
    justify-content: center;
`;

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            {children}
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;