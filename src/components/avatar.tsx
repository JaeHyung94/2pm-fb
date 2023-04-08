import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface IAvatarProps {
  size: number;
}

export const Avatar = ({ size }: IAvatarProps): React.ReactElement => {
  return (
    <div>
      <FaUserCircle size={size} color="rgba(209,213,219, 1)" />
    </div>
  );
};
