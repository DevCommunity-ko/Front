import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

type TextInputProps = React.HTMLProps<HTMLInputElement> & {
  label: string,
  index: number,
  DataList: string[],
  setDataList: React.Dispatch<React.SetStateAction<string[]>>,
  errorStatus?: boolean,
  errorMsg?: string,
  dropdown?: string[],
  buttonList?: Array<{ label: string, value: string }>,
  buttonText?: string,
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
    const ChangedList = [...DataList];
    ChangedList[index] = e.target.value;
    setDataList(ChangedList);
  };

  const onGenderChange = (value: string) => {
    const ChangedList = [...DataList];
    ChangedList[5] = value;

    setDataList(ChangedList);
  };

  return (
    <InputBlock>
      <InputLabel htmlFor={'textInput' + label}>
        <div>{label}</div>
      </InputLabel>
      <InputLine errorStatus={errorStatus}>
        <InputItem
          errorStatus={errorStatus}
          name={`textInput${label}`}
          type={type}
          placeholder={placeholder}
          list={`datalist_${index}`}
          required={required}
          value={DataList[index]}
          onChange={(e) => onChange(e)}
          maxLength={index === 1 ? 10 : 524288} // 생일인경우 10글자('YYYY-MM-DD') 제한, 생일이 아닌 경우 기본값.
        />
        {dropdown && (
          <datalist id={`datalist_${index}`}>
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

const InputLabel = styled('label', {
  '& > div': {
    margin: '0',
    fontWeight: '$regular',
    marginBottom: rem(30),
  },

  '@mobileLarge': {
    '& > div': {
      marginBottom: rem(18),
    },
  },
  '@mobileSmall': {
    '& > div': {
      fontSize: '$smallMobile',
      marginBottom: rem(10),
    },
  },
});

const InputBlock = styled('div', {
  paddingBottom: rem(7),
  boxSizing: 'border-box',
});

const InputLine = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: rem(10),
  borderBottom: '0.5px solid $font',
  variants: {
    errorStatus: {
      true: {
        borderBottom: '0.5px solid $alert',
      },
    },
  },
});

const InputItem = styled('input', {
  border: 'none',
  fontSize: '$text',
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    fontSize: '$text',
    color: '$gray',
  },

  variants: {
    errorStatus: {
      true: {
        '&::placeholder': {
          color: '$alert',
        },
      },
    },
  },
});

const ButtonArea = styled('div', {
  display: 'flex',
  width: 'max-content',
});

const LabelGender = styled('label', {
  width: 'max-content',

  '&:not(label:last-child)': {
    marginRight: rem(4),
  },
});

const InputItemGender = styled('input', {
  // hide input to use div as input(radio)
  display: 'none',

  '&:checked + div': {
    backgroundColor: '$font',
    color: 'white',
  },
});

const RoundButtonGender = styled('div', {
  padding: `0 ${rem(10)}`,
  border: '0.5px solid $font',
  borderRadius: rem(30),

  height: rem(24),
  width: 'fit-content',

  cursor: 'pointer',
});

const ErrorBox = styled('div', {
  float: 'right',
  fontSize: '1em',
  color: '$alert',
  fontWeight: '$regular',
  marginBottom: rem(20),
});
