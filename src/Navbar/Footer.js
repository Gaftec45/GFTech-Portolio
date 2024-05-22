import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0d6efd' }} className=" text-white py-4">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="text-center">
          <p>&copy; {currentYear} GFTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;