import { rem } from 'polished';
import React, { useEffect, useState } from 'react';

import { useOutsideClick } from '../../hooks';
import { styled } from '../../lib/styles/stitches.config';

import { DropdownMenuItem, dropdownItem } from './DropdownMenuItem';

type FilterItem = {
  placeholder?: string,
  selectMultiple: boolean,
  list: dropdownItem[],
};

type Props = {
  item: FilterItem,
  defaultValue?: dropdownItem,
};

export const FilterDropdown = ({ item, defaultValue }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState<dropdownItem | dropdownItem[] | undefined>(item.selectMultiple ? [] : undefined);
  const { setTarget } = useOutsideClick(setShowMenu);

  const showDropDownMenu = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    if (selectedValue) {
      // TODO : 백엔드에 새 쿼리를 송신해 리스트를 새로고침시킬 수 있는 구문을 추가해야 합니다.
    }
  }, [selectedValue]);

  useEffect(() => {
    defaultValue && setSelectedValue(defaultValue);
  }, [defaultValue]);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const isArray = Array.isArray(selectedValue);

  const getAriaLabelMultiple = (): string => {
    if (!isArray) return '';
    return selectedValue.reduce((prev, curr) => `${prev}, ${curr.label}`, '');
  };

  const ariaLabelValue = isArray ? `선택된 다중 항목 ${getAriaLabelMultiple()}` :
    (selectedValue ? `선택된 항목 ${selectedValue.label}` : undefined);

  return (
    <>
      <Wrapper aria-label={ariaLabelValue} ref={setTarget} showMenu={showMenu} role={'select'} tabIndex={0} onFocus={showDropDownMenu} >
        <ContentWrap onClick={showDropDownMenu} >
          <PlaceholderContainer isMultiple={item.selectMultiple} >
            {isArray ?
              ((selectedValue.length === 0) ? item.placeholder : selectedValue.map((item, index) => (
                <ItemsSelectedContainer key={index}> {item.label} </ItemsSelectedContainer>
              ))) : selectedValue?.label ?? item.placeholder}
          </PlaceholderContainer>
          <DummyIndicator isMultiple={item.selectMultiple} />
        </ContentWrap>
        {showMenu &&
          <MenuContainer role={item.selectMultiple ? 'listbox' : 'form'} onSubmit={(e) => onSubmit(e)}>
            {
              item.list.map((dItem) => (
                <DropdownMenuItem
                  key={dItem.value}
                  item={dItem}
                  isMultiple={item.selectMultiple}
                  selectedValue={selectedValue}
                  setSelectedValue={setSelectedValue}
                  setShowMenu={setShowMenu} />
              ))
            }
          </MenuContainer>}
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  border: '1px solid $line',
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

const ContentWrap = styled('div', {
  width: '100%',
  height: rem(48),

  display: 'flex',
  alignItems: 'center',

});

const MenuContainer = styled('form', {
  position: 'relative',
  top: '-1px',
  right: rem(12 + 1), // paddingleft + border thickness

  border: 'none',
  borderBottomLeftRadius: rem(24),
  borderBottomRightRadius: rem(24),

  width: rem(152),
  height: 10,

  '& > button:last-child': {
    borderBottomLeftRadius: rem(24),
    borderBottomRightRadius: rem(24),
    borderBottom: '1px solid $line',
  },
});

const PlaceholderContainer = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',

  fontSize: rem(14),
  fontWeight: '$regular', // DEMILIGHT?
  color: '#ABA7AF',
  width: rem(96),

  '& > div:not(last-child)': {
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

const ItemsSelectedContainer = styled('div', {
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

const DummyIndicator = styled('div', {
  width: rem(24),
  height: rem(24),
  backgroundColor: '$gray',

  marginLeft: rem(8),
  variants: {
    isMultiple: {
      true: {
        marginLeft: 0,
      },
    },
  },
});
