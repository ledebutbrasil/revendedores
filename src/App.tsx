import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { ProductList } from './components/ProductList';
import { VideoCarousel } from './components/VideoCarousel';
import { Testimonials } from './components/Testimonials';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-ink font-sora antialiased text-rendering-optimize-legibility">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <ProductList />
        <VideoCarousel />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
