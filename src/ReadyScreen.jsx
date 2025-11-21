import React, { useState, useEffect } from 'react';

const ReadyScreen = ({ onNext, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [startHover, setStartHover] = useState(false);
  const [backHover, setBackHover] = useState(false);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    createConfetti();
  }, []);

  const createConfetti = () => {
    const colors = ['#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#ef4444'];
    const newConfetti = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setConfetti(newConfetti);
  };

  const handleStartCourse = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onNext) {
        onNext();
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
      <path d="M8 21H16" stroke="url(#trophyGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17V21" stroke="url(#trophyGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 4H17" stroke="url(#trophyGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 4V13C17 13.7956 16.6839 14.5587 16.1213 15.1213C15.5587 15.6839 14.7956 16 14 16H10C9.20435 16 8.44129 15.6839 7.87868 15.1213C7.31607 14.5587 7 13.7956 7 13V4" stroke="url(#trophyGradient)" strokeWidth="2"/>
      <path d="M7 4C7 3.44772 7.44772 3 8 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H8C7.44772 5 7 4.55228 7 4Z" stroke="url(#trophyGradient)" strokeWidth="2"/>
      <defs>
        <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17L4 12" stroke="url(#checkGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
    </svg>
  );

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px',
      margin: '0',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    confetti: {
      position: 'absolute',
      borderRadius: '2px',
    },
    card: {
      borderRadius: '20px',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
      padding: '30px 25px',
      textAlign: 'center',
      maxWidth: '450px',
      width: '100%',
      minHeight: '450px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
      opacity: isVisible ? 1 : 0,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
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
    checkIcon: {
      position: 'absolute',
      top: '-8px',
      right: 'calc(50% - 70px)',
      animation: 'pulse 2s infinite',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
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
      marginBottom: '2rem',
      lineHeight: '1.5',
      textAlign: 'center',
      maxWidth: '90%',
    },
    successMessage: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      padding: '15px',
      borderRadius: '12px',
      marginBottom: '2rem',
      fontSize: '1rem',
      fontWeight: '600',
      boxShadow: '0 6px 15px rgba(16, 185, 129, 0.3)',
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
      padding: '12px 20px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transform: backHover ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: backHover ? '0 6px 15px rgba(0, 0, 0, 0.15)' : 'none',
      backgroundColor: backHover ? '#f8fafc' : 'transparent',
    },
    startButton: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '14px 20px',
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
      transform: startHover ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: startHover ? 
        '0 12px 20px rgba(16, 185, 129, 0.4)' : 
        '0 6px 12px rgba(0, 0, 0, 0.1)',
    },
    buttonArrow: {
      transition: 'transform 0.3s ease',
      transform: startHover ? 'translateX(4px)' : 'translateX(0)',
    },
    progressIndicator: {
      fontSize: '0.9rem',
      color: '#9ca3af',
      fontWeight: '600',
      marginTop: '1rem',
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
            100% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.05); opacity: 0.8; }
          }
          @keyframes confettiFall {
            0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
        `}
      </style>

      {confetti.map(item => (
        <div
          key={item.id}
          style={{
            ...styles.confetti,
            left: `${item.x}%`,
            top: `-50px`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            backgroundColor: item.color,
            animation: `confettiFall ${item.duration}s linear infinite`,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}

      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <div style={styles.mainIcon}>
            <TrophyIcon />
          </div>
          <div style={styles.checkIcon}>
            <CheckIcon />
          </div>
        </div>
        
        <h1 style={styles.title}>Félicitations !</h1>
        
        <div style={styles.successMessage}>
          Votre PC Master Race est maintenant optimisé et prêt à l'emploi !
        </div>
        
        <p style={styles.subtitle}>
          Bienvenue dans la communauté des passionnés de gaming et de performance. 
          Votre machine est maintenant configurée pour offrir des performances maximales.
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
            <span>Explorer les fonctionnalités</span>
            <div style={styles.buttonArrow}>→</div>
          </button>
        </div>
        
        <div style={styles.progressIndicator}>4/4 - Terminé !</div>
      </div>
    </div>
  );
};

export default ReadyScreen;