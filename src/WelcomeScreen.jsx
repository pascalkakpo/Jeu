import React, { useState, useEffect } from 'react';

const WelcomeScreen = ({ onNext }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    createParticles();
  }, []);

  const createParticles = () => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 2 + 2
    }));
    setParticles(newParticles);
  };

  const handleNext = () => {
    setIsVisible(false);
    setTimeout(() => {
      onNext();
    }, 500);
  };

  const ComputerIcon = () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 18H4V6H20V18Z" 
        stroke="url(#gradient)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 18V22" 
        stroke="url(#gradient)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8 22H16" 
        stroke="url(#gradient)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  );

  const CelebrationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M12 2V4" 
        stroke="url(#celebrate)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M12 20V22" 
        stroke="url(#celebrate)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M4 12H2" 
        stroke="url(#celebrate)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M22 12H20" 
        stroke="url(#celebrate)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M19.7782 4.22183L18.364 5.63605" 
        stroke="url(#celebrate)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M5.63605 18.364L4.22183 19.7782" 
        stroke="url(#celebrate)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M19.7782 19.7782L18.364 18.364" 
        stroke="url(#celebrate)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M5.63605 5.63605L4.22183 4.22183" 
        stroke="url(#celebrate)" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" 
        stroke="url(#celebrate)" 
        strokeWidth="2"
      />
      <defs>
        <linearGradient id="celebrate" x1="0%" y1="0%" x2="100%" y2="100%">
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
      background: 'rgba(255, 255, 255, 0.25)',
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
    celebrationIcon: {
      position: 'absolute',
      top: '-8px',
      right: 'calc(50% - 70px)',
      animation: 'rotate 4s infinite linear',
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    button: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      padding: '14px 25px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      position: 'relative',
      overflow: 'hidden',
      transform: buttonHover ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: buttonHover ? 
        '0 10px 20px rgba(59, 130, 246, 0.4)' : 
        '0 6px 12px rgba(0, 0, 0, 0.1)',
      width: '200px',
    },
    buttonArrow: {
      transition: 'transform 0.3s ease',
      transform: buttonHover ? 'translateX(3px)' : 'translateX(0)',
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
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
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
          }}
        />
      ))}

      <div style={styles.card}>
        <div style={styles.content}>
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
            Félicitations pour votre nouvel ordinateur ! 
            Nous allons vous guider pour maîtriser votre appareil comme un véritable expert.
          </p>
          
          <button 
            style={styles.button}
            onClick={handleNext}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            <span>Commencer</span>
            <div style={styles.buttonArrow}>→</div>
          </button>
          
          <div style={styles.progressIndicator}>1/4</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;