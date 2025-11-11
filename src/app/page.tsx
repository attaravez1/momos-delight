import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Menu } from '@/components/sections/menu';
import { Gallery } from '@/components/sections/gallery';
import { Reviews } from '@/components/sections/reviews';
import { Contact } from '@/components/sections/contact';
import { Info } from '@/components/sections/info';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Info />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
