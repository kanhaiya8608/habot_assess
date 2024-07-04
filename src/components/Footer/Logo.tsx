import React from 'react';
import logo from '../../assets/logo2.png'; // Adjust the path to your logo

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-start justify-center">
      <img src={logo} alt="Company Logo" className="w-40 mb-2" />
      <p className="text-sm">&copy; Kanhaiya Verma</p>
    </div>
  );
};

export default Logo;
