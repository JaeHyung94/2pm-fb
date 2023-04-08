import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface IAvatarProps {
  size: 'lg' | 'md' | 'sm';
  url?: string;
}

export const Avatar = ({ size, url }: IAvatarProps): React.ReactElement => {
  return (
    <div>
      {url ? (
        <img src={url} className="h-9 w-9 rounded-full object-cover" />
      ) : (
        <FaUserCircle
          size={size === 'lg' ? 40 : size === 'md' ? 36 : 28}
          color="rgba(209,213,219, 1)"
        />
      )}
    </div>
  );
};
