import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import MarqueeSection from '@/components/home/MarqueeSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import WhyAmClean from '@/components/home/WhyAmClean';
import CoverageSection from '@/components/home/CoverageSection';
import TrustSection from '@/components/home/TrustSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <TrustSection />
      <ServicesOverview />
      <WhyAmClean />
      <CoverageSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
