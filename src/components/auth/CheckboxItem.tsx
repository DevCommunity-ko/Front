import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

type CheckboxItemProps = {
  visibility: boolean,
  formItem: {
    isRequired: boolean,
    text: string,
    showAll: boolean,
    subHead?: string,
    terms?: string,
  },
  checkedState: boolean,
  onChange: React.ChangeEventHandler<HTMLInputElement>,
  handleCheckAll: React.ChangeEventHandler<HTMLInputElement>,
  isShowAll: boolean,
  onClickShowMore?: React.MouseEventHandler<HTMLSpanElement>,
};

export const CheckboxItem = ({
  visibility,
  formItem,
  checkedState,
  onChange,
  handleCheckAll,
  isShowAll,
  onClickShowMore,
}: CheckboxItemProps) => {
  return (
    <FormBlock isVisible={visibility}>
      <TitleBlock>
        <StyledLabel>
          <StyledInput
            type="checkbox"
            required={formItem.isRequired}
            checked={checkedState}
            onChange={formItem.showAll ? handleCheckAll : onChange}
            isTitle={formItem.showAll}
          />
          <div>{formItem.text}</div>
        </StyledLabel>
        {formItem.showAll && !isShowAll && (
          <ShowMore onClick={onClickShowMore}>자세히 보기</ShowMore>
        )}
      </TitleBlock>
      {formItem.subHead && <SubHeadBlock>{formItem.subHead}</SubHeadBlock>}
      {/* 일단 스타일링 위해서 InnerHTML 넣어두긴 했는데, 보안상 이슈 있을 수 있으니까 JSON 형태로 데이터 파싱하거나, 스타일링을 하지 않는 방향으로 해야 할 듯 */}
      {formItem.terms && (
        <TermBlock
          dangerouslySetInnerHTML={{ __html: formItem.terms }}
        ></TermBlock>
      )}
    </FormBlock>
  );
};

const SubHeadBlock = styled('p', {
  margin: '1.25rem 0',
  fontWeight: '$regular',
  wordBreak: 'keep-all',
  color: '$darkGray',

  '@mobileLarge': {
    fontSize: '$text',
    textAlign: 'left',
    wordBreak: 'break-word',
    margin: '0',
  },
});

const TitleBlock = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.625rem',
  alignItems: 'center',

  '@mobileLarge': {
    marginBottom: '0.688rem',
  },
});

const ShowMore = styled('span', {
  textDecoration: 'underline',
  color: '$darkGray',
  cursor: 'pointer',
  fontWeight: '$bold',

  '&:hover': {
    color: '$font',
  },

  '@mobileLarge': {
    fontSize: rem(10),
  },
});

const StyledLabel = styled('label', {
  fontSize: '$subtitle',
  fontWeight: '$regular',
  display: 'flex',
  alignItems: 'center',

  '@mobileLarge': {
    fontSize: '$text',
  },
});

const StyledInput = styled('input', {
  width: '1.5rem',
  height: '1.5rem',
  margin: '0 0.375rem 0 0',

  '& + div::after': {
    marginLeft: '0.25rem',
    content: '(선택)',
  },

  variants: {
    required: {
      true: {
        '& + div::after': {
          content: '(필수)',
          color: '$alert',
        },
      },
    },
    isTitle: {
      true: {
        '& + div': {
          fontWeight: '$bold',
          '@mobileLarge': {
            fontWeight: '$medium',
          },
        },
        '& + div::after': {
          content: '',
        },
      },
    },
  },

  '@mobileLarge': {
    width: '1.15rem',
    height: '1.15rem',
    margin: '0 0.313rem 0 0',
  },
});

const FormBlock = styled('div', {
  height: 'max-content',
  marginBottom: '1.25rem',

  variants: {
    isVisible: {
      false: {
        display: 'none',
      },
    },
  },
});

const TermBlock = styled('div', {
  width: '100%',
  height: '7.625rem',
  border: '0.5px solid $darkGray',
  backgroundColor: '$lightGray',
  color: '$darkGray',
  fontWeight: '$regular',
  overflowY: 'scroll',
  padding: '2rem 0.594rem 0 1.438rem',

  '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb': {
    width: '14px',
    borderRadius: '14px',
    backgroundClip: 'padding-box',
  },

  '&::-webkit-scrollbar-thumb': {
    color: '$lightBlue',
    boxShadow: 'inset 0 0 0 10px',
    border: '4.24px solid transparent',
  },

  '&::-webkit-scrollbar-track': {
    margin: '4.84px 0',
    backgroundColor: '$gray',
    width: '14px',
    borderRadius: '14px',
    backgroundClip: 'padding-box',
    border: '5.16px solid transparent',
  },

  '@mobileLarge': {
    padding: '1.291rem 0.094rem 0 0.938rem',
    textAlign: 'left',
    fontSize: '$smallMobile',
  },
});
