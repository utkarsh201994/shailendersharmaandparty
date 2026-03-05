'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Gallery from '@/components/gallery';
import Awards from '@/components/awards';
import Videos from '@/components/videos';
import Services from '@/components/services';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Videos />
      <Awards />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
