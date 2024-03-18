import BeforeAfterComparison from '@/components/BeforeAfter';
import Features from '@/components/Features';
import QuillFooter from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import NewsletterSection from '@/components/Newsletter';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-hero">
        <Navbar />
        <HeroSection />
      </div>
      <BeforeAfterComparison />
      <Features />
      <NewsletterSection />
      <QuillFooter />
    </main>
  );
}
