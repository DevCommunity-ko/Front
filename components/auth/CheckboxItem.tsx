import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

type CheckboxItemProps = {
  visibility: boolean;
  formItem: {
    isRequired: boolean;
    text: string;
    showAll?: boolean;
    subHead?: string;
    terms?: string;
  };
  checkedState: boolean;
  onCheck: React.ChangeEventHandler<HTMLInputElement>;
  handleCheckAll: React.ChangeEventHandler<HTMLInputElement>;
  isShowAll: boolean;
  showAll?: React.MouseEventHandler<HTMLSpanElement>;
};

export const CheckboxItem = ({
  visibility,
  formItem,
  checkedState,
  onCheck,
  handleCheckAll,
  isShowAll,
  showAll,
}: CheckboxItemProps) => {
  return (
    <FormBlock visibility={visibility}>
      <TitleBlock>
        <StyledLabel>
          <StyledInput
            type="checkbox"
            required={formItem.isRequired}
            isRequired={formItem.isRequired}
            checked={checkedState}
            onChange={formItem.showAll ? handleCheckAll : onCheck}
            isTitle={formItem.showAll ? true : false}
          />
          <div>{formItem.text}</div>
        </StyledLabel>
        {formItem.showAll && !isShowAll ? (
          <ShowMore onClick={showAll}>자세히 보기</ShowMore>
        ) : (
          ''
        )}
      </TitleBlock>
      {formItem.subHead ? <SubHeadBlock>{formItem.subHead}</SubHeadBlock> : ''}
      {/* 일단 스타일링 위해서 InnerHTML 넣어두긴 했는데, 보안상 이슈 있을 수 있으니까 JSON 형태로 데이터 파싱하거나, 스타일링을 하지 않는 방향으로 해야 할 듯 */}
      {formItem.terms && (
        <TermBlock
          dangerouslySetInnerHTML={{ __html: formItem.terms }}
        ></TermBlock>
      )}
    </FormBlock>
  );
};

const SubHeadBlock = styled.p`
  margin: 1.25rem 0 1.25rem 0;
  font-weight: 400;
  word-break: keep-all;
  color: ${palette.Gray[2]};
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.625rem;
  align-items: center;
`;

const ShowMore = styled.span`
  text-decoration: underline;
  color: ${palette.Gray[2]};
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: ${palette.Font[0]};
  }
`;

const StyledLabel = styled.label`
  font-size: 1.125em;
  font-weight: 400;
  display: flex;
  align-items: center;

  & > input {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.375rem 0 0;
  }
`;

interface InputType {
  isRequired: boolean;
  isTitle: boolean;
}

const StyledInput = styled.input<InputType>`
  & + div::after {
    margin-left: 0.25rem;

    content: '(선택)';

    ${(props) =>
      props.isRequired &&
      css`
        content: '(필수)';
        color: ${palette.Alert};
      `}
  }

  ${(props) =>
    props.isTitle &&
    css`
      & + div {
        font-weight: 700;
      }

      & + div::after {
        content: '';
      }
    `}
`;

const FormBlock = styled.div<{ visibility: boolean }>`
  height: max-content;
  visibility: visible;
  margin-bottom: 1.25rem;

  ${(props) =>
    !props.visibility &&
    css`
      height: 0;
      visibility: hidden;
      margin: 0;
      padding: 0;

      * {
        height: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    `}
`;

const TermBlock = styled.div`
  width: 100%;
  height: 7.625rem;
  border: 0.5px solid ${palette.Gray[2]};
  background-color: ${palette.Gray[0]};
  color: ${palette.Gray[2]};
  font-weight: 400;
  overflow-y: scroll;
  padding: 2rem 0.594rem 0 1.438rem;
  scrollbar-color: red;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 14px;
    border-radius: 14px;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-thumb {
    color: ${palette.Blue[1]};
    box-shadow: inset 0 0 0 10px;
    border: 4.24px solid transparent;
  }

  &::-webkit-scrollbar-track {
    margin: 4.84px 0;
    background-color: ${palette.Gray[1]};
    width: 14px;
    border-radius: 14px;
    background-clip: padding-box;
    border: 5.16px solid transparent;
  }
`;
