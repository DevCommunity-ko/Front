import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.main`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
`;

export const AuthTemplate = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;
