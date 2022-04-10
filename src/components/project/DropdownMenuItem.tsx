import React from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';

export type dropdownItem = {
  value: string,
  label: string,
};

type Props = {
  item: dropdownItem,
  isMultiple: boolean,
  selectedValue: dropdownItem | dropdownItem[] | undefined,
  setSelectedValue: CallableFunction,
  setShowMenu: CallableFunction,
};

export const DropdownMenuItem = ({ item, isMultiple, selectedValue, setSelectedValue, setShowMenu }: Props) => {
  const isArray = Array.isArray(selectedValue);

  const onClick = (item: dropdownItem) => {
    if (isArray) {
      isSelected(item) ?
        setSelectedValue(selectedValue.filter(selected => selected.value !== item.value)) :
        setSelectedValue((prev: dropdownItem[]) => [...prev, item]);
    } else {
      setSelectedValue(item);
      setShowMenu(false);
    }
  };

  const isSelected = (target: dropdownItem): boolean => {
    if (isArray) {
      for (let i = 0; i < selectedValue.length; i++) {
        return selectedValue.some((item) => item.value === target.value);
      }
      return false;
    }
    return selectedValue?.value === item.value;
  };

  return (
    // REMINDER : 드롭다운 선택 즉시 submit을 통해 결과를 반영하도록 로직이 결정되면 type 속성을 재지정할 필요 있음
    <Wrapper
      isMultiple={isMultiple}
      role={isMultiple ? 'option' : 'checkbox'}
      isSelected={isSelected(item)}
      aria-checked={isSelected(item)}
      onClick={() => onClick(item)}
      type={'button'}>
      {isMultiple && <Checkbox isSelected={isSelected(item)} />}
      {item.label}
    </Wrapper>
  );
};

const Wrapper = styled('button', {
  border: 'none',

  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: rem(48),

  backgroundColor: 'white',
  borderLeft: '1px solid $line',
  borderRight: '1px solid $line',

  color: '$darkGray',
  fontWeight: '$regular', //DemiLight?
  fontSize: rem(14),

  '&:hover': {
    color: 'white',
    backgroundColor: '$purple',
  },

  paddingLeft: rem(11),

  variants: {
    isMultiple: {
      true: {
        paddingLeft: rem(8),
      },
    },
    isSelected: {
      true: {
        color: 'white',
        backgroundColor: '$purple',
      },
    },
  },
});

const Checkbox = styled('div', {
  width: rem(16),
  height: rem(16),
  border: '1px solid $darkGray',
  backgroundColor: 'white',
  borderRadius: '100%',

  marginRight: rem(5.33),

  variants: {
    isSelected: {
      true: {
        backgroundColor: 'blue', //TODO : 임시 색상입니다. 체크무늬 에셋을 받은 뒤 색상 대신 에셋이 나타나도록 적용합니다.
      },
    },
  },
});
