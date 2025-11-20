import React, { useState, useEffect } from 'react';

const WelcomeScreen = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      onNext();
    }, 500);
  };

  const ComputerIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 18H4V6H20V18Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18V22" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 22H16" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CelebrationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2V4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 20V22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 12H2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 12H20" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.7782 4.22183L18.364 5.63605" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5.63605 18.364L4.22183 19.7782" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.7782 19.7782L18.364 18.364" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5.63605 5.63605L4.22183 4.22183" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" stroke="#f59e0b" strokeWidth="2"/>
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
    celebrationIcon: {
      position: 'absolute',
      top: '-5px',
      right: 'calc(50% - 80px)',
      animation: 'rotate 4s infinite linear',
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
    button: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '15px 30px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginBottom: '1.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      position: 'relative',
      overflow: 'hidden',
      transform: buttonHover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: buttonHover ? '0 8px 15px rgba(59, 130, 246, 0.4)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '200px',
    },
    buttonArrow: {
      transition: 'transform 0.3s ease',
      transform: buttonHover ? 'translateX(3px)' : 'translateX(0)',
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
          @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-8px); }
          }
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <div style={styles.mainIcon}>
            <ComputerIcon />
          </div>
          <div style={styles.celebrationIcon}>
            <CelebrationIcon />
          </div>
        </div>
        
        <h1 style={styles.title}>Bienvenue dans PC Master !</h1>
        
        <p style={styles.subtitle}>
          Félicitations pour votre nouvel ordinateur ! Apprenez à l'utiliser comme un pro.
        </p>
        
        <button 
          style={styles.button}
          onClick={handleNext}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          <span>Suivant</span>
          <div style={styles.buttonArrow}>→</div>
        </button>
        
        <div style={styles.progressIndicator}>1/4</div>
      </div>
    </div>
  );
};

export default WelcomeScreen;