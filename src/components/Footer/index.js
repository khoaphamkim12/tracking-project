// Footer.js
import React from "react";
import styled from "styled-components";

// Footer Container
const FooterContainer = styled.footer`
  background-color: #05bd93;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 10px;
  }
`;

// Footer Links
const FooterLinks = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ffffffb3;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

// Footer Text
const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinks>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </FooterLinks>
            <FooterText>&copy; 2024 Your Company. All rights reserved.</FooterText>
        </FooterContainer>
    );
};

export default Footer;
