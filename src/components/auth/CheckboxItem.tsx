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
  margin: `${rem(20)} 0`,
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
  marginBottom: rem(10),
  alignItems: 'center',

  '@mobileLarge': {
    marginBottom: rem(12),
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
  // TODO: 체크박스 리소스를 받은 뒤에는, label로 감싼 뒤 내부에 요소를 넣어 기본 체크박스를 감춘 뒤 스타일된 체크박스가 나타날 수 있도록 합니다.
  width: rem(24),
  height: rem(24),
  margin: `0 ${rem(6)} 0 0`,

  '& + div::after': {
    marginLeft: rem(4),
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
    width: rem(18), // 디자인은 rem(20)인데, 너무 빈 틈 없이 짜주셔서 디바이스에 따라 폰트 크기가 달라지면 해당 내용이 올바르게 표시되지 못하여, 임의로 크기를 조금 줄였습니다.
    height: rem(18),
    margin: `0 ${rem(5)} 0 0`,
  },
});

const FormBlock = styled('div', {
  height: 'max-content',
  marginBottom: rem(20),

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
  height: rem(122),
  border: '0.5px solid $darkGray',
  backgroundColor: '$lightGray',
  color: '$darkGray',
  fontWeight: '$regular',
  overflowY: 'scroll',
  // padding right = 표시되어야 할 글자 우측 패딩 너비 - 스크롤바 너비
  padding: `${rem(32)} ${rem(25 - 13.44)} 0 ${rem(25)}`,

  '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb': {
    width: rem(13.44),
    borderRadius: rem(13.44),
    backgroundClip: 'padding-box',
  },

  '&::-webkit-scrollbar-thumb': {
    color: '$lightBlue',
    boxShadow: `inset 0 0 0 ${rem(10)}`,
    border: `${rem(3.84)} solid transparent`,
  },

  '&::-webkit-scrollbar-track': {
    margin: `${rem(10)} 0`,
    backgroundColor: '$gray',
    width: rem(13.44),
    borderRadius: rem(13.44),
    backgroundClip: 'padding-box',
    border: `${rem(3.84 + 0.96)} solid transparent`,
  },

  '@mobileLarge': {
    // padding right = 표시되어야 할 글자 우측 패딩 너비 - 스크롤바 너비
    padding: `${rem(20.98)} ${rem(18 - 8.96)} 0 ${rem(15.33)}`,
    height: rem(80),
    textAlign: 'left',
    fontSize: '$smallMobile',

    '&::-webkit-scrollbar, &::-webkit-scrollbar-thumb': {
      width: rem(8.96),
      borderRadius: rem(8.96),
      backgroundClip: 'padding-box',
    },

    '&::-webkit-scrollbar-thumb': {
      color: '$lightBlue',
      boxShadow: `inset 0 0 0 ${rem(10)}`,
      border: `${rem(2.56)} solid transparent`,
    },

    '&::-webkit-scrollbar-track': {
      margin: `${rem(6.56)} 0`,
      backgroundColor: '$gray',
      width: rem(8.96),
      borderRadius: rem(8.96),
      backgroundClip: 'padding-box',
      border: `${rem(2.56 + 0.64)} solid transparent`,
    },
  },
});
