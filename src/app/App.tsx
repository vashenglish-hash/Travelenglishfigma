import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { TargetAudience } from './components/TargetAudience';
import { ProgramSection } from './components/ProgramSection';
import { WhySpecial } from './components/WhySpecial';
import { Requirements } from './components/Requirements';
import { Pricing } from './components/Pricing';
import { CallToAction } from './components/CallToAction';
import { EnrollmentModal } from './components/EnrollmentModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection onEnrollClick={handleEnrollClick} />
      <TargetAudience />
      <ProgramSection />
      <WhySpecial />
      <Requirements />
      <Pricing onEnrollClick={handleEnrollClick} />
      <CallToAction onEnrollClick={handleEnrollClick} />
      <EnrollmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
