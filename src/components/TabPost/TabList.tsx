import React from 'react';
import pointer from '../../assets/checked.png';

interface ListComponentProps {
  items: string[];
}

const TabList: React.FC<ListComponentProps> = ({ items }) => {
  return (
    <ul className="text-lg font-medium list-none">
      {items.map((item, index) => (
        <li
          key={index}
          className="leading-10 pl-8 relative"
          style={{
            backgroundImage: `url(${pointer})`,
            backgroundSize: '1em 1em',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 0.6em',
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default TabList;
