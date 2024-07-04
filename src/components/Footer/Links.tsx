import React from 'react';

interface LinksProps {
  title: string;
  links: { href: string; text: string }[];
}

const Links: React.FC<LinksProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-base font-bold mb-4">{title}</h4>
      <ul className="text-sm font-light">
        {links.map((link, index) => (
          <li className="mb-2" key={index}>
            <a href={link.href} className="hover:underline">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
