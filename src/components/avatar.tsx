import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export const Avatar = (): React.ReactElement => {
  return (
    <button>
      <FaUserCircle size={36} color="rgba(209,213,219, 1)" />
    </button>
  );
};
