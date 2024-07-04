import React from 'react';
import Logo from './Logo';
import Links from './Links';
import SocialIcons from './SocialIcons';

const Footer: React.FC = () => {
  const companyLinks = [
    { href: "#company", text: "Company" },
    { href: "#faq", text: "FAQ" },
  ];

  const termsLinks = [
    { href: "#privacy", text: "Privacy Policy" },
    { href: "#terms", text: "Terms of Service" },
    { href: "#cookie", text: "Cookie Policy" },
  ];

  const relatedLinks = [
    { href: "#blog", text: "Blog" },
    { href: "#news", text: "News" },
  ];

  return (
    <footer className="bg-blue-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-6 border-y-2 border-blue-900 gap-8 items-start p-6">
          {/* Logo and Copyright */}
          <div className="col-span-6 md:col-span-1">
            <Logo />
          </div>

          {/* Grid of links */}
          <div className="col-span-6 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Links title="COMPANY" links={companyLinks} />
            <Links title="TERMS" links={termsLinks} />
            <Links title="RELATED" links={relatedLinks} />
          </div>

          {/* Social Icons */}
          <div className="col-span-6 md:col-span-2 mt-6 md:mt-0">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
