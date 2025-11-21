import React, { useState, useMemo, useCallback } from 'react';
import Themes from './themes';
import PasswordQuestionPage from './quiz';
import SettingsScreen from './Setting';
import GenerateQRScreen from './QR';

// Styles extraits pour une meilleure organisation
const dashboardStyles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    overflow: 'hidden',
    width: '100vw',
    justifyContent: 'flex-start',
    alignItems: 'center', // Centré horizontalement
    backgroundColor: '#f5f5f5', // Fond pour voir le centrage
  },
  appContainer: {
    width: '100%',
    maxWidth: '400px', // Largeur maximale de 400px
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '0',
    boxShadow: 'none',
    overflow: 'hidden',
    animation: 'fadeIn 1s ease-out',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  headerIcons: {
    display: 'flex',
    gap: '15px',
  },
  headerIcon: {
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  headerTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    position: 'relative',
    zIndex: '1',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  headerText: {
    margin: '5px 0',
    position: 'relative',
    zIndex: '1',
    fontSize: '14px',
  },
  scrollableContent: {
    flex: 1,
    overflowY: 'auto',
    paddingBottom: '10px',
  },
  userLevel: {
    padding: '20px',
    textAlign: 'center',
    background: 'white',
  },
  levelBadge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '15px',
    fontWeight: 'bold',
    color: '#4a00e0',
    fontSize: '16px',
  },
  progressSection: {
    marginTop: '15px',
  },
  progressValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#4a00e0',
    marginBottom: '10px',
    animation: 'countUp 2s ease-out',
  },
  progressBarContainer: {
    width: '100%',
    height: '12px',
    backgroundColor: '#e0e0e0',
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '5px',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
    borderRadius: '10px',
    transition: 'width 1.5s ease-in-out',
    position: 'relative',
    overflow: 'hidden',
  },
  continueSection: {
    padding: '0 20px 20px',
    textAlign: 'center',
    background: 'white',
  },
  continueButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    padding: '15px',
    background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    marginBottom: '20px',
    boxShadow: '0 4px 10px rgba(74, 0, 224, 0.3)',
  },
  questionProgress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
  },
  questionCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginBottom: '10px',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    animation: 'float 3s ease-in-out infinite',
  },
  questionCurrent: {
    fontSize: '24px',
    fontWeight: 'bold',
    position: 'relative',
    zIndex: '1',
  },
  questionTotal: {
    fontSize: '14px',
    position: 'relative',
    zIndex: '1',
  },
  menuOptions: {
    padding: '0 20px',
    background: 'white',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #f0f0f0',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  menuIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #4a00e0, #8e2de2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
    marginRight: '15px',
    transition: 'transform 0.3s',
  },
  menuText: {
    flex: '1',
  },
  menuTitle: {
    fontSize: '16px',
    marginBottom: '5px',
    color: '#333',
  },
  menuDescription: {
    fontSize: '14px',
    color: '#666',
  },
  dailyTip: {
    margin: '20px',
    padding: '15px',
    backgroundColor: '#f8f4ff',
    borderRadius: '12px',
    borderLeft: '4px solid #8e2de2',
    animation: 'slideIn 0.5s ease-out',
  },
  tipHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  tipTitle: {
    color: '#4a00e0',
    fontSize: '16px',
  },
  tipText: {
    color: '#555',
    fontStyle: 'italic',
    lineHeight: '1.4',
  },
  bottomNav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 0',
    backgroundColor: '#f8f8f8',
    borderTop: '1px solid #e0e0e0',
    gap: '25px',
    flexShrink: 0,
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#666',
    fontSize: '12px',
    transition: 'all 0.3s',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '8px',
    minWidth: '60px',
  },
  navIcon: {
    fontSize: '20px',
    marginBottom: '5px',
    transition: 'transform 0.3s',
  },
};

// Constantes extraites
const menuItems = [
  {
    icon: 'bi-cpu',
    title: "Continuer l'apprentissage",
    description: 'Reprendre où vous en étiez',
    action: (navigateToQuestion) => {
      const securityTheme = {
        id: 1,
        title: 'Sécurité & Protection',
        icon: '🛡️',
      };
      navigateToQuestion(securityTheme);
    }
  },
  {
    icon: 'bi-compass',
    title: 'Explorer par thème',
    description: 'Choisissez une catégorie spécifique',
    action: (navigate) => navigate('themes')
  },
  {
    icon: 'bi-graph-up',
    title: 'Mes progrès',
    description: 'Statistiques et badges obtenus',
    action: () => alert('Ouverture des statistiques de progression')
  },
  {
    icon: 'bi-share',
    title: 'Partager l\'application',
    description: 'Générer mon QR Code',
    action: (navigate) => navigate('qr')
  }
];

