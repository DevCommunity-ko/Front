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
    const ChangedList = [...DataList];
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
      marginBottom: rem(16),
    },
  },
});

const InputBlock = styled('div', {
  paddingBottom: rem(7),
  boxSizing: 'border-box',

  variants: {
    errorStatus: {
      true: {
        paddingBottom: '0',
      },
    },
  },

  '@mobileLarge': {
    marginBottom: rem(20),
  },
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

    '@mobileLarge': {
      fontSize: '$smallMobile',
    },
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

const ErrorBox = styled('div', {
  textAlign: 'right',
  fontSize: '$text',
  color: '$alert',
  fontWeight: '$regular',
});
