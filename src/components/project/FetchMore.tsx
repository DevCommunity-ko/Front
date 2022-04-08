import React from 'react';

import { useIntersectionObserver } from '../../hooks';
import { styled } from '../../lib/styles/stitches.config';

type Props = {
  loading: boolean,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  destroyer: boolean,
};

export const FetchMore = ({ loading, setPage, destroyer }: Props) => {
  const onIntersect: IntersectionObserverCallback = (([{ isIntersecting }]) => {
    if (isIntersecting) setPage(page => page + 1);
  });

  const { setTarget } = useIntersectionObserver({ onIntersect, destroyer });

  return (
    <LoadingMsg ref={setTarget} isLoading={loading}>
      Loading!
    </LoadingMsg>
  );
};

const LoadingMsg = styled('div', {
  visibility: 'hidden',
  width: '100%',
  backgroundColor: 'red',

  variants: {
    isLoading: {
      true: {
        visibility: 'visible',
      },
    },
  },
});
