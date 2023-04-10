import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface IModalPortalProps {
  children: ReactNode;
  setOpenPortal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalPortal = ({ children, setOpenPortal }: IModalPortalProps) => {
  const element = document.getElementById('modal') as HTMLElement;

  return ReactDOM.createPortal(
    <div
      className="fixed left-0 top-0 z-30 flex h-screen w-screen items-center justify-center bg-white bg-opacity-80"
      onClick={() => setOpenPortal(false)}
    >
      <div
        className="w-4/5 rounded-md bg-white shadow-2xl lg:w-3/5 xl:w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    element,
  );
};
