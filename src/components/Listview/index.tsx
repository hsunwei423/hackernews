import React, { useState } from 'react';

import ListWithRank from 'components/ListWithRank';
import { Pagination } from 'antd';

import style from './style.module.scss';


type listviewProp = {
  storyIds: string[]
};

const Listview: React.FC<listviewProp> = ({ storyIds = [] }) => {
  const [current, setCurrenct] = useState(1);

  const onPageChange = (page: number) => {
    console.log(page)
    setCurrenct(page);
    window.scrollTo(0, 0);
  };

  const renderList = () => {
    // 1: 0 ~ 9
    // 2: 10 ~ 19
    const end = current * 10;
    const start = end - 10;
    return storyIds
      .slice(start, end)
      .map(id => (
        <ListWithRank key={id} storyId={id} />
      ))
  }

  return (
    <div className={style.container}>
      { renderList() }
      <Pagination
        total={storyIds.length}
        defaultCurrent={1}
        pageSize={10}
        onChange={onPageChange}
        responsive={true}
      />
    </div>
  )
};

export default Listview;