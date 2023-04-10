import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { useReply } from '../hooks/useReply';

interface ITextInputProps {
  isReply: boolean;
  isReReply: boolean;
  targetId: string;
  replyId?: string;
  replyerName?: string;
  setReReplyMode?: React.Dispatch<SetStateAction<boolean>>;
}

export const TextInput = ({
  isReply,
  isReReply,
  replyId,
  targetId,
  replyerName,
  setReReplyMode,
}: ITextInputProps): React.ReactElement => {
  const [content, setContent] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [lines, setLines] = useState<number>(0);

  const editableRef = useRef<HTMLDivElement>(null);
  const [handleReply, handleReReply] = useReply({
    docId: targetId,
    content: content,
    replyId: replyId,
  });

  useEffect(() => {
    if (isReReply) {
      if (editableRef.current) {
        editableRef.current.textContent = replyerName ?? '';
        setContent(replyerName ?? '');
        editableRef.current.focus();
      }
    }
  }, []);

  const handleSubmit = (): void => {
    if (isReply) {
      console.log('submit reply: ', content);
      handleReply();
    } else {
      handleReReply();
      setReReplyMode ? setReReplyMode(false) : undefined;
    }

    if (editableRef.current) {
      editableRef.current.innerHTML = '';
      setLines(0);
      setContent('');
    }
  };

  return (
    <div
      className={`${
        focused || content.length > 0 ? 'rounded-xl' : 'rounded-full'
      } relative ml-1
      w-full bg-gray-200 transition ease-in-out`}
    >
      <div
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        contentEditable
        ref={editableRef}
        //onKeyDown으로 했는데, 한글 입력이 두번 되는 문제가 생겨서 onKeyPress로 수정. 이후에는 addEventListener로 교체 예정.
        onKeyPress={(e) => {
          if (!e.ctrlKey && !e.shiftKey && e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
          }
        }}
        onInput={(e) => {
          setLines(e.currentTarget.childElementCount);
          setContent(e.currentTarget.textContent ?? '');
        }}
        className={`max-h-24 min-w-10 resize-none overflow-y-scroll px-3 py-2 text-sm transition ease-in-out focus:outline-none`}
      />
      <div
        className={`${
          (content && content.length > 0) || lines > 1 || isReReply
            ? 'hidden'
            : 'block'
        } pointer-events-none absolute ${
          focused || content.length > 0 ? 'bottom-10' : 'bottom-2'
        } z-10 ml-3 text-sm text-gray-600`}
      >
        댓글을 입력하세요...
      </div>
      <div className="flex w-full justify-end">
        <button
          className={` pb-3 pr-4 ${
            focused || content.length > 0 ? '' : 'hidden'
          } transition ease-in-out`}
          onClick={() => handleSubmit()}
        >
          <IoMdSend
            size={20}
            color={content.length === 0 ? '#bdc3ca' : '#006de9'}
          />
        </button>
      </div>
    </div>
  );
};
