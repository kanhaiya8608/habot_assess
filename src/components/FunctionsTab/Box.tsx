import React from 'react';

interface BoxProps {
  imageUrl: string;
  text: string;
  id: number;
}

export const Box: React.FC<BoxProps> = ({ imageUrl, text, id }) => {
  const getBackgroundColor = (id: number): string => {
    return id % 2 !== 0 ? 'bg-cyan-50' : 'bg-white';
  };

  return (
    <div className={`${getBackgroundColor(id)} p-8 flex flex-col items-center justify-center`}>
      <img src={imageUrl} alt="Image" className="mb-4 rounded w-12 md:w-20" />
      <div className="text-center text-md md:text-xl font-medium">
        {text}
      </div>
    </div>
  );
};