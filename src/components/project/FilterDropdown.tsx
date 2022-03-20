import { rem } from 'polished';
import React, { useEffect, useState } from 'react';

import { useOutsideClick } from '../../hooks';
import { styled } from '../../lib/styles/stitches.config';

import { DropdownMenuItem, dropdownItem } from './DropdownMenuItem';

type FilterItem = {
  placeholder?: string | undefined,
  selectMultiple: boolean,
  list: dropdownItem[],
};

type Props = {
  item: FilterItem,
  defaultValue?: dropdownItem,
};

export const FilterDropdown = ({ item, defaultValue }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<dropdownItem | undefined >(undefined);

  const { setTarget } = useOutsideClick(setShowMenu);

  const showDropDownMenu = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    defaultValue && setSelectedValue(defaultValue);
  },[defaultValue]);
  
  return (
    <>
      <Wrapper ref={setTarget} showMenu={showMenu}>
        <ContentWrap onClick={showDropDownMenu}>
          <ValueContainer>
            <PlaceholderContainer>{selectedValue ? selectedValue.label : item.placeholder}</PlaceholderContainer>
            <InputContainer>
              <SelectedValue></SelectedValue>
              <HiddenInput type='text' name='val' readOnly />
            </InputContainer>
          </ValueContainer>
          <DummyIndicator />
        </ContentWrap>
        {showMenu &&
        <MenuContainer>
          {
            item.list.map((dItem) => (
              <DropdownMenuItem
                item={dItem} key={dItem.value}
                isMultiple={item.selectMultiple}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                setShowMenu={setShowMenu}/>
            ))
          }
        </MenuContainer>}
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div',{
  border: '1px solid #E5E0EB',
  borderRadius: rem(24),

  width: rem(152),
  height: rem(48),
  
  padding: `0 ${rem(12)}`,

  variants: {
    showMenu: {
      true: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottom: 'none',
      },
    },
  },
});

const ContentWrap = styled('div',{
  width: rem(152),
  height: rem(48),

  display: 'flex',
  alignItems: 'center',

});

const MenuContainer = styled('div',{
  position: 'relative',
  top: '-1px',
  right: rem(12 + 1), // paddingleft + border thickness

  border: 'none',
  borderBottomLeftRadius: rem(24),
  borderBottomRightRadius: rem(24),

  width: rem(152),
  height: 10,

  '& > div:last-child' : {
    borderBottomLeftRadius: rem(24),
    borderBottomRightRadius: rem(24),
    borderBottom: '1px solid #E5E0EB',
  },
});

const ValueContainer = styled('div',{

});


const HiddenInput = styled('input', {
  visibility: 'hidden',
  width: 0,
  height: 0,
});
const InputContainer = styled('div',{
  position: 'absolute',
});
const SelectedValue = styled('div',{});

const PlaceholderContainer = styled('div', {
  fontSize: rem(14),
  fontWeight: '$regular', // DEMILIGHT?
  color: '#ABA7AF',
  width: rem(96),
});

const DummyIndicator = styled('div',{
  width: rem(24),
  height: rem(24),
  backgroundColor: '$gray',
});
