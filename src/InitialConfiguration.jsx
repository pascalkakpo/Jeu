import React, { useState, useEffect } from 'react';

const InitialConfiguration = ({ onNext, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [backHover, setBackHover] = useState(false);
  const [gears, setGears] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    createGears();
  }, []);

  const createGears = () => {
    const newGears = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 3
    }));
    setGears(newGears);
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

  const SettingsIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="url(#settingsGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15C19.2662 15.3044 19.1946 15.6345 19.19 15.969C19.1854 16.3035 19.2479 16.6352 19.3734 16.9432C19.4989 17.2512 19.6844 17.5289 19.9176 17.7583C20.1509 17.9876 20.4268 18.1635 20.7278 18.2748L21 18.375" stroke="url(#settingsGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.60078 15C4.73459 15.3044 4.80619 15.6345 4.81079 15.969C4.81539 16.3035 4.75287 16.6352 4.62737 16.9432C4.50187 17.2512 4.31637 17.5289 4.08311 17.7583C3.84985 17.9876 3.57394 18.1635 3.27297 18.2748L3.00057 18.375" stroke="url(#settingsGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12H4" stroke="url(#settingsGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12H22" stroke="url(#settingsGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="settingsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  );

  const GearIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="url(#gearGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15C19.2662 15.3044 19.1946 15.6345 19.19 15.969C19.1854 16.3035 19.2479 16.6352 19.3734 16.9432C19.4989 17.2512 19.6844 17.5289 19.9176 17.7583C20.1509 17.9876 20.4268 18.1635 20.7278 18.2748L21 18.375" stroke="url(#gearGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.60078 15C4.73459 15.3044 4.80619 15.6345 4.81079 15.969C4.81539 16.3035 4.75287 16.6352 4.62737 16.9432C4.50187 17.2512 4.31637 17.5289 4.08311 17.7583C3.84985 17.9876 3.57394 18.1635 3.27297 18.2748L3.00057 18.375" stroke="url(#gearGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
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
    gear: {
      position: 'absolute',
      opacity: 0.08,
      color: '#ffffff',
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
      animation: 'rotate 4s infinite linear',
    },
    settingsIcon: {
      position: 'absolute',
      top: '-8px',
      right: 'calc(50% - 70px)',
      animation: 'pulse 3s infinite',
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
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
    featureList: {
      textAlign: 'left',
      marginBottom: '1.5rem',
      width: '100%',
      maxWidth: '300px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px',
      fontSize: '0.9rem',
      color: '#4b5563',
    },
    featureDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      marginRight: '10px',
      flexShrink: 0,
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
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
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
        '0 10px 20px rgba(59, 130, 246, 0.4)' : 
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
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
          @keyframes gearSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {gears.map(gear => (
        <div
          key={gear.id}
          style={{
            ...styles.gear,
            left: `${gear.x}%`,
            top: `${gear.y}%`,
            width: `${gear.size}px`,
            height: `${gear.size}px`,
            animation: `gearSpin ${gear.duration}s infinite linear`,
            animationDelay: `${gear.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"/>
            <path d="M19.4 15C19.2662 15.3044 19.1946 15.6345 19.19 15.969C19.1854 16.3035 19.2479 16.6352 19.3734 16.9432C19.4989 17.2512 19.6844 17.5289 19.9176 17.7583C20.1509 17.9876 20.4268 18.1635 20.7278 18.2748L21 18.375"/>
            <path d="M4.60078 15C4.73459 15.3044 4.80619 15.6345 4.81079 15.969C4.81539 16.3035 4.75287 16.6352 4.62737 16.9432C4.50187 17.2512 4.31637 17.5289 4.08311 17.7583C3.84985 17.9876 3.57394 18.1635 3.27297 18.2748L3.00057 18.375"/>
          </svg>
        </div>
      ))}

      <div style={styles.card}>
        <div style={styles.content}>
          <div style={styles.iconContainer}>
            <div style={styles.mainIcon}>
              <SettingsIcon />
            </div>
            <div style={styles.settingsIcon}>
              <GearIcon />
            </div>
          </div>
          
          <h1 style={styles.title}>Configuration Système</h1>
          
          <p style={styles.subtitle}>
            Installation et optimisation de votre système d'exploitation, pilotes et paramètres essentiels.
          </p>

          <div style={styles.featureList}>
            <div style={styles.featureItem}>
              <div style={styles.featureDot}></div>
              Installation du système d'exploitation
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureDot}></div>
              Mise à jour des pilotes
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureDot}></div>
              Paramètres de performance
            </div>
            <div style={styles.featureItem}>
              <div style={styles.featureDot}></div>
              Configuration réseau
            </div>
          </div>
          
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
          
          <div style={styles.progressIndicator}>2/4</div>
        </div>
      </div>
    </div>
  );
};

export default InitialConfiguration;