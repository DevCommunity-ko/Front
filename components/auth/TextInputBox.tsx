import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

type TextInputProps = {
  title: string;
  type: string;
  index: number;
  errorStatus?: boolean;
  errorMsg?: string;
  placeholder?: string;
  dropdown?: string[];
  buttonRound?: string[];
  buttonText?: string;
  required?: boolean;
  DataList?: string[];
  setDataList?: Function;
};

export const TextInputBox = ({
  title,
  type,
  index,
  errorStatus,
  errorMsg,
  placeholder,
  dropdown,
  buttonRound,
  buttonText,
  required,
  DataList,
  setDataList,
}: TextInputProps) => {
  const onChange = (e) => {
    let ChangedList = [...DataList];
    ChangedList[index] = e.target.value;
    setDataList(ChangedList);
  };

  const onGenderChange = (e) => {
    let ChangedList = [...DataList];
    switch (e.target.id) {
      case 'gender_0':
        ChangedList[5] = 'male';
        break;
      case 'gender_1':
        ChangedList[5] = 'female';
        break;
      case 'gender_2':
        ChangedList[5] = 'else';
        break;
      default:
        ChangedList[5] = 'error';
    }

    setDataList(ChangedList);
  };

  return (
    <InputBlock errorStatus={errorStatus ? 1 : 0}>
      <p>{title}</p>
      <InputLine>
        <input
          type={type}
          placeholder={errorStatus ? errorMsg : placeholder}
          list={'datalist_' + index}
          required={required}
          value={DataList[index]}
          onChange={(e) => onChange(e)}
          maxLength={index===1 ? 10 : 524288 } // 생일인경우 10글자('YYYY-MM-DD') 제한, 생일이 아닌 경우 기본값.
        />
        {dropdown ? (
          <datalist id={'datalist_' + index}>
            {dropdown.map((dItem, i) => (
              <option key={i}>{dItem}</option>
            ))}
          </datalist>
        ) : (
          ''
        )}
        <ButtonArea>
          {buttonRound
            ? buttonRound.map((item, gIndex) => (
                <label key={gIndex}>
                  <input
                    type="radio"
                    name="gender"
                    id={'gender_' + gIndex}
                    value={DataList[5]}
                    onChange={(e) => onGenderChange(e)}
                    required
                  />
                  <RoundButtonGender>{item}</RoundButtonGender>
                </label>
              ))
            : ''}
          {buttonText ? <TextButton>{buttonText}</TextButton> : ''}
        </ButtonArea>
      </InputLine>
    </InputBlock>
  );
};

const InputBlock = styled.div<{ errorStatus: number }>`
  margin-bottom: 1.25rem;
  padding-bottom: 0.438rem;
  box-sizing: border-box;
  border-bottom: 0.5px solid ${palette.Font};

  & > p {
    margin: 0;
    font-weight: 400;
    margin-bottom: 1.875rem;
  }

  ${(props) => 
    props.errorStatus && css`
      border-bottom: 0.5px solid ${palette.Alert};

      & > div > input::placeholder {
        color: ${palette.Alert};
      }
    `}
`;

const InputLine = styled.div`
  display: flex;
  justify-content: space-between;

  & > input {
    border: none;
    font-size: 1rem;
    width: 100%;
  }

  & input[type='radio'] {
    display: none;
  }

  & > input:focus {
    outline: none;
  }

  & > input::placeholder {
    font-size: 1rem;
    color: ${palette.Gray[1]};
  }
`;

const ButtonArea = styled.div`
  display: flex;
  width: max-content;

  & > label:not(label:last-child) {
    margin-right: 0.25rem;
  }

  & > label {
    width: max-content;
    & > input:checked + div {
      background-color: ${palette.Font};
      color: white;
    }
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
