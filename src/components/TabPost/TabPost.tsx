import React, { useState } from 'react';
import Video from './Video';
import Tabs from './Tabs'
import TabList from './TabList';

const TabPost: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');

  const buyerList = [
    'Post your requirements.',
    'Sit back for multiple suppliers to contact you.',
    'Choose among the suppliers based on the ratings and reviews.',
  ];

  const sellerList = [
    'Complete your profile and get verified.',
    'Choose service tags and get notified about each opportunity.',
    'Contact buyers, and expand your business.',
  ];

  return (
    <div className="py-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-sky-950 rounded p-6 py-14">
        <Video />
        <div className="w-full md:w-1/2 p-4">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="py-4 md:p-6">
            {activeTab === 'buyer' ? <TabList items={buyerList} /> : <TabList items={sellerList} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPost;
