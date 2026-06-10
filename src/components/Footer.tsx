import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const FooterWrap = styled.footer`
  background: #0D1B2A;
  padding: 3.5rem 1.25rem 2rem;
  border-top: 1px solid rgba(255,255,255,0.08);
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Tagline = styled.p`
  font-size: 0.82rem;
  color: rgba(255,255,255,0.45);
  line-height: 1.7;
  max-width: 240px;
`;

const Socials = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.25rem;
`;

const SocialLink = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.55);
  font-size: 0.7rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: rgba(37,211,102,0.15);
    border-color: rgba(37,211,102,0.35);
    color: #25D366;
  }
`;

const ColTitle = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin-bottom: 1rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.82rem;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  line-height: 1.5;
  transition: color 0.2s;

  &:hover { color: #25D366; }

  span:first-child {
    font-size: 0.9rem;
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const NavItem = styled.a`
  font-size: 0.85rem;
  color: rgba(255,255,255,0.5);
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover { color: #ffffff; }
  &::before { content: '→'; font-size: 0.7rem; color: #25D366; opacity: 0; transition: opacity 0.2s; }
  &:hover::before { opacity: 1; }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.75rem;
  flex-wrap: wrap;
  gap: 0.75rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.76rem;
  color: rgba(255,255,255,0.3);
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37,211,102,0.08);
  border: 1px solid rgba(37,211,102,0.15);
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.4);
`;

const WhatsAppFloat = styled.a`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.5);
  z-index: 999;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 28px rgba(37,211,102,0.6);
  }

  svg { width: 26px; height: 26px; fill: #ffffff; }
`;

const WA_SVG = () => (
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L0 24l6.335-1.519A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.376l-.36-.214-3.732.895.929-3.624-.235-.372A9.818 9.818 0 1112 21.818z"/></svg>
);

export default function Footer() {
  return (
    <>
      <FooterWrap>
        <Container>
          <TopRow>
            {/* Brand col */}
            <Brand>
              <Image src="/images/logo.png" alt="The Projects Labs" width={110} height={44}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
              <Tagline>
                Helping small businesses in India and worldwide get found online, attract customers, and grow sustainably.
              </Tagline>
              <Socials>
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</SocialLink>
                <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</SocialLink>
              </Socials>
            </Brand>

            {/* Contact col */}
            <div>
              <ColTitle>Contact Us</ColTitle>
              <ContactList>
                <ContactItem href="mailto:info@theprojectslabs.com">
                  <span>📧</span>
                  <span>info@theprojectslabs.com</span>
                </ContactItem>
                <ContactItem href="tel:+919488569079">
                  <span>📞</span>
                  <span>+91 94885 69079</span>
                </ContactItem>
                <ContactItem as="span">
                  <span>📍</span>
                  <span>Nagercoil – 629002,<br />Tamil Nadu, India</span>
                </ContactItem>
                <ContactItem href="https://wa.me/919488569079" target="_blank" rel="noopener noreferrer">
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
                </ContactItem>
              </ContactList>
            </div>

            {/* Nav col */}
            <div>
              <ColTitle>Quick Links</ColTitle>
              <NavList>
                <NavItem href="#home">Home</NavItem>
                <NavItem href="#services">Services</NavItem>
                <NavItem href="#why-us">Why Us</NavItem>
                <NavItem href="#results">Results</NavItem>
                <NavItem href="#contact">Contact</NavItem>
              </NavList>
            </div>
          </TopRow>

          <BottomRow>
            <Copyright>Copyright © 2024 The Projects Labs. All rights reserved.</Copyright>
            <Badge>🇮🇳 Proudly serving India & worldwide 🌐</Badge>
          </BottomRow>
        </Container>
      </FooterWrap>

      <WhatsAppFloat href="https://wa.me/919488569079" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WA_SVG />
      </WhatsAppFloat>
    </>
  );
}
