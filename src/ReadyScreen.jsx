import React, { useState, useEffect } from 'react';

const ReadyScreen = ({ onNext, onBack }) => {  // Ajout de onNext dans les props
  const [isVisible, setIsVisible] = useState(false);
  const [startHover, setStartHover] = useState(false);
  const [backHover, setBackHover] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStartCourse = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onNext) {
        onNext(); // Navigation vers le dashboard
      }
    }, 500);
  };

  const handleBack = () => {
    setIsVisible(false);
    setTimeout(() => {
      onBack();
    }, 500);
  };

  const TrophyIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21H16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17V21" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 4H17" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 4V13C17 13.7956 16.6839 14.5587 16.1213 15.1213C15.5587 15.6839 14.7956 16 14 16H10C9.20435 16 8.44129 15.6839 7.87868 15.1213C7.31607 14.5587 7 13.7956 7 13V4" stroke="#10b981" strokeWidth="2"/>
      <path d="M7 4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H8C7.44772 5 7 4.55228 7 4Z" stroke="#10b981" strokeWidth="2"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
    checkIcon: {
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
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '1.5rem',
      width: '100%',
      maxWidth: '300px',
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: backHover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: backHover ? '0 5px 10px rgba(0, 0, 0, 0.1)' : 'none',
      backgroundColor: backHover ? '#f9fafb' : 'transparent',
    },
    startButton: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '15px 25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      position: 'relative',
      overflow: 'hidden',
      transform: startHover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: startHover ? '0 8px 15px rgba(16, 185, 129, 0.4)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    buttonArrow: {
      transition: 'transform 0.3s ease',
      transform: startHover ? 'translateX(3px)' : 'translateX(0)',
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
            100% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        `}
      </style>

      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <div style={styles.mainIcon}>
            <TrophyIcon />
          </div>
          <div style={styles.checkIcon}>
            <CheckIcon />
          </div>
        </div>
        
        <h1 style={styles.title}>Vous êtes Prêt !</h1>
        
        <p style={styles.subtitle}>
          Profitez de votre PC Master Race au maximum. Bienvenue dans la communauté !
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
            style={styles.startButton}
            onClick={handleStartCourse}
            onMouseEnter={() => setStartHover(true)}
            onMouseLeave={() => setStartHover(false)}
          >
            <span>Commencer le cours</span>
            <div style={styles.buttonArrow}>→</div>
          </button>
        </div>
        
        <div style={styles.progressIndicator}>4/4</div>
      </div>
    </div>
  );
};

export default ReadyScreen;