import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import Results from '@/components/Results';
import Packages from '@/components/Packages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Marketing & SEO Services for Small Businesses | The Projects Labs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Affordable website development, SEO, and social media management tailored for small businesses in India and globally. Get your free strategy call today." />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <Results />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
