
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Features } from '../components/sections/Features';
import { Testimonials } from '../components/sections/Testimonials';
import { CTA } from '../components/sections/CTA';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}