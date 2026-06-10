import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  background: linear-gradient(160deg, #0D1B2A 0%, #1A2E42 60%, #0D1B2A 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 1.25rem 60px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -200px; right: -200px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(37,211,102,0.07) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(37,211,102,0.12);
  border: 1px solid rgba(37,211,102,0.25);
  color: #25D366;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
  animation: ${fadeUp} 0.6s ease both;
`;

const Headline = styled.h1`
  font-size: clamp(1.75rem, 6vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  max-width: 820px;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
  animation: ${fadeUp} 0.6s ease 0.1s both;

  span { color: #25D366; }
`;

const Subheadline = styled.p`
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  color: rgba(255,255,255,0.65);
  max-width: 560px;
  line-height: 1.75;
  margin-bottom: 2rem;
  animation: ${fadeUp} 0.6s ease 0.2s both;
  padding: 0 0.5rem;
`;

const Pillars = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  animation: ${fadeUp} 0.6s ease 0.3s both;
  width: 100%;
  padding: 0 0.5rem;
`;

const Pillar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 0.55rem 1rem;
  border-radius: 999px;
  color: rgba(255,255,255,0.85);
  font-size: 0.82rem;
  font-weight: 500;
  white-space: nowrap;
`;

const CTARow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.75rem;
  animation: ${fadeUp} 0.6s ease 0.4s both;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0 0.5rem;
  }
`;

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #25D366;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.875rem 1.75rem;
  border-radius: 999px;
  box-shadow: 0 4px 20px rgba(37,211,102,0.35);
  transition: all 0.2s;

  &:hover { background: #1BA84E; transform: translateY(-2px); }
  svg { width: 18px; height: 18px; flex-shrink: 0; }
`;

const BtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: transparent;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.875rem 1.75rem;
  border-radius: 999px;
  border: 1.5px solid rgba(255,255,255,0.25);
  transition: all 0.2s;

  &:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.06); }
`;

const TrustBadge = styled.p`
  color: rgba(255,255,255,0.45);
  font-size: 0.82rem;
  animation: ${fadeUp} 0.6s ease 0.5s both;
  span { color: #FFD700; margin-right: 0.3rem; }
`;

export default function Hero() {
  return (
    <Section id="home">
      <Tag>🇮🇳 India & Worldwide</Tag>
      <Headline>
        SEO, Websites & Social Media That Drive <span>Real Results</span> for Small Businesses.
      </Headline>
      <Subheadline>
        Helping small companies in India and worldwide get found online, attract customers, and grow sustainably. No bloated agency retainers — just expert, affordable digital strategies that work.
      </Subheadline>
      <Pillars>
        <Pillar><span>⚡</span><span>High-Converting Websites</span></Pillar>
        <Pillar><span>📈</span><span>SEO That Ranks</span></Pillar>
        <Pillar><span>📱</span><span>Active Social Media</span></Pillar>
      </Pillars>
      <CTARow>
        <BtnPrimary href="https://wa.me/919488569079" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L0 24l6.335-1.519A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.376l-.36-.214-3.732.895.929-3.624-.235-.372A9.818 9.818 0 1112 21.818z"/></svg>
          Chat on WhatsApp
        </BtnPrimary>
        <BtnSecondary href="#contact">Get a Free Consultation →</BtnSecondary>
      </CTARow>
      <TrustBadge><span>⭐⭐⭐⭐⭐</span> Trusted by 50+ small businesses globally.</TrustBadge>
    </Section>
  );
}
