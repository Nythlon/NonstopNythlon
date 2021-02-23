import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .footer {
    text-align: center;
    background-color: #222527;
    margin: auto;
    color: white;
    width: 100%;
    padding-top: 20px;
    border-top: 2px solid white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const Footer = () => (
  <Styles>
    <div className="footer-container">
      <footer className="footer">
        <p>Nonstop Nythlon, Copyright &copy; 2021</p>
      </footer>
    </div>
  </Styles>
);