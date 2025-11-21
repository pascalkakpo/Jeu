import React, { useState, useEffect } from 'react';

const GameOptimization = ({ onNext, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [backHover, setBackHover] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    createParticles();
  }, []);

  const createParticles = () => {
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  };

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
      <path d="M6 12H10" stroke="url(#gameGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 10V14" stroke="url(#gameGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 13H15.01" stroke="url(#gameGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 11H18.01" stroke="url(#gameGradient)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M17 16H7C4.79086 16 3 14.2091 3 12V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V12C21 14.2091 19.2091 16 17 16Z" stroke="url(#gameGradient)" strokeWidth="2"/>
      <defs>
        <linearGradient id="gameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
      </defs>
    </svg>
  );

  const SparklesIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 2L11 7.5L16 5L11 10.5L16.5 12L11 13.5L16 19L11 16.5L9.5 22L8 16.5L3 19L8 13.5L2.5 12L8 10.5L3 5L8 7.5L9.5 2Z" stroke="url(#sparkleGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
    </svg>
  );

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      margin: '0',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    particle: {
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '50%',
    },
    card: {
      borderRadius: '20px',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
      padding: '30px 25px',
      textAlign: 'center',
      maxWidth: '450px',
      width: '100%',
      height: 'auto',
      minHeight: 'auto',
      maxHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'space-around',
    },
    iconContainer: {
      position: 'relative',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
    },
    mainIcon: {
      animation: 'bounce 2s infinite alternate',
    },
    sparklesIcon: {
      position: 'absolute',
      top: '-8px',
      right: 'calc(50% - 70px)',
      animation: 'pulse 2s infinite',
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1rem',
      lineHeight: '1.2',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#6b7280',
      marginBottom: '1.5rem',
      lineHeight: '1.5',
      textAlign: 'center',
      maxWidth: '90%',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '1rem',
      width: '100%',
      maxWidth: '350px',
    },
    backButton: {
      background: 'transparent',
      color: '#6b7280',
      border: '2px solid #e5e7eb',
      borderRadius: '10px',
      padding: '12px 20px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: backHover ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: backHover ? '0 6px 15px rgba(0, 0, 0, 0.1)' : 'none',
      backgroundColor: backHover ? '#f8fafc' : 'transparent',
    },
    nextButton: {
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '12px 20px',
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
      transform: nextHover ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: nextHover ? 
        '0 10px 20px rgba(139, 92, 246, 0.4)' : 
        '0 6px 12px rgba(0, 0, 0, 0.1)',
    },
    buttonArrow: {
      transition: 'transform 0.3s ease',
      transform: nextHover ? 'translateX(3px)' : 'translateX(0)',
    },
    progressIndicator: {
      fontSize: '0.9rem',
      color: '#9ca3af',
      fontWeight: '600',
      background: 'rgba(255, 255, 255, 0.8)',
      padding: '6px 12px',
      borderRadius: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-8px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(180deg); }
            100% { transform: translateY(0px) rotate(360deg); }
          }
        `}
      </style>

      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            ...styles.particle,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s infinite ease-in-out`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div style={styles.card}>
        <div style={styles.content}>
          <div style={styles.iconContainer}>
            <div style={styles.mainIcon}>
              <GameControllerIcon />
            </div>
            <div style={styles.sparklesIcon}>
              <SparklesIcon />
            </div>
          </div>
          
          <h1 style={styles.title}>Optimisation Gaming</h1>
          
          <p style={styles.subtitle}>
            Activez le mode jeu, optimisez les paramètres graphiques et profitez de performances maximales 
            pour une expérience de jeu immersive sur votre nouvelle machine.
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
              <span>Continuer</span>
              <div style={styles.buttonArrow}>→</div>
            </button>
          </div>
          
          <div style={styles.progressIndicator}>3/4</div>
        </div>
      </div>
    </div>
  );
};

export default GameOptimization;