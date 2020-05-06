
import React from 'react';
import back from './firewall.jpg'; 
import './App.css';
import { render } from '@testing-library/react';
console.log(back); // /logo.84287d09.png


function Header() {
 
  return <img src={back} style={{opacity: '0.4'} } className="class1" alt="back" />;
}
export default Header;

