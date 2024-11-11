import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '2px 0', 
    textAlign: 'center',
    position: 'fixed', 
    bottom: '0',
    width: '100%',
   
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    display: 'inline-block',
  };

  const iconStyle = {
    width: '30px', 
    height: '30px',
    margin: '0 5px',
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <p>&copy; 2024 Golden Event Management. All rights reserved.</p>

         
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Contact Us</a>

         
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://img.icons8.com/?size=48&id=9a46bTk3awwI&format=png" alt="YouTube" style={iconStyle} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png" alt="Instagram" style={iconStyle} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://img.icons8.com/?size=48&id=yGcWL8copNNQ&format=png" alt="Facebook" style={iconStyle} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
