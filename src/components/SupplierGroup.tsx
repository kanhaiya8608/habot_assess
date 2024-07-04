import React from 'react';

const SupplierGroup: React.FC = () => {
  return (
    <div className="  bg-cyan-50 p-6 md:p-16  ">
      <div className='max-w-7xl mx-auto'>
      <div className='container mx-auto md:flex items-center justify-between px-6'>
      {/* Left side: Heading */}
      <div className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
        <p className="pb-1">Let Suppliers <span className='border-b-4 border-red-400'>Find You</span></p>
      </div>

      {/* Right side: Button */}
      <div className="mt-4 md:mt-0 md:ml-4">
        <button className="text-lg font-bold bg-red-400 text-white px-8 py-3 rounded hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-75 w-full md:w-auto">
          Get Verified
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SupplierGroup;
