import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import AutomatedTrading from "@/components/AutomatedTrading";
import CaptureMore from "@/components/CaptureMore";
import MT5Section from "@/components/MT5Section";
import HowToStart from "@/components/HowToStart";
import TelegramBanner from "@/components/TelegramBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <AutomatedTrading />
      <CaptureMore />
      <MT5Section />
      <HowToStart />
      <TelegramBanner />
      <Footer />
    </>
  );
}
