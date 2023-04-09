import React from 'react';
import { FeedEditor } from './feed-editor';
import { FeedList } from './feed-list';

export const Feed = (): React.ReactElement => {
  return (
    <div className="h-full w-full max-w-lg overflow-scroll pt-3 md:w-4/5 md:max-w-xl lg:w-3/5 lg:max-w-lg xl:w-4/5 2xl:max-w-2xl">
      <FeedEditor />
      <FeedList />
    </div>
  );
};
