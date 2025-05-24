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

      {/* Absolute Dark Mode Toggle in top-right */}
      <div className="absolute top-4 right-4 z-50">
        <DarkModeToggle />
      </div>

      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <ProfileCard />
            <div className="flex flex-col flex-1">
              <Projects />
              <div className="flex flex-col lg:flex-row gap-4">
                <SkillSection />
                <CertificateSection />
              </div>
              <div className="mt-4">
                <GitHubContributionHeatmap username="Rakesh9556" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingDock />
    </>
  );
}

export default App;