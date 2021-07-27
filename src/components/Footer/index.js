import React from 'react';
import "./style.css"
// import { Container } from './styles';

function Footer() {
  const titulo = window.localStorage.getItem("nome")
  return (
      <footer className="footer">
          {titulo}
      </footer>
  );
}

export default Footer;