import React from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.div`
  background: #ffffff;
  border-top: 1px solid #E2EAF0;
  border-bottom: 1px solid #E2EAF0;
  padding: 1.25rem 0;
  overflow: hidden;
`;

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Track = styled.div`
  display: flex;
  gap: 0;
  width: max-content;
  animation: ${scroll} 28s linear infinite;
  &:hover { animation-play-state: paused; }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0 2.5rem;
  border-right: 1px solid #E2EAF0;
  white-space: nowrap;
`;

const Dot = styled.span`
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #25D366;
  flex-shrink: 0;
`;

const Label = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #5A7184;
  letter-spacing: 0.04em;
`;

const ITEMS = [
  '50+ Small Businesses Served',
  'India & Worldwide',
  'Page 1 Google Rankings',
  '150% Average Traffic Growth',
  'Affordable Monthly Packages',
  'Transparent Monthly Reports',
  'No Lock-in Contracts',
  'Fast Turnaround Times',
];

export default function TrustBar() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <Section>
      <Track>
        {doubled.map((item, i) => (
          <Item key={i}>
            <Dot />
            <Label>{item}</Label>
          </Item>
        ))}
      </Track>
    </Section>
  );
}
