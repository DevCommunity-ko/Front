import React, { useState, useEffect } from 'react';
import { rem } from 'polished';

import { styled } from '../../lib/styles/stitches.config';
import { projFilterData } from '../../lib/texts/texts';

import { SearchBox } from './SearchBox';
import { FilterDropdown } from './FilterDropdown';
import { ProjItemTypes } from './ProjItem';
import { ProjListContainer } from './ProjListContainer';
import { FetchMore } from './FetchMore';

export const listLength = 12; // 1Page = 12개를 로드하도록 임의로 설정하였음
const lastName = '한'; // TODO : 변수를 State화 & Redux 연동하여 로그인한 회원정보에서 성씨를 가져올 수 있도록 수정해야 합니다.
const loginStatus = false; // TODO : 변수를 State화 & Redux 연동하여, 로그인 상태를 불러와 로그인 상태를 확인할 수 있도록 수정해야 합니다.

// TODO : 샘플 데이터 생성 함수입니다. API 연동 이후 삭제해야 합니다.
const makeSampleData = (n: number): ProjItemTypes[] => {
  let arr = [{ id: 0, title: '프로젝트 제목', type: 'web', isTeam: false, href: 'link', img: 'img' }];
  arr = arr.concat({ id: 1, title: '프로젝트 제목', type: 'ios', isTeam: true, href: 'link', img: 'img' });
  arr = arr.concat({ id: 2, title: '프로젝트 제목', type: 'android', isTeam: false, href: 'link', img: 'img' });
  arr = arr.concat({ id: 3, title: '프로젝트 제목', type: 'else', isTeam: false, href: 'link', img: 'img' });

  for (let i = 4; i < n; i++) {
    arr = arr.concat({ id: (i + 1), title: '프로젝트 제목', type: 'web', isTeam: true, href: 'link', img: 'img' });
  }

  return arr as ProjItemTypes[];
};

// TODO : 샘플 데이터(30개) 생성 구문입니다. API 연동 이후 삭제해야 합니다.
const sampleData: ProjItemTypes[] = makeSampleData(30);

// TODO : 샘플 데이터를 로드하는 함수입니다. API 연동 이후 삭제해야 합니다.
const dummyFetcher = (i: number, n: number) => {
  let arr: ProjItemTypes[] = [];
  const target = i + n;

  for (; i < target; i++) {

    arr = arr.concat(sampleData[i]);
  }

  return arr;
};

export const ProjectMatrix = () => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState<ProjItemTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [isPageLast, setIsPageLast] = useState(false);

  // TODO : dummyFetcher()를 삭제하고 API가 연동되는 시점에서 함수를 Async화 시키며 setLoading()이 비동기적으로 작동할 수 있도록 수정해야 합니다.
  useEffect(() => {
    // setLoading(true);
    const list = dummyFetcher((page) * listLength, listLength);
    if (list[0] === undefined) {
      setIsPageLast(true);
    } else {
      setList(prev => [...prev, ...list]);
    }
    setLoading(false);
  }, [page]);

  return (
    <ContentBlock>
      <TitleBlock>
        <Title>프로젝트 매니저</Title>
        <SubTitle>{loginStatus ? <>{lastName} 님의 프로젝트에 영감을 얻을 수 있어요.</> : <>프로젝트에서 영감을 얻으세요.</>}</SubTitle>
      </TitleBlock>
      <FilterBlock>
        <FilterLeft>
          <SearchBox />
          <FilterDropdown item={projFilterData.field} />
          <FilterDropdown item={projFilterData.status} />
        </FilterLeft>
        <FilterDropdown item={projFilterData.sortby} defaultValue={{ value: projFilterData.sortby.list[0].value, label: projFilterData.sortby.list[0].label }} />
      </FilterBlock>
      <ItemMatrix>
        <ProjListContainer list={list} />
        <FetchMore loading={loading} setPage={setPage} destroyer={isPageLast} />
      </ItemMatrix>
    </ContentBlock>
  );
};

const ContentBlock = styled('article', {
  width: rem(1240),
});

const TitleBlock = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  '& > *': {
    margin: 0,
    padding: 0,
  },

  marginBottom: rem(37),
});

const Title = styled('h1', {
  fontSize: '$title',
  marginRight: rem(16),
});

const SubTitle = styled('h2', {
  fontSize: '$subtitle',
});

const FilterBlock = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: rem(84),
});

const FilterLeft = styled('div', {
  display: 'flex',
  alignItems: 'end',
  '& > *:first-child': {
    marginRight: rem(16),
  },
  '& > *:nth-child(2)': {
    marginRight: rem(8),
  },
});

const ItemMatrix = styled('div', {
  width: '100%',
});
