import React from 'react';

import { List } from 'react-virtualized';
import Story from 'components/Story'

const Listview = ({ storyIds = [] }) => {

  const renderStory = ({
    index,
    style
  }) => {
    const id = storyIds[index];
    return <Story key={id} storyId={id} cssStyle={style} />
  };

  return (
    <List
      style={{
        maxWidth: '100%',
        maxHeight: 'calc(100% - 40px)'
      }}
      width={720}
      height={1024}
      rowCount={storyIds.length}
      rowHeight={80}
      rowRenderer={renderStory}
    />
  )
};

export default Listview;