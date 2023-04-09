import React, { useEffect } from 'react';
import { Header } from './components/header';
import { LeftSideBar } from './components/left-sidebar';
import { Feed } from './components/feed';
import { RightSidebar } from './components/right-sidebar';
import { DOCS } from './db/docs';
import { useSetAtom } from 'jotai';
import { DocsAtom, ReReplyAtom, ReplyAtom } from './contexts/docsAtom';

export const App = (): React.ReactElement => {
  const setDocsAtom = useSetAtom(DocsAtom);
  const setReplyAtom = useSetAtom(ReplyAtom);
  const setReReplyAtom = useSetAtom(ReReplyAtom);

  useEffect(() => {
    //최초 1회 사전 정의된 문서를 가지고 와 localstorage에 저장합니다.
    if (!localStorage.getItem('2pmdocs')) {
      localStorage.setItem('2pmdocs', JSON.stringify(DOCS));
    }

    if (!localStorage.getItem('2pmreply')) {
      localStorage.setItem('2pmreply', JSON.stringify([]));
    }

    if (!localStorage.getItem('2pmrereply')) {
      localStorage.setItem('2pmrereply', JSON.stringify([]));
    }

    const currentDocs = localStorage.getItem('2pmdocs');
    const replies = localStorage.getItem('2pmreply');
    const rereplies = localStorage.getItem('2pmrereply');
    //로컬스토리지로부터 문서 데이터를 받아와 전역 상태로 지정합니다.
    setDocsAtom(currentDocs ? JSON.parse(currentDocs) : []);
    setReplyAtom(replies ? JSON.parse(replies) : []);
    setReReplyAtom(rereplies ? JSON.parse(rereplies) : []);
  }, []);

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
