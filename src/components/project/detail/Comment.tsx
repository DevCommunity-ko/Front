import { rem } from 'polished';
import React from 'react';

import { styled } from '../../../lib/styles/stitches.config';

export const Comment = () => {
  return (
    <Wrapper>
      <PersonalIconTemplate />
      <Name>김미수</Name>
      <Text>정말 멋져요.<Date>2022.01.21</Date></Text>
      <SubCommentIconTemplate />
      <AlertIconTemplate />
    </Wrapper>
  );
};

const Wrapper = styled('div',{
  width: '100%',
    
  display: 'flex',
  alignItems: 'center',

  marginBottom: rem(20), 
});
 
const PersonalIconTemplate = styled('div',{
  width: rem(30),
  height: rem(30),

  borderRadius: '100%',

  backgroundColor: '$gray',
});

const Name = styled('div',{
  color: 'black',
  fontWeight: '$medium',
  fontSize: '$text',

  marginLeft: rem(7),
  marginRight: rem(20),
});

const Text = styled('p',{

  color: 'black',
  fontSize: '$text',
  fontWeight: '$regular',

  marginRight: rem(10),
});

const Date = styled('span',{
  color: '$gray',
  fontSize: rem(12),
  fontWeight: '$regular',    

  marginLeft: rem(10),
});

const SubCommentIconTemplate = styled('div',{
  width: rem(16),
  height: rem(16),

  background: '$gray',

  cursor: 'pointer',

  marginRight: rem(5),
});

const AlertIconTemplate = styled('div',{
  width: rem(16),
  height: rem(16),
  
  background: '$gray',    

  cursor: 'pointer',
});
