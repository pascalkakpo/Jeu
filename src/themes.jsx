import React, { useState } from 'react';

const ThemesPage = ({ onBackToDashboard, onNavigateToQuestion }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    container: {
      maxWidth: '450px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#f8f9fa',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      padding: '16px 0',
      flexShrink: 0,
      position: 'relative',
    },
    backButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      color: '#666',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
    },
    titleContainer: {
      flex: 1,
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1a1a1a',
      margin: 0,
    },
    menuIcon: {
      fontSize: '24px',
      color: '#666',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      position: 'relative',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    intro: {
      fontSize: '16px',
      color: '#666',
      textAlign: 'center',
      marginBottom: '24px',
      lineHeight: '1.5',
      flexShrink: 0,
    },
    themesContainer: {
      flex: 1,
      overflowY: 'auto',
      paddingBottom: '10px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
      border: '1px solid #f0f0f0',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    cardHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '16px',
    },
    iconContainer: {
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    cardContent: {
      flex: 1,
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: '0 0 4px 0',
      transition: 'all 0.2s ease',
    },
    cardDescription: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.4',
      margin: '0 0 8px 0',
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '12px',
    },
    level: {
      fontSize: '12px',
      fontWeight: '600',
      padding: '4px 12px',
      borderRadius: '12px',
      backgroundColor: '#f0f0f0',
      transition: 'all 0.2s ease',
    },
    questions: {
      fontSize: '14px',
      color: '#666',
    },
    progressContainer: {
      height: '6px',
      backgroundColor: '#e9ecef',
      borderRadius: '3px',
      marginTop: '8px',
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      borderRadius: '3px',
      transition: 'width 0.3s ease',
    },
    startButton: {
      backgroundColor: '#4a00e0',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '12px 24px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '16px',
      width: '100%',
      transition: 'all 0.2s ease',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px',
    },
    modal: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '24px',
      maxWidth: '400px',
      width: '100%',
      maxHeight: '80vh',
      overflowY: 'auto',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      animation: 'modalAppear 0.3s ease',
    },
    modalHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
    },
    modalIcon: {
      width: '60px',
      height: '60px',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '16px',
      fontSize: '28px',
    },
    modalTitle: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#1a1a1a',
      margin: 0,
    },
    modalDescription: {
      fontSize: '16px',
      color: '#666',
      lineHeight: '1.5',
      marginBottom: '20px',
    },
    modalStats: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      padding: '16px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
    },
    stat: {
      textAlign: 'center',
    },
    statValue: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#4a00e0',
    },
    statLabel: {
      fontSize: '12px',
      color: '#666',
      marginTop: '4px',
    },
    closeButton: {
      backgroundColor: 'transparent',
      color: '#666',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '12px 20px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      marginRight: '12px',
      transition: 'all 0.2s ease',
      flex: 1,
    },
    actionButtons: {
      display: 'flex',
      gap: '12px',
      marginTop: '20px',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
      padding: '8px',
      minWidth: '150px',
      zIndex: 100,
      marginTop: '8px',
    },
    dropdownItem: {
      padding: '12px 16px',
      fontSize: '14px',
      color: '#333',
      cursor: 'pointer',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
    },
  };

  // Données des thèmes avec couleurs pastel
  const themes = [
    {
      id: 1,
      icon: '🛡️',
      title: 'Sécurité & Protection',
      description: 'Protégez votre ordinateur contre les menaces en ligne et apprenez les bonnes pratiques de sécurité numérique.',
      level: 'Débutant',
      questions: '14/15',
      progress: 93,
      color: '#ffd6e7',
      progressColor: '#ff6b9d',
      totalQuestions: 15,
      completedQuestions: 14,
      timeEstimate: '45 min',
    },
    {
      id: 2,
      title: 'Améliorer les performances',
      icon: '⚡',
      description: 'Optimisez la vitesse et la réactivité de votre PC avec des techniques simples et efficaces.',
      level: 'Intermédiaire',
      questions: '8/12',
      progress: 67,
      color: '#fff4c2',
      progressColor: '#ffd43b',
      totalQuestions: 12,
      completedQuestions: 8,
      timeEstimate: '35 min',
    },
    {
      id: 3,
      title: 'Maintenance du système',
      icon: '🔧',
      description: 'Apprenez à entretenir et dépanner votre ordinateur pour le garder en parfait état.',
      level: 'Débutant',
      questions: '10/10',
      progress: 100,
      color: '#d0ebff',
      progressColor: '#339af0',
      totalQuestions: 10,
      completedQuestions: 10,
      timeEstimate: '30 min',
    },
    {
      id: 4,
      title: 'Gestion des fichiers',
      icon: '📁',
      description: 'Organisez et maîtrisez vos documents et dossiers pour retrouver facilement vos fichiers.',
      level: 'Débutant',
      questions: '6/10',
      progress: 60,
      color: '#e5dbff',
      progressColor: '#845ef7',
      totalQuestions: 10,
      completedQuestions: 6,
      timeEstimate: '25 min',
    },
    {
      id: 5,
      title: 'Réseau et Wi-Fi',
      icon: '📶',
      description: 'Configurez et résolvez les problèmes de connexion pour une navigation optimale.',
      level: 'Intermédiaire',
      questions: '5/8',
      progress: 63,
      color: '#d3f9d8',
      progressColor: '#51cf66',
      totalQuestions: 8,
      completedQuestions: 5,
      timeEstimate: '40 min',
    },
    {
      id: 6,
      title: 'Communication & Email',
      icon: '📧',
      description: 'Maîtrisez les outils de communication numérique pour rester connecté efficacement.',
      level: 'Débutant',
      questions: '12/15',
      progress: 80,
      color: '#ffec99',
      progressColor: '#ffd43b',
      totalQuestions: 15,
      completedQuestions: 12,
      timeEstimate: '50 min',
    },
    {
      id: 7,
      title: 'Personnalisation',
      icon: '🎨',
      description: 'Personnalisez votre environnement de travail pour plus de confort et de productivité.',
      level: 'Intermédiaire',
      questions: '7/10',
      progress: 70,
      color: '#ffdeeb',
      progressColor: '#f783ac',
      totalQuestions: 10,
      completedQuestions: 7,
      timeEstimate: '35 min',
    },
    {
      id: 8,
      title: 'Sauvegarde des données',
      icon: '💾',
      description: 'Apprenez à sauvegarder vos fichiers importants pour ne jamais les perdre.',
      level: 'Débutant',
      questions: '3/8',
      progress: 38,
      color: '#e3fafc',
      progressColor: '#15aabf',
      totalQuestions: 8,
      completedQuestions: 3,
      timeEstimate: '20 min',
    },
    {
      id: 9,
      title: 'Navigation internet',
      icon: '🌐',
      description: 'Surfez en toute sécurité et apprenez à utiliser efficacement les navigateurs web.',
      level: 'Débutant',
      questions: '9/12',
      progress: 75,
      color: '#fff9db',
      progressColor: '#fcc419',
      totalQuestions: 12,
      completedQuestions: 9,
      timeEstimate: '40 min',
    },
    {
      id: 10,
      title: 'Installation de logiciels',
      icon: '📥',
      description: 'Installez et désinstallez des programmes en toute sécurité.',
      level: 'Intermédiaire',
      questions: '4/6',
      progress: 67,
      color: '#f8f0fc',
      progressColor: '#cc5de8',
      totalQuestions: 6,
      completedQuestions: 4,
      timeEstimate: '25 min',
    },
  ];

  const handleCardClick = (theme) => {
    // Au lieu d'ouvrir un modal, naviguer directement vers la page de question
    if (onNavigateToQuestion) {
      onNavigateToQuestion(theme);
    } else {
      // Fallback si la prop n'est pas fournie
      setSelectedTheme(theme);
    }
  };

  const handleCloseModal = () => {
    setSelectedTheme(null);
  };

  const handleStartLearning = () => {
    if (selectedTheme) {
      // Naviguer vers la page de question quand on clique sur "Continuer à apprendre"
      if (onNavigateToQuestion) {
        onNavigateToQuestion(selectedTheme);
      } else {
        alert(`Démarrage du module : ${selectedTheme.title}`);
      }
      setSelectedTheme(null);
    }
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownItemClick = (action) => {
    setIsMenuOpen(false);
    switch(action) {
      case 'profile':
        alert('Ouvrir le profil');
        break;
      case 'settings':
        alert('Ouvrir les paramètres');
        break;
      case 'help':
        alert('Ouvrir l\'aide');
        break;
      default:
        break;
    }
  };

  return (
    <div style={styles.container}>
      {/* Header avec flèche de retour */}
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={onBackToDashboard}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f0f0f0';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'scale(1)';
          }}
          title="Retour au tableau de bord"
        >
          ←
        </button>
        
        <div style={styles.titleContainer}>
          <h1 style={styles.title}>Explorer par Thème</h1>
        </div>
        
        <div style={{ position: 'relative' }}>
          <div 
            style={styles.menuIcon}
            onClick={handleMenuClick}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#f0f0f0';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ☰
          </div>
          {isMenuOpen && (
            <div style={styles.dropdownMenu}>
              <div 
                style={styles.dropdownItem}
                onClick={() => handleDropdownItemClick('profile')}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Mon profil
              </div>
              <div 
                style={styles.dropdownItem}
                onClick={() => handleDropdownItemClick('settings')}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Paramètres
              </div>
              <div 
                style={styles.dropdownItem}
                onClick={() => handleDropdownItemClick('help')}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f8f9fa';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Aide & Support
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Introduction */}
      <p style={styles.intro}>
        Qu'est-ce que vous voulez apprendre aujourd'hui ?
      </p>

      {/* Conteneur défilant pour les cartes */}
      <div style={styles.themesContainer}>
        {themes.map(theme => (
          <div 
            key={theme.id} 
            style={styles.card}
            onClick={() => handleCardClick(theme)}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
              e.currentTarget.querySelector('.card-title').style.color = theme.progressColor;
              e.currentTarget.querySelector('.icon-container').style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
              e.currentTarget.querySelector('.card-title').style.color = styles.cardTitle.color;
              e.currentTarget.querySelector('.icon-container').style.transform = 'scale(1)';
            }}
          >
            <div style={styles.cardHeader}>
              <div 
                className="icon-container"
                style={{
                  ...styles.iconContainer,
                  backgroundColor: theme.color,
                }}
              >
                <span style={{ fontSize: '24px' }}>{theme.icon}</span>
              </div>
              <div style={styles.cardContent}>
                <h3 className="card-title" style={styles.cardTitle}>{theme.title}</h3>
                <p style={styles.cardDescription}>{theme.description}</p>
                
                {/* Barre de progression */}
                <div style={styles.progressContainer}>
                  <div 
                    style={{
                      ...styles.progressBar,
                      width: `${theme.progress}%`,
                      backgroundColor: theme.progressColor,
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div style={styles.cardFooter}>
              <span 
                style={{
                  ...styles.level,
                  backgroundColor: theme.level === 'Débutant' ? '#e7f5ff' : '#fff4e6',
                  color: theme.level === 'Débutant' ? '#1971c2' : '#e67700',
                }}
              >
                {theme.level}
              </span>
              <span style={styles.questions}>{theme.questions} questions</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de détail du thème (conservé pour compatibilité) */}
      {selectedTheme && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div 
                style={{
                  ...styles.modalIcon,
                  backgroundColor: selectedTheme.color,
                }}
              >
                <span>{selectedTheme.icon}</span>
              </div>
              <div>
                <h2 style={styles.modalTitle}>{selectedTheme.title}</h2>
                <span 
                  style={{
                    ...styles.level,
                    backgroundColor: selectedTheme.level === 'Débutant' ? '#e7f5ff' : '#fff4e6',
                    color: selectedTheme.level === 'Débutant' ? '#1971c2' : '#e67700',
                  }}
                >
                  {selectedTheme.level}
                </span>
              </div>
            </div>

            <p style={styles.modalDescription}>{selectedTheme.description}</p>

            <div style={styles.modalStats}>
              <div style={styles.stat}>
                <div style={styles.statValue}>{selectedTheme.completedQuestions}/{selectedTheme.totalQuestions}</div>
                <div style={styles.statLabel}>Questions</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statValue}>{selectedTheme.progress}%</div>
                <div style={styles.statLabel}>Progression</div>
              </div>
              <div style={styles.stat}>
                <div style={styles.statValue}>{selectedTheme.timeEstimate}</div>
                <div style={styles.statLabel}>Durée</div>
              </div>
            </div>

            <div style={styles.progressContainer}>
              <div 
                style={{
                  ...styles.progressBar,
                  width: `${selectedTheme.progress}%`,
                  backgroundColor: selectedTheme.progressColor,
                }}
              />
            </div>

            <div style={styles.actionButtons}>
              <button 
                style={styles.closeButton}
                onClick={handleCloseModal}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#f0f0f0';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Fermer
              </button>
              <button 
                style={{
                  ...styles.startButton,
                  backgroundColor: selectedTheme.progressColor,
                  flex: 2,
                }}
                onClick={handleStartLearning}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {selectedTheme.progress === 100 ? 'Revoir le module' : 'Continuer à apprendre'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes modalAppear {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(20px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          /* Personnalisation de la barre de défilement */
          ::-webkit-scrollbar {
            width: 6px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 10px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #a8a8a8;
          }
        `}
      </style>
    </div>
  );
};

export default ThemesPage;