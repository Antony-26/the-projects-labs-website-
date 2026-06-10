import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 64px;
  background: ${({ $scrolled }) => $scrolled ? 'rgba(13,27,42,0.97)' : '#0D1B2A'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(12px)' : 'none'};
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 2px 20px rgba(0,0,0,0.2)' : 'none'};
  transition: all 0.3s ease;
  @media (max-width: 768px) { padding: 0 1rem; height: 58px; }
`;

const LogoWrap = styled.a`display: flex; align-items: center; flex-shrink: 0;`;

const NavLinks = styled.div`
  display: flex; align-items: center; gap: 2rem;
  @media (max-width: 900px) { display: none; }
`;

const NavLink = styled.a`
  font-size: 0.875rem; font-weight: 500; color: rgba(255,255,255,0.75);
  letter-spacing: 0.02em; transition: color 0.2s;
  &:hover { color: #ffffff; }
`;

const RightGroup = styled.div`display: flex; align-items: center; gap: 0.5rem;`;

const WhatsAppBtn = styled.a`
  display: flex; align-items: center; gap: 0.4rem;
  background: #25D366; color: #ffffff;
  font-size: 0.82rem; font-weight: 600;
  padding: 0.5rem 1rem; border-radius: 999px;
  box-shadow: 0 4px 14px rgba(37,211,102,0.3);
  white-space: nowrap; transition: background 0.2s, transform 0.15s;
  &:hover { background: #1BA84E; transform: translateY(-1px); }
  svg { width: 15px; height: 15px; flex-shrink: 0; }
  @media (max-width: 480px) {
    font-size: 0; padding: 0.5rem; border-radius: 50%;
    width: 36px; height: 36px; justify-content: center;
    svg { width: 18px; height: 18px; }
  }
`;

const MobileMenuBtn = styled.button`
  display: none; flex-direction: column; gap: 5px;
  padding: 6px; background: none; border: none; cursor: pointer;
  @media (max-width: 900px) { display: flex; }
  span { display: block; width: 22px; height: 2px; background: rgba(255,255,255,0.8); border-radius: 2px; transition: all 0.3s; }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;
  @media (max-width: 900px) {
    display: ${({ $open }) => $open ? 'flex' : 'none'};
    flex-direction: column; position: fixed;
    top: 58px; left: 0; right: 0;
    background: #0D1B2A; padding: 1.25rem 1.5rem 2rem; gap: 0;
    border-top: 1px solid rgba(255,255,255,0.08); z-index: 999;
  }
`;

const MobileNavLink = styled.a`
  font-size: 1rem; font-weight: 500; color: rgba(255,255,255,0.8);
  padding: 0.9rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); display: block;
  &:hover { color: #25D366; }
  &:last-child { border-bottom: none; }
`;

const NAV_LINKS = [
  { label: 'Home', href: '#home' }, { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' }, { label: 'Why Us', href: '#why-us' },
  { label: 'Results', href: '#results' }, { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <Nav $scrolled={scrolled}>
        <LogoWrap href="#home">
          <Image src="/images/logo.png" alt="The Projects Labs" width={110} height={44}
            style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} priority />
        </LogoWrap>
        <NavLinks>
          {NAV_LINKS.map(l => <NavLink key={l.href} href={l.href}>{l.label}</NavLink>)}
        </NavLinks>
        <RightGroup>
          <WhatsAppBtn href="https://wa.me/919488569079" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L0 24l6.335-1.519A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.376l-.36-.214-3.732.895.929-3.624-.235-.372A9.818 9.818 0 1112 21.818z"/></svg>
            <span>Chat on WhatsApp</span>
          </WhatsAppBtn>
          <MobileMenuBtn onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </MobileMenuBtn>
        </RightGroup>
      </Nav>
      <MobileMenu $open={menuOpen}>
        {NAV_LINKS.map(l => (
          <MobileNavLink key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</MobileNavLink>
        ))}
      </MobileMenu>
    </>
  );
}
