import React from 'react';
import styled from 'styled-components';

interface AuthTemplateBlockProps {
  children: React.ReactNode;
}

const AuthTemplateBlock = styled.main`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
`;

export const AuthTemplate = ({ children }: AuthTemplateBlockProps) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};
