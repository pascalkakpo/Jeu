import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import InitialConfiguration from './InitialConfiguration';
import GameOptimization from './GameOptimize';
import ReadyScreen from './ReadyScreen';
import Dashboard from './Dashboard';
import Setting from './Setting';



const App = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleNext = () => {
    const screens = ['welcome', 'configuration', 'optimization', 'ready', 'dashboard'];
    const currentIndex = screens.indexOf(currentScreen);
    
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const screens = ['welcome', 'configuration', 'optimization', 'ready', 'dashboard'];
    const currentIndex = screens.indexOf(currentScreen);
    
    if (currentIndex > 0) {
      setCurrentScreen(screens[currentIndex - 1]);
    }
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNext={handleNext} />;
      case 'configuration':
        return <InitialConfiguration onNext={handleNext} onBack={handleBack} />;
      case 'optimization':
        return <GameOptimization onNext={handleNext} onBack={handleBack} />;
      case 'ready':
        return <ReadyScreen onNext={handleNext} onBack={handleBack} />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <WelcomeScreen onNext={handleNext} />;
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
      {renderCurrentScreen()}
    </div>
    
  );
};

export default App;