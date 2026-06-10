import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #F5F7FA;
  padding: 5rem 1.25rem;
  @media (max-width: 768px) { padding: 4rem 1rem; }
`;

const Container = styled.div`max-width: 1000px; margin: 0 auto;`;

const SectionLabel = styled.p`
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.15em;
  text-transform: uppercase; color: #25D366; margin-bottom: 0.6rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.4rem); font-weight: 800; color: #0D1B2A;
  letter-spacing: -0.02em; line-height: 1.2; margin-bottom: 0.6rem;
`;

const SectionSub = styled.p`
  font-size: 0.95rem; color: #5A7184; max-width: 480px;
  line-height: 1.7; margin-bottom: 2.5rem;
`;

const Table = styled.div`
  background: #fff;
  border-radius: 20px;
  border: 1px solid #E2EAF0;
  overflow: hidden;
  overflow-x: auto;
`;

const TableInner = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
`;

const Thead = styled.thead`background: #0D1B2A;`;

const Th = styled.th<{ $highlight?: boolean }>`
  padding: 1.1rem 1.25rem;
  font-size: 0.82rem; font-weight: 700; text-align: center;
  color: ${({ $highlight }) => $highlight ? '#25D366' : 'rgba(255,255,255,0.6)'};
  letter-spacing: 0.04em; text-transform: uppercase;
  background: ${({ $highlight }) => $highlight ? 'rgba(37,211,102,0.08)' : 'transparent'};
  border-bottom: ${({ $highlight }) => $highlight ? '2px solid #25D366' : '1px solid rgba(255,255,255,0.08)'};
  &:first-child { text-align: left; }
`;

const Tr = styled.tr`
  &:nth-child(even) { background: #F8FAFB; }
  &:hover { background: #F0FDF6; }
`;

const Td = styled.td<{ $highlight?: boolean }>`
  padding: 0.9rem 1.25rem;
  font-size: 0.85rem; text-align: center; color: #0D1B2A;
  border-bottom: 1px solid #F0F4F8;
  background: ${({ $highlight }) => $highlight ? 'rgba(37,211,102,0.03)' : 'transparent'};
  &:first-child { text-align: left; font-weight: 500; color: #2C3E50; }
`;

const Check = styled.span`color: #25D366; font-size: 1rem; font-weight: 700;`;
const Cross = styled.span`color: #CBD5E1; font-size: 0.9rem;`;

const CtaRow = styled.div`
  display: flex; justify-content: center; margin-top: 2rem;
`;

const CtaBtn = styled.a`
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: #25D366; color: #fff;
  font-size: 0.95rem; font-weight: 700;
  padding: 0.875rem 2rem; border-radius: 999px;
  box-shadow: 0 4px 20px rgba(37,211,102,0.3);
  transition: all 0.2s;
  &:hover { background: #1BA84E; transform: translateY(-2px); }
`;

const FEATURES = [
  { label: 'Website Design & Dev', starter: true, growth: true, pro: true },
  { label: 'Mobile Optimization', starter: true, growth: true, pro: true },
  { label: 'On-Page SEO Setup', starter: true, growth: true, pro: true },
  { label: 'Google Business Profile', starter: false, growth: true, pro: true },
  { label: 'Social Media Management', starter: false, growth: true, pro: true },
  { label: 'Monthly SEO Blog Posts', starter: false, growth: '2/mo', pro: '4/mo' },
  { label: 'Lead Generation Ads', starter: false, growth: false, pro: true },
  { label: 'Monthly Analytics Report', starter: false, growth: true, pro: true },
  { label: 'Dedicated Account Manager', starter: false, growth: false, pro: true },
];

function Cell({ val }: { val: boolean | string }) {
  if (val === true) return <Check>✓</Check>;
  if (val === false) return <Cross>—</Cross>;
  return <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#25D366' }}>{val}</span>;
}

export default function Packages() {
  return (
    <Section id="packages">
      <Container>
        <SectionLabel>What&apos;s Included</SectionLabel>
        <SectionTitle>Compare our packages</SectionTitle>
        <SectionSub>Pick what fits your stage. Every plan can be customized for your exact needs.</SectionSub>
        <Table>
          <TableInner>
            <Thead>
              <tr>
                <Th style={{ width: '38%' }}>Feature</Th>
                <Th>Starter</Th>
                <Th $highlight>Growth</Th>
                <Th>Pro</Th>
              </tr>
            </Thead>
            <tbody>
              {FEATURES.map((f) => (
                <Tr key={f.label}>
                  <Td>{f.label}</Td>
                  <Td><Cell val={f.starter} /></Td>
                  <Td $highlight><Cell val={f.growth} /></Td>
                  <Td><Cell val={f.pro} /></Td>
                </Tr>
              ))}
            </tbody>
          </TableInner>
        </Table>
        <CtaRow>
          <CtaBtn href="#contact">Get a Custom Quote →</CtaBtn>
        </CtaRow>
      </Container>
    </Section>
  );
}
