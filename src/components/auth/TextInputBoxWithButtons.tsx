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
  buttonList?: Array<{ label: string; value: string }>;
  buttonText?: string;
};

export const TextInputBoxWithButtons = ({
  label,
  type,
  index,
  errorStatus,
  errorMsg,
  placeholder,
  dropdown,
  buttonList,
  required,
  DataList,
  setDataList,
}: TextInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let ChangedList = [...DataList];
    ChangedList[index] = e.target.value;
    setDataList(ChangedList);
  };

  const onGenderChange = (value: string) => {
    let ChangedList = [...DataList];
    ChangedList[5] = value;

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
        <ButtonArea>
          {buttonList &&
            buttonList.map((item) => (
              <LabelGender key={item.value}>
                <InputItemGender
                  type="radio"
                  name="gender"
                  value={DataList[5]}
                  onChange={() => onGenderChange(item.value)}
                  required
                />
                <RoundButtonGender>{item.label}</RoundButtonGender>
              </LabelGender>
            ))}
        </ButtonArea>
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

const ButtonArea = styled.div`
  display: flex;
  width: max-content;
`;

const LabelGender = styled.label`
  width: max-content;

  &:not(label:last-child) {
    margin-right: 0.25rem;
  }
`;

const InputItemGender = styled.input`
  display: none;

  &:checked + div {
    background-color: ${palette.Font};
    color: white;
  }
`;

const RoundButtonGender = styled.div`
  padding: 0 0.625rem;
  border: 0.5px solid ${palette.Font};
  border-radius: 30px;

  height: 1.5rem;
  width: fit-content;

  cursor: pointer;
`;

const TextButton = styled.div`
  font-weight: 400;
  font-size: 1.125em;
  width: max-content;

  cursor: pointer;
`;

const ErrorBox = styled.div`
  float: right;
  font-size: 1em;
  color: ${palette.Alert};
  font-weight: 400;
  margin-bottom: 1.25rem;
`;