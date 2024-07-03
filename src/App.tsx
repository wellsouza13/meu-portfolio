import React, { useState, useEffect } from 'react';
import './index.css';
import Header, { ResumeData, SharedData } from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [sharedData, setSharedData] = useState<SharedData | null>(null);

  useEffect(() => {
    loadSharedData();
    applyPickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId);
  }, []);

  const loadResumeFromPath = async (path: string) => {
    try {
      const response = await fetch(path);
      const data: ResumeData = await response.json();
      setResumeData(data);
    } catch (error) {
      alert(error);
    }
  };

  const loadSharedData = async () => {
    try {
      const response = await fetch('portfolio_shared_data.json');
      const data: SharedData = await response.json();
      setSharedData(data);
      document.title = data.basic_info.name;
    } catch (error) {
      alert(error);
    }
  };

  const applyPickedLanguage = (pickedLanguage: string, oppositeLangIconId: string) => {
    swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    const resumePath = document.documentElement.lang === window.$primaryLanguage
      ? 'res_primaryLanguage.json'
      : 'res_secondaryLanguage.json';
    loadResumeFromPath(resumePath);
  };

  const swapCurrentlyActiveLanguage = (oppositeLangIconId: string) => {
    const pickedLangIconId = oppositeLangIconId === window.$primaryLanguageIconId
      ? window.$secondaryLanguageIconId
      : window.$primaryLanguageIconId;
    document.getElementById(oppositeLangIconId)?.removeAttribute('filter');
    document.getElementById(pickedLangIconId)?.setAttribute('filter', 'brightness(40%)');
  };

  if (!resumeData || !sharedData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() =>
            applyPickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId)
          }
          style={{ display: 'inline' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              applyPickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId);
            }
          }}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
            id={window.$primaryLanguageIconId}
          ></span>
        </div>
        <div
          onClick={() =>
            applyPickedLanguage(window.$secondaryLanguage, window.$primaryLanguageIconId)
          }
          style={{ display: 'inline' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              applyPickedLanguage(window.$secondaryLanguage, window.$primaryLanguageIconId);
            }
          }}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-poland"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
          ></span>
        </div>
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Projects
        resumeProjects={resumeData.projects}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Experience
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
};

export default App;
