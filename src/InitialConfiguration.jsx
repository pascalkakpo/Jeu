import React, { useState, useEffect } from 'react';

const InitialConfiguration = ({ onNext, onBack }) => {
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

  const SettingsIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15C19.2662 15.3044 19.1946 15.6345 19.19 15.969C19.1854 16.3035 19.2479 16.6352 19.3734 16.9432C19.4989 17.2512 19.6844 17.5289 19.9176 17.7583C20.1509 17.9876 20.4268 18.1635 20.7278 18.2748L21 18.375" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.60078 15C4.73459 15.3044 4.80619 15.6345 4.81079 15.969C4.81539 16.3035 4.75287 16.6352 4.62737 16.9432C4.50187 17.2512 4.31637 17.5289 4.08311 17.7583C3.84985 17.9876 3.57394 18.1635 3.27297 18.2748L3.00057 18.375" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12H4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12H22" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const GearIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15C19.2662 15.3044 19.1946 15.6345 19.19 15.969C19.1854 16.3035 19.2479 16.6352 19.3734 16.9432C19.4989 17.2512 19.6844 17.5289 19.9176 17.7583C20.1509 17.9876 20.4268 18.1635 20.7278 18.2748L21 18.375" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.60078 15C4.73459 15.3044 4.80619 15.6345 4.81079 15.969C4.81539 16.3035 4.75287 16.6352 4.62737 16.9432C4.50187 17.2512 4.31637 17.5289 4.08311 17.7583C3.84985 17.9876 3.57394 18.1635 3.27297 18.2748L3.00057 18.375" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
      animation: 'rotate 3s infinite linear',
    },
    settingsIcon: {
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
      color: '#6b7280',
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
      color: 'white',
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
      position: 'relative',
      overflow: 'hidden',
      transform: nextHover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: nextHover ? '0 8px 15px rgba(59, 130, 246, 0.4)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
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
        `}
      </style>

      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <div style={styles.mainIcon}>
            <SettingsIcon />
          </div>
          <div style={styles.settingsIcon}>
            <GearIcon />
          </div>
        </div>
        
        <h1 style={styles.title}>Configuration Initiale</h1>
        
        <p style={styles.subtitle}>
          Mettez en place votre système d'exploitation et vos pilotes pour une performance optimale.
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
            Suivant
          </button>
        </div>
        
        <div style={styles.progressIndicator}>2/4</div>
      </div>
    </div>
  );
};

export default InitialConfiguration;