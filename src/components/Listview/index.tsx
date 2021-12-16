import React from 'react';

import { List, ListRowProps } from 'react-virtualized';
import Story from 'components/Story';
import ListWithRank from 'components/ListWithRank';


type listviewProp = {
  storyIds: string[]
};

const Listview: React.FC<listviewProp> = ({ storyIds = [] }) => {
  const renderStory = ({
    index,
    style
  }: ListRowProps) => {
    const id = storyIds[index];
    // return <Story key={id} storyId={id} cssStyle={style} />
    return <ListWithRank key={id} storyId={id} cssStyle={style} />
  };

  return (
    <List
      style={{
        maxWidth: '100%',
        padding: '0 16px',
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