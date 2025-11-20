import React, { useState, useEffect } from 'react';

const GameOptimization = ({ onNext, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [backHover, setBackHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      onNext();
    }, 500);
  };

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      onBack();
    }, 500);
  };

  const GameControllerIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H10" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 10V14" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 13H15.01" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 11H18.01" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17 16H7C4.79086 16 3 14.2091 3 12V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V12C21 14.2091 19.2091 16 17 16Z" stroke="#8b5cf6" strokeWidth="2"/>
    </svg>
  );

  const SparklesIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 2L11 7.5L16 5L11 10.5L16.5 12L11 13.5L16 19L11 16.5L9.5 22L8 16.5L3 19L8 13.5L2.5 12L8 10.5L3 5L8 7.5L9.5 2Z" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const styles = {
    container: {
      minHeight: '91vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      margin: '0',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      overflow: 'hidden',
      position: 'relative',
    },
    card: {
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      padding: '40px 30px',
      textAlign: 'center',
      maxWidth: '450px',
      width: '100%',
      minHeight: '500px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',

      alignItems: 'center',
      transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    iconContainer: {
      position: 'relative',
      marginBottom: '25px',
      display: 'flex',
      justifyContent: 'center',
    },
    mainIcon: {
      animation: 'bounce 2s infinite alternate',
    },
    sparklesIcon: {
      position: 'absolute',
      top: '-5px',
      right: 'calc(50% - 80px)',
      animation: 'pulse 2s infinite',
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1rem',
      lineHeight: '1.2',
      textAlign: 'center',
    },
   
    subtitle: {
      fontSize: '1.1rem',
      marginBottom: '2.5rem',
      lineHeight: '1.6',
      textAlign: 'center',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '1.5rem',
      width: '100%',
      maxWidth: '350px',
    },
    backButton: {
      background: 'transparent',
      color: '#6b7280',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      padding: '15px 25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: backHover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: backHover ? '0 5px 10px rgba(0, 0, 0, 0.1)' : 'none',
      backgroundColor: backHover ? '#f9fafb' : 'transparent',
    },
    nextButton: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      border: 'none',
      borderRadius: '10px',
      padding: '15px 25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      position: 'relative',
      overflow: 'hidden',
      transform: nextHover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: nextHover ? '0 8px 15px rgba(59, 130, 246, 0.4)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    buttonArrow: {
      transition: 'transform 0.3s ease',
      transform: nextHover ? 'translateX(3px)' : 'translateX(0)',
    },
    progressIndicator: {
      fontSize: '0.9rem',
      color: '#9ca3af',
      fontWeight: '500',
      marginTop: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <div style={styles.mainIcon}>
            <GameControllerIcon />
          </div>
          <div style={styles.sparklesIcon}>
            <SparklesIcon />
          </div>
        </div>
        
        <h1 style={styles.title}>Optimisez vos Jeux</h1>
        
        <p style={styles.subtitle}>
          Réglez les paramètres graphiques pour la meilleure expérience de jeu sur votre nouvelle machine.
        </p>
        
        <div style={styles.buttonsContainer}>
          <button 
            style={styles.backButton}
            onClick={handleBack}
            onMouseEnter={() => setBackHover(true)}
            onMouseLeave={() => setBackHover(false)}
          >
            Retour
          </button>
          <button 
            style={styles.nextButton}
            onClick={handleNext}
            onMouseEnter={() => setNextHover(true)}
            onMouseLeave={() => setNextHover(false)}
          >
            <span>Suivant</span>
            <div style={styles.buttonArrow}>→</div>
          </button>
        </div>
        
        <div style={styles.progressIndicator}>3/4</div>
      </div>
    </div>
  );
};

export default GameOptimization;