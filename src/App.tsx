import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FileTransfer from './components/FileTransfer';
import Payments from './components/Payments';
import BrandingCarousel from './components/BrandingCarousel';
import StepByStep from './components/StepByStep';
import Pricing from './components/Pricing';
import FounderMemo from './components/FounderMemo';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FileTransfer />
        <Payments />
        <BrandingCarousel />
        <StepByStep />
        <Pricing />
        <FounderMemo />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
