import React from 'react';

interface TabsProps {
  activeTab: 'buyer' | 'seller';
  setActiveTab: (tab: 'buyer' | 'seller') => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center gap-8 mb-4">
      <button
        className={`px-12 py-2 text-2xl font-bold focus:outline-none ${
          activeTab === 'buyer' ? 'border-b-4 text-red-400 border-red-400' : ''
        }`}
        onClick={() => setActiveTab('buyer')}
      >
        Buyer
      </button>
      <button
        className={`px-12 py-2 text-2xl font-bold focus:outline-none ${
          activeTab === 'seller' ? 'border-b-4 text-red-400 border-red-400' : ''
        }`}
        onClick={() => setActiveTab('seller')}
      >
        Seller
      </button>
    </div>
  );
};

export default Tabs;
