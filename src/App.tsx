import React from 'react';
import { Header } from './components/header';
import { LeftSideBar } from './components/left-sidebar';
import { Feed } from './components/feed';
import { RightSidebar } from './components/right-sidebar';

export const App = (): React.ReactElement => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-fbbg">
      <Header />
      <main className="flex h-[calc(100vh-0.25rem)] w-full justify-center pt-14 md:w-11/12 md:justify-between lg:w-full 2xl:w-4/5 2xl:justify-between 3xl:w-3/5">
        <LeftSideBar />
        <Feed />
        <RightSidebar />
      </main>
      <div id="modal"></div>
    </div>
  );
};
