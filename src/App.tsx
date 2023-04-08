import React from 'react';
import { Header } from './components/header';
import { LeftSideBar } from './components/left-sidebar';
import { Feed } from './components/feed';
import { RightSidebar } from './components/right-sidebar';

export const App = (): React.ReactElement => {
  return (
    <div className="min-h-screen w-full bg-fbbg">
      <Header />
      <main className="grid grid-flow-col pt-14">
        <LeftSideBar />
        <Feed />
        <RightSidebar />
      </main>
    </div>
  );
};
