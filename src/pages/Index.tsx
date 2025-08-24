
import PsycPageLayout from '@/components/PsycPageLayout';
import PsycHero from '@/components/PsycHero';
import PsycAbout from '@/components/PsycAbout';
import PsycCapabilities from '@/components/PsycCapabilities';
import PsycIntegration from '@/components/PsycIntegration';
import PsycRnD from '@/components/PsycRnD';
import PsycContact from '@/components/PsycContact';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PsycPageLayout>
      <SEO 
        title="PSYC Aerospace and Defence Industries - AI-First Payload Systems" 
        description="PSYC Aerospace and Defence: Pioneering AI-first payload systems, computer vision & automation for next-gen drones. Compatible with ArduPilot, DJI & more."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['aerospace', 'defence', 'AI payload systems', 'computer vision', 'drone automation', 'ArduPilot', 'DJI integration', 'autonomous systems']}
      />
      <PsycHero />
      <PsycAbout />
      <PsycCapabilities />
      <PsycIntegration />
      <PsycRnD />
      <PsycContact />
    </PsycPageLayout>
  );
};

export default Index;
