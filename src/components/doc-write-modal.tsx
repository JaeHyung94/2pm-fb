import React, { useRef, useState } from 'react';
import { Avatar } from './avatar';
import { useAtomValue } from 'jotai';
import { UserAtom } from '../contexts/userAtom';
import { useWrite } from '../hooks/useWrite';

interface IDocWriteModal {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DocWriteModal = ({
  setOpenModal,
}: IDocWriteModal): React.ReactElement => {
  const [content, setContent] = useState<string>('');
  const [lines, setLines] = useState<number>(0);

  const editableRef = useRef<HTMLDivElement>(null);
  const user = useAtomValue(UserAtom);

  const [handleWrite] = useWrite({ content });

  return (
    <>
      <div className="border-b border-gray-200">
        <h2 className="py-4 text-center text-xl font-bold">게시물 만들기</h2>
      </div>
      <div className="relative mt-2 px-3">
        <div className="flex items-center pb-4">
          <Avatar size="lg" />
          <h4 className="ml-2">{user.name}</h4>
        </div>
        <div
          contentEditable
          ref={editableRef}
          onInput={(e) => {
            setLines(e.currentTarget.childElementCount);
            setContent(e.currentTarget.textContent ?? '');
          }}
          className={`h-56 max-h-96 min-w-10 resize-none overflow-y-scroll py-2 text-lg transition ease-in-out focus:outline-none`}
        />
        <div
          className={`absolute ${
            (content && content.length > 0) || lines > 1 ? 'hidden' : 'block'
          } pointer-events-none absolute top-16 z-10 text-lg text-gray-600`}
        >
          {user.name}님 무슨 생각을 하고 계신가요?
        </div>
      </div>
      <div className="px-3">
        <button
          className={`w-full rounded-md px-2 py-3 ${
            content && content.length > 0 ? 'bg-fbblue' : 'bg-gray-200'
          } mb-4 text-white transition ease-in-out`}
          onClick={() => {
            handleWrite();
            setOpenModal(false);
          }}
        >
          게시
        </button>
      </div>
    </>
  );
};
