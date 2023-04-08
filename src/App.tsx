import React from 'react';
import { Header } from './components/header';
import { LeftSideBar } from './components/left-sidebar';

export const App = (): React.ReactElement => {
  return (
    <div className="min-h-screen w-full bg-fbbg">
      <Header />
      <main className="pt-14">
        <LeftSideBar />
      </main>
    </div>
  );
};
