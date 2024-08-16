import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './components/HomePage';
import MoodTracking from './components/MoodTracking';
import ProfessionalSupport from './components/ProfessionalSupport';
import ProgressReports from './components/ProgressReports';
import IndividualSection from './components/IndividualSection';
import CouplesSection from './components/CouplesSection';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MentalHealthArticles from './components/MentalHealthArticles';
import FeaturesPage from './components/FeaturesPage';
import UnderstandingMentalHealth from './components/UnderstandingMentalHealth';
import ManagingStress from './components/ManagingStress';
import MeditationForBeginners from './components/MeditationForBeginners';
import MeditationTechniques from './components/MeditationTechniques';
import MindfulnessMeditation from './components/MindfulnessMeditation'; // Import the new component
import GuidedMeditation from './components/GuidedMeditation'; // Import the new component
import LovingKindnessMeditation from './components/LovingKindnessMeditation'; // Import the new component
import SelfCareTips from './components/SelfCareTips'; // Import the new component
import theme from './theme';
import QuestionPage from './components/QuestionPage';
import ContactPage from './components/ContactPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/Header';
import FooterWeb from './components/Footer';
import MoodEntryPage from './components/MoodEntry';
import DailyHabits from './components/DailyHabits';
// import {GoogleOAuthProvider} from ''

const App = () => (
  
  <ThemeProvider theme={theme}>
<GoogleOAuthProvider clientId="591707316014-p189a7264gm7kt5550353fpr59gi4lfo.apps.googleusercontent.com">
   <Header/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mood-tracking" element={<MoodTracking />} />
      <Route path="/professional-support" element={<ProfessionalSupport />} />
      <Route path="/progress-reports" element={<ProgressReports />} />
      <Route path="/individual" element={<IndividualSection />} />
      <Route path="/couple" element={<CouplesSection />} />
      <Route path="/mood-entry" element={<MoodEntryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mental-health-articles" element={<MentalHealthArticles />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/understanding-mental-health" element={<UnderstandingMentalHealth />} />
      <Route path="/managing-stress" element={<ManagingStress />} />
      <Route path="/meditation-for-beginners" element={<MeditationForBeginners />} />
      <Route path="/questions" element={<QuestionPage />} />
      <Route path="/meditation-techniques" element={<MeditationTechniques />} />
      <Route path="/meditation-techniques/mindfulness" element={<MindfulnessMeditation />} /> {/* Add new route */}
      <Route path="/meditation-techniques/guided" element={<GuidedMeditation />} /> {/* Add new route */}
      <Route path="/meditation-techniques/loving-kindness" element={<LovingKindnessMeditation />} /> {/* Add new route */}
      <Route path="/self-care-tips" element={<SelfCareTips />} /> {/* Add new route */}
      <Route path="/contact" element={<ContactPage />} />


      <Route path="/daily-habits" element={<DailyHabits />} />
    </Routes>
    <FooterWeb/>
    </GoogleOAuthProvider>
  </ThemeProvider>
);

export default App;
