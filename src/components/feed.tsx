import React from 'react';
import { FeedEditor } from './feed-editor';
import { FeedList } from './feed-list';

export const Feed = (): React.ReactElement => {
  return (
    <div className="pt-3">
      <FeedEditor />
      <FeedList />
    </div>
  );
};
