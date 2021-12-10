import React from 'react';

import Story from 'components/Story'

const Listview = ({ storyIds = [] }) => {
  return (
    <div>
      {
        storyIds.map((e, index) => (
          <Story key={index} storyId={e} />
        ))
      }
    </div>
  )
};

export default Listview;