const dailyTips = [
  "Saviez-vous que Ctrl+Z annule la dernière action ? Essayez-le !",
  "Un SSD peut accélérer considérablement le temps de démarrage de votre PC.",
  "La RAM est la mémoire à court terme de votre ordinateur.",
  "Mettre à jour ses pilotes graphiques peut améliorer les performances des jeux.",
  "Le refroidissement liquide est plus efficace que le refroidissement par air pour les overclocking.",
  "Un BIOS mis à jour peut résoudre des problèmes de compatibilité matérielle.",
  "La fréquence de rafraîchissement de l'écran affecte la fluidité de l'image.",
  "Le RGB n'améliore pas les performances, mais c'est plus joli !"
];

// Styles globaux
const globalStyles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes countUp {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes glow {
    from { text-shadow: 0 0 5px rgba(142, 45, 226, 0.5); }
    to { text-shadow: 0 0 15px rgba(142, 45, 226, 0.8); }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
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
    background: linear-gradient(to bottom, #4a00e0, #8e2de2);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #3a00b0, #6e1dc2);
  }

  /* Bootstrap Icons */
  @font-face {
    font-family: 'bootstrap-icons';
    src: url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/fonts/bootstrap-icons.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/fonts/bootstrap-icons.woff') format('woff');
  }
  
  .bootstrap-icon {
    font-family: 'bootstrap-icons' !important;
    font-style: normal;
    font-weight: normal !important;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: -0.125em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .bi-person::before { content: "\\F4E1"; }
  .bi-bell::before { content: "\\F46A"; }
  .bi-gear::before { content: "\\F3E5"; }
  .bi-arrow-right::before { content: "\\F138"; }
  .bi-compass::before { content: "\\F1A8"; }
  .bi-graph-up::before { content: "\\F26B"; }
  .bi-share::before { content: "\\F52F"; }
  .bi-lightbulb::before { content: "\\F334"; }
  .bi-house-door::before { content: "\\F1D4"; }
  .bi-award::before { content: "\\F343"; }
  .bi-bar-chart::before { content: "\\F2E2"; }
  .bi-three-dots::before { content: "\\F1C9"; }
  .bi-person-check::before { content: "\\F4E5"; }
  .bi-cpu::before { content: "\\F1B8"; }
  .bi-motherboard::before { content: "\\F3A6"; }
  .bi-hdd::before { content: "\\F2D3"; }
  .bi-window::before { content: "\\F5D4"; }
  .bi-arrow-left::before { content: "\\F12F"; }
  .bi-eye::before { content: "\\F341"; }

  /* Responsive Design */
  @media (max-width: 400px) {
    .app-container {
      max-width: 100%;
    }
  }
  
  @media (max-width: 320px) {
    .header-title {
      font-size: 24px;
    }
    
    .menu-item {
      padding: 12px 0;
    }
  }

  /* Supprimer les marges par défaut du body */
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #f5f5f5;
  }

  /* Assurer que html prend toute la hauteur */
  html, #root {
    height: 100%;
  }
`;

// Custom Hook pour la navigation
const useNavigation = (initialView = 'dashboard') => {
  const [currentView, setCurrentView] = useState(initialView);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = useCallback(async (view, theme = null) => {
    setIsLoading(true);
    // Simulation d'un chargement pour les transitions
    await new Promise(resolve => setTimeout(resolve, 300));
    setCurrentView(view);
    setSelectedTheme(theme);
    setIsLoading(false);
  }, []);

  const navigateToQuestion = useCallback(async (theme) => {
    await navigateTo('question', theme);
  }, [navigateTo]);

  const goBack = useCallback(async () => {
    await navigateTo('dashboard');
  }, [navigateTo]);

  return {
    currentView,
    selectedTheme,
    isLoading,
    navigateTo,
    navigateToQuestion,
    goBack,
    setSelectedTheme
  };
};

// Error Boundary pour la gestion des erreurs
class DashboardErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Dashboard Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#f5f5f5'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '400px',
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              background: 'linear-gradient(to right, #ff6b6b, #ee5a24)',
              color: 'white',
              padding: '20px',
              textAlign: 'center',
              width: '100%'
            }}>
              <h1 style={{fontSize: '28px', fontWeight: 'bold', marginBottom: '10px'}}>Oups !</h1>
              <p>Quelque chose s'est mal passé</p>
            </div>
            <div style={{
              padding: '20px',
              textAlign: 'center',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <i className="bootstrap-icon bi-exclamation-triangle" style={{
                fontSize: '48px',
                color: '#ee5a24',
                marginBottom: '20px'
              }}></i>
              <h3 style={{ color: '#333', marginBottom: '15px' }}>
                Une erreur est survenue
              </h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                Nous rencontrons des difficultés techniques. Veuillez réessayer.
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                style={{
                  padding: '12px 24px',
                  background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Réessayer
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Composant de chargement
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #4a00e0',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <p style={{ marginTop: '15px', color: '#666' }}>Chargement...</p>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// Composant principal Dashboard
const Dashboard = () => {
  const navigation = useNavigation();
  const styles = dashboardStyles;

  // Mémoisation des données pour la performance
  const memoizedMenuItems = useMemo(() => menuItems, []);
  const randomTip = useMemo(() => 
    dailyTips[Math.floor(Math.random() * dailyTips.length)], 
  []);

  // Gestionnaires d'événements mémoïsés
  const handleNavigateToSettings = useCallback(() => {
    navigation.navigateTo('settings');
  }, [navigation]);

  const handleKeyPress = useCallback((event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      action();
    }
  }, []);

  // Rendu du tableau de bord
  const renderDashboard = () => (
    <>
      {/* En-tête avec icônes - FIXE */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerIcons}>
            <i 
              className="bootstrap-icon bi-person" 
              style={styles.headerIcon}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              title="Profil"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => handleKeyPress(e, () => alert('Profil'))}
            ></i>
            <i 
              className="bootstrap-icon bi-bell" 
              style={styles.headerIcon}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              title="Notifications"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => handleKeyPress(e, () => alert('Notifications'))}
            ></i>
          </div>
          <i 
            className="bootstrap-icon bi-gear" 
            style={styles.headerIcon}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            title="Paramètres"
            onClick={handleNavigateToSettings}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => handleKeyPress(e, handleNavigateToSettings)}
          ></i>
        </div>
        <h1 style={styles.headerTitle}>PC Master</h1>
        <p style={styles.headerText}>Bonjour Utilisateur !</p>
        <p style={styles.headerText}>Prêt à améliorer vos connaissances PC ?</p>
      </div>

      {/* Contenu défilable */}
      <div style={styles.scrollableContent}>
        {/* Niveau utilisateur */}
        <div style={styles.userLevel}>
          <div style={styles.levelBadge}>
            <i className="bootstrap-icon bi-person-check" style={{animation: 'bounce 2s infinite'}}></i>
            <span>Votre niveau : Apprenti PC</span>
          </div>
          
          <div style={styles.progressSection}>
            <div style={styles.progressValue}>42%</div>
            <div style={styles.progressBarContainer}>
              <div style={{...styles.progressBar, width: '42%'}}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  animation: 'shimmer 2s infinite'
                }}></div>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginTop: '5px'}}>
              <span>42/100</span>
              <span>42%</span>
            </div>
            <div style={{fontStyle: 'italic', margin: '10px 0', color: '#555'}}>
              Continuez, vous progressez bien !
            </div>
          </div>
        </div>

        {/* Options du menu */}
        <div style={styles.menuOptions}>
          {memoizedMenuItems.map((item, index) => (
            <div 
              key={index}
              style={styles.menuItem}
              onClick={() => {
                if (item.title === "Continuer l'apprentissage") {
                  item.action(navigation.navigateToQuestion);
                } else {
                  item.action(navigation.navigateTo);
                }
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.backgroundColor = 'rgba(74, 0, 224, 0.05)';
                e.currentTarget.querySelector('.menu-icon').style.transform = 'scale(1.1) rotate(5deg)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.querySelector('.menu-icon').style.transform = 'scale(1) rotate(0)';
              }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => handleKeyPress(e, () => {
                if (item.title === "Continuer l'apprentissage") {
                  item.action(navigation.navigateToQuestion);
                } else {
                  item.action(navigation.navigateTo);
                }
              })}
              aria-label={`Naviguer vers ${item.title}`}
            >
              <div className="menu-icon" style={styles.menuIcon}>
                <i className={`bootstrap-icon ${item.icon}`}></i>
              </div>
              <div style={styles.menuText}>
                <h3 style={styles.menuTitle}>{item.title}</h3>
                <p style={styles.menuDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Astuce du jour */}
        <div style={styles.dailyTip}>
          <div style={styles.tipHeader}>
            <i className="bootstrap-icon bi-lightbulb" style={{
              color: '#8e2de2',
              marginRight: '10px',
              fontSize: '18px',
              animation: 'glow 2s infinite alternate'
            }}></i>
            <h3 style={styles.tipTitle}>Astuce du jour</h3>
          </div>
          <p style={styles.tipText}>"{randomTip}"</p>
        </div>
      </div>

      {/* Navigation du bas - FIXE */}
      <div style={styles.bottomNav}>
        <div 
          style={{...styles.navItem, color: '#4a00e0', backgroundColor: 'rgba(74, 0, 224, 0.1)'}}
          onClick={() => navigation.navigateTo('dashboard')}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#4a00e0';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.querySelector('.nav-icon').style.transform = 'scale(1.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#4a00e0';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.querySelector('.nav-icon').style.transform = 'scale(1)';
          }}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => handleKeyPress(e, () => navigation.navigateTo('dashboard'))}
          aria-label="Accueil"
        >
          <i className="nav-icon bootstrap-icon bi-house-door" style={styles.navIcon}></i>
          <span>Accueil</span>
        </div>
        <div 
          style={styles.navItem}
          onClick={() => navigation.navigateTo('themes')}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#4a00e0';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.querySelector('.nav-icon').style.transform = 'scale(1.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.querySelector('.nav-icon').style.transform = 'scale(1)';
          }}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => handleKeyPress(e, () => navigation.navigateTo('themes'))}
          aria-label="Apprendre"
        >
          <i className="nav-icon bootstrap-icon bi-award" style={styles.navIcon}></i>
          <span>Apprendre</span>
        </div>
        <div 
          style={styles.navItem}
          onClick={() => alert('Ouverture de la progression')}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#4a00e0';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.querySelector('.nav-icon').style.transform = 'scale(1.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.querySelector('.nav-icon').style.transform = 'scale(1)';
          }}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => handleKeyPress(e, () => alert('Ouverture de la progression'))}
          aria-label="Progression"
        >
          <i className="nav-icon bootstrap-icon bi-bar-chart" style={styles.navIcon}></i>
          <span>Progression</span>
        </div>
        <div 
          style={styles.navItem}
          onClick={handleNavigateToSettings}
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#4a00e0';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.querySelector('.nav-icon').style.transform = 'scale(1.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#666';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.querySelector('.nav-icon').style.transform = 'scale(1)';
          }}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => handleKeyPress(e, handleNavigateToSettings)}
          aria-label="Plus d'options"
        >
          <i className="nav-icon bootstrap-icon bi-three-dots" style={styles.navIcon}></i>
          <span>Plus</span>
        </div>
      </div>
    </>
  );

  if (navigation.isLoading) {
    return (
      <div style={styles.container}>
        <style>{globalStyles}</style>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <DashboardErrorBoundary>
      <div style={styles.container}>
        <style>{globalStyles}</style>
        
        <div style={styles.appContainer}>
          {navigation.currentView === 'dashboard' && renderDashboard()}
          {navigation.currentView === 'themes' && (
            <Themes 
              onBackToDashboard={navigation.goBack}
              onNavigateToQuestion={navigation.navigateToQuestion}
            />
          )}
          {navigation.currentView === 'question' && (
            <PasswordQuestionPage 
              onBack={() => navigation.navigateTo('themes')}
              theme={navigation.selectedTheme}
            />
          )}
          {navigation.currentView === 'settings' && (
            <SettingsScreen onBack={navigation.goBack} />
          )}
          {navigation.currentView === 'qr' && (
            <GenerateQRScreen onBack={navigation.goBack} />
          )}
        </div>
      </div>
    </DashboardErrorBoundary>
  );
};

export default Dashboard;