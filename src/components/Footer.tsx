import React from "react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white text-center py-6">
      <p>© {new Date().getFullYear()} Silk Directory. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
