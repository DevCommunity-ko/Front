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
  selectedValue: dropdownItem | undefined,
  selectedValues: dropdownItem[],
  setSelectedValue: CallableFunction,
  setShowMenu: CallableFunction,
};

export const DropdownMenuItem = ({ item, isMultiple, selectedValue, selectedValues, setSelectedValue, setShowMenu }: Props) => {

  const onClickSingle = (item: dropdownItem) => {
    setSelectedValue(item);
    setShowMenu(false);

    // TODO : 백엔드에 새 쿼리를 송신해 리스트를 새로고침시킬 수 있는 구문을 추가해야 합니다.
  };
      
  const onClickMultiple = (item: dropdownItem) => {
    isSelected(item) ? 
      setSelectedValue(selectedValues.filter(selected => selected.value !== item.value)) :
      setSelectedValue((prev: dropdownItem[]) => [...prev, item]);

    // TODO : 백엔드에 새 쿼리를 송신해 리스트를 새로고침시킬 수 있는 구문을 추가해야 합니다.
  };

  const isSelected = (target: dropdownItem) => {
    for (let i = 0; i < selectedValues.length ; i++) {
      if (selectedValues[i].value === target.value) return true;
    }
    return false;
  };

  return (
    <Wrapper
      isMultiple={isMultiple}
      isSelected={isMultiple ? isSelected(item) : selectedValue?.value === item.value}
      onClick={isMultiple ? () => onClickMultiple(item) : () => onClickSingle(item)}>
      {isMultiple && <Checkbox isSelected={isSelected(item)}/>}
      {item.label}
    </Wrapper>
  );
};

const Wrapper = styled('div',{
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: rem(48),
  
  backgroundColor: 'white',
  borderLeft:'1px solid #E5E0EB',
  borderRight:'1px solid #E5E0EB',

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

const Checkbox = styled('div',{
  width: rem(16),
  height: rem(16),
  border: '1px solid $darkGray',
  backgroundColor: 'white',
  borderRadius: '100%',

  marginRight: rem(5.33),

  variants:{
    isSelected: {
      true: {
        backgroundColor: 'blue', //TODO : 임시 색상입니다. 체크무늬 에셋을 받은 뒤 색상 대신 에셋이 나타나도록 적용합니다.
      },
    },
  },
});