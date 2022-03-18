import React from 'react';

import { ProjItemTypes } from './ProjItem';
import { ProjListOneLine } from './ProjListOneLine';

type Props = {
  list: ProjItemTypes[],
};

export const ProjListContainer = (list: Props) => {
  return (
    <div>
      {list.list.map((item, index) => (
        ((index % 4) === 0) && item && (<ProjListOneLine index={index} projListArray={list.list} key={index}/>)
      ))}
    </div>
  );
};
