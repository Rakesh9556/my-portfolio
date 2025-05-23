import './App.css';
import DarkModeToggle from './components/DarkModeToggle';
import GridBackground from "./components/GridBackground";
import FloatingDock from './components/FloatingDock';
import ProfileCard from './components/ProfileCard';
import Projects from './components/Projects';
import SkillSection from './components/SkillsSection';
import CertificateSection from './components/CertificatesSection';
import GitHubContributionHeatmap from './components/GitHubContributionHeatmap'; // import your component

function App() {
  return (
    <>
      <GridBackground />
      
      <div className="flex justify-between items-start px-4 w-full mx-auto">
        {/* Left side content */}
        <div className="flex flex-row gap-x-4">
          <ProfileCard />
          <div className='flex flex-col'>
            <Projects />
            <div className="flex gap-x-3">
              <SkillSection />
              <CertificateSection />
            </div>
            <div className="mt-4">
              <GitHubContributionHeatmap username="Rakesh9556" />
            </div>
          </div>
        </div>

        {/* Right side toggle */}
        <DarkModeToggle />
      </div>

      <FloatingDock />
    </>
  );
}

export default App;
