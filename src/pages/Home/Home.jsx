import HeroSection from './HeroSection';
import ProgrammesSection from './ProgrammesSection';
import DirectorSection from './DirectorSection';
import MissionVisionSection from './MissionVisionSection';
import CampusSection from './CampusSection';
import TestimonialsSection from './TestimonialsSection';
import NewsSection from './NewsSection';
import StatsBand from '../../components/sections/StatsBand';
import JoinCta from '../../components/sections/JoinCta';
import './Home.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgrammesSection />
      <DirectorSection />
      <StatsBand />
      <MissionVisionSection />
      <CampusSection />
      <TestimonialsSection />
      <NewsSection />
      <JoinCta />
    </>
  );
}
