import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

type TextInputProps = React.HTMLProps<HTMLInputElement> & {
  label: string;
  index: number;
  DataList: string[];
  setDataList: Function;
  errorStatus?: boolean;
  errorMsg?: string;
  dropdown?: string[];
};

export const TextInputBox = ({
  label,
  type,
  index,
  errorStatus,
  errorMsg,
  placeholder,
  dropdown,
  required,
  DataList,
  setDataList,
}: TextInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let ChangedList = [...DataList];
    ChangedList[index] = e.target.value;
    setDataList(ChangedList);
  };

  return (
    <InputBlock errorStatus={errorStatus}>
      <InputLabel htmlFor={'textInput' + label}>
        <div>{label}</div>
      </InputLabel>
      <InputLine errorStatus={errorStatus}>
        <InputItem
          name={'textInput' + label}
          type={type}
          placeholder={placeholder}
          list={'datalist_' + index}
          required={required}
          value={DataList[index]}
          onChange={(e) => onChange(e)}
          maxLength={index === 1 ? 10 : 524288} // 생일인경우 10글자('YYYY-MM-DD') 제한, 생일이 아닌 경우 기본값.
        />
        {dropdown && (
          <datalist id={'datalist_' + index}>
            {dropdown.map((dItem, i) => (
              <option key={i}>{dItem}</option>
            ))}
          </datalist>
        )}
      </InputLine>
      <ErrorBox>{errorStatus && errorMsg}</ErrorBox>
    </InputBlock>
  );
};

const InputLabel = styled.label`
  & > div {
    margin: 0;
    font-weight: 400;
    margin-bottom: 1.875rem;
  }
`;

const InputBlock = styled.div<{ errorStatus?: boolean }>`
  padding-bottom: 0.438rem;
  box-sizing: border-box;

  ${(props) =>
    props.errorStatus &&
    css`
      & > div > input::placeholder {
        color: ${palette.Alert};
      }
    `}
`;

const InputLine = styled.div<{ errorStatus?: boolean }>`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.625rem;
  border-bottom: 0.5px solid ${palette.Font};

  ${(props) =>
    props.errorStatus &&
    css`
      border-bottom: 0.5px solid ${palette.Alert};
    `}
`;

const InputItem = styled.input`
  border: none;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 1rem;
    color: ${palette.Gray[1]};
  }
`;

const ErrorBox = styled.div`
  float: right;
  font-size: 1em;
  color: ${palette.Alert};
  font-weight: 400;
  margin-bottom: 1.25rem;
`;
