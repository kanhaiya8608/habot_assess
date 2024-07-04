import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface SocialMedia {
  name: string;
  url: string;
  icon: JSX.Element;
}

const socialMediaData: SocialMedia[] = [
  { name: 'Facebook', url: 'https://facebook.com', icon: <FaFacebook size={18} /> },
  { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter size={18} /> },
  { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram size={18} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin size={18} /> },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex justify-center md:justify-end space-x-4">
      {socialMediaData.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white p-2 hover:bg-white text-white hover:text-blue-950"
        >
          {socialMedia.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
