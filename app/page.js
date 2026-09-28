import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import Area from "@/components/Area";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Process />
        <Results />
        <Testimonials />
        <Quote />
        <Area />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}