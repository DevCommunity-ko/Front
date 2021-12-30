import React from 'react';
import { styled } from '../../lib/styles/stitches.config';

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

const InputLabel = styled('label', {
  '& > div': {
    margin: '0',
    fontWeight: '$Regular',
    marginBottom: '1.875rem',
  },
});

const InputBlock = styled('div', {
  paddingBottom: '0.438rem',
  boxSizing: 'border-box',
  variants: {
    errorStatus: {
      true: {
        '& > div > input::placeholder': {
          color: '$Alert',
        },
      },
    },
  },
});

const InputLine = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '0.625rem',
  borderBottom: '0.5px solid $Font',
  variants: {
    errorStatus: {
      true: {
        borderBottom: '0.5px solid $Alert',
      },
    },
  },
});

const InputItem = styled('input', {
  border: 'none',
  fontSize: '1rem',
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    fontSize: '1rem',
    color: '$Gray',
  },
});

const ErrorBox = styled('div', {
  float: 'right',
  fontSize: '1em',
  color: '$Alert',
  fontWeight: '$Regular',
  marginBottom: '1.25rem',
});
