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
  const [selectedValues, setSelectedValues] = useState<dropdownItem[]>([]);

  const { setTarget } = useOutsideClick(setShowMenu);

  const showDropDownMenu = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    if (selectedValue  || (selectedValues.length !== 0)) {
      // TODO : 백엔드에 새 쿼리를 송신해 리스트를 새로고침시킬 수 있는 구문을 추가해야 합니다.
    }
  }, [selectedValue, selectedValues]);

  useEffect(() => {
    defaultValue && setSelectedValue(defaultValue);
  },[defaultValue]);
  
  return (
    <>
      <Wrapper ref={setTarget} showMenu={showMenu}>
        <ContentWrap onClick={showDropDownMenu}>
          <ValueContainer>
            <PlaceholderContainer isMultiple={item.selectMultiple}>
              {item.selectMultiple ?
                ((selectedValues.length === 0) ? item.placeholder :
                  (
                    selectedValues.map((item, index) => (
                      <ItemsSelectedContainer key={index}>
                        {item.label}
                      </ItemsSelectedContainer>
                    ))
                  )) :
                (selectedValue ? selectedValue.label : item.placeholder)}
            </PlaceholderContainer>
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
                selectedValues={selectedValues}
                setSelectedValue={item.selectMultiple ? setSelectedValues : setSelectedValue}
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
  display: 'flex',
  overflow: 'hidden',

  fontSize: rem(14),
  fontWeight: '$regular', // DEMILIGHT?
  color: '#ABA7AF',
  width: rem(96),

  '& > div:not(last-child)' : {
    marginRight: rem(4),
  },

  variants: {
    isMultiple: {
      true: {
        borderRadius: rem(14),
        width: rem(108),
        height: rem(28),
      },
    },
  },
});

const ItemsSelectedContainer = styled('div',{
  borderRadius: rem(14),
  backgroundColor: '#F5F3F7',

  fontSize: rem(14),
  fontWeight: '$regular', // DEMILIGHT?
  color: '#1A141F',

  padding: `${rem(4)} ${rem(8)}`,
  minWidth: rem(29),
  width: 'stretch',
  height: rem(29),

  textAlign: 'center',
});

const DummyIndicator = styled('div',{
  width: rem(24),
  height: rem(24),
  backgroundColor: '$gray',
});
