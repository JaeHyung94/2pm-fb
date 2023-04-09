import React, { useRef, useState } from 'react';
import { IoMdSend } from 'react-icons/io';

interface ITextInputProps {
  isReply: boolean;
  targetId: string;
}

export const TextInput = ({
  isReply,
  targetId,
}: ITextInputProps): React.ReactElement => {
  const [content, setContent] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  const [lines, setLines] = useState<number>(0);

  const editableRef = useRef<HTMLDivElement>(null);

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
        onKeyDown={(e) => {
          if (!e.ctrlKey && !e.shiftKey && e.key === 'Enter') {
            e.preventDefault();
            if (editableRef.current) {
              editableRef.current.innerHTML = '';
              setLines(0);
              setContent('');
            }
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
          (content && content.length > 0) || lines > 1 ? 'hidden' : 'block'
        } pointer-events-none absolute ${
          focused || content.length > 0 ? 'bottom-10' : 'bottom-2'
        } z-10 ml-3 text-sm text-gray-600`}
      >
        댓글을 입력하세요...
      </div>
      <div
        className={`flex w-full justify-end pb-3 pr-4 ${
          focused || content.length > 0 ? '' : 'hidden'
        } transition ease-in-out`}
      >
        <IoMdSend
          size={20}
          color={content.length === 0 ? '#bdc3ca' : '#006de9'}
        />
      </div>
    </div>
  );
};
