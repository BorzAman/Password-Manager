import React from 'react';

const Footer = () => {
  return (
    <div className="relative">
      {/* Background Grid + Gradient Blur */}

      {/* Footer Content */}
      <div className="bg-blue-800 text-white py-6 text-center">
        <p className="py-3">All rights & @credits are reserved</p>
        <p className="py-3">
          Created with ❤️ By{' '}
          <a
            className="hover:underline"
            href="https://github.com/BorzAman?tab=overview&from=2025-04-01&to=2025-04-16"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aman
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
