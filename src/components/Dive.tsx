import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Importing the arrow icon from react-icons

interface Country {
  id: number;
  name: string;
}

const Dive: React.FC = () => {
  // State to track which country is currently hovered
  const [hoveredCountry, setHoveredCountry] = useState<number | null>(null);

  // Sample data for countries (replace with dynamic data as needed)
  const countries: Country[] = [
    { id: 1, name: 'Abu Dhabi' },
    { id: 2, name: 'Dubai' },
    { id: 3, name: 'Sharjah & Ajman' },
    { id: 4, name: 'Fujairah' },
    { id: 5, name: 'Ras Al Khaimah' },
    { id: 6, name: 'Umm Al Quwain' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-10 flex flex-col md:flex-row justify-center ">
      {/* Left side */}
      <div className="md:w-1/2 space-y-8 p-6">
        <h2 className="text-4xl font-bold leading-10">Ready to dive into HABOT?</h2>
        <p className='text-lg font-light leading-7 text-black'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
        <button className="mt-4 px-10 w-full justify-center md:w-auto py-2 bg-emerald-700 text-white text-lg font-bold rounded-md flex items-center hover:bg-emerald-400 transition">
          Sign Up Today! <FiArrowRight className="ml-1" />
        </button>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {countries.map((country) => (
            <div
              key={country.id}
              className={`cursor-pointer border border-orange-400 p-6 text-neutral-700 hover:text-white text-center rounded-md relative group transition-colors duration-300 ${
                hoveredCountry === country.id ? 'bg-orange-400 text-white' : ''
              }`}
              onMouseEnter={() => setHoveredCountry(country.id)}
              onMouseLeave={() => setHoveredCountry(null)}
              style={{ minWidth: '120px' }} // Ensure a consistent width
            >
              <span className="text-lg font-semibold flex items-center justify-center relative">
                {country.name}
                {hoveredCountry === country.id && (
                  <FiArrowRight className="ml-1 absolute right-2 text-white" />
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dive;
