import React, { useState } from 'react';

const SettingsScreen = ({ onBack }) => {
  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    weeklyTips: false
  });
  const [preferences, setPreferences] = useState({
    soundEffects: true,
    darkMode: false,
    offlineContent: false
  });

  const styles = {
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 20px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e5e5',
    },
    backButton: {
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#333',
      padding: '5px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    headerTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
    },
    headerSpacer: {
      width: '24px',
    },
    scrollView: {
      flex: 1,
      overflowY: 'auto',
    },
    section: {
      backgroundColor: 'white',
      marginTop: '10px',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      padding: '15px 20px',
      borderBottom: '1px solid #f0f0f0',
    },
    option: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 20px',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    optionTextContainer: {
      flex: 1,
    },
    optionText: {
      fontSize: '16px',
      color: '#333',
    },
    optionSubtext: {
      fontSize: '12px',
      color: '#999',
      marginTop: '2px',
    },
    optionValue: {
      fontSize: '14px',
      color: '#999',
    },
    versionContainer: {
      textAlign: 'center',
      padding: '30px 20px',
    },
    versionText: {
      fontSize: '14px',
      color: '#999',
      marginBottom: '5px',
    },
    developerText: {
      fontSize: '12px',
      color: '#999',
    },
    switch: {
      position: 'relative',
      display: 'inline-block',
      width: '50px',
      height: '24px',
    },
    switchInput: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    slider: {
      position: 'absolute',
      cursor: 'pointer',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ccc',
      transition: '.4s',
      borderRadius: '24px',
    },
    sliderBefore: {
      position: 'absolute',
      height: '16px',
      width: '16px',
      left: '4px',
      bottom: '4px',
      backgroundColor: 'white',
      transition: '.4s',
      borderRadius: '50%',
    },
  };

  const toggleNotification = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const togglePreference = (key) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleResetProgress = () => {
    if (window.confirm("Êtes-vous sûr de vouloir réinitialiser toute votre progression ? Cette action est irréversible.")) {
      // Logique de réinitialisation
      alert('Progression réinitialisée !');
    }
  };

  const handleRateApp = () => {
    alert('Redirection vers la page de notation...');
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={onBack}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.1)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          ←
        </button>
        <span style={styles.headerTitle}>Paramètres</span>
        <div style={styles.headerSpacer} />
      </div>

      <div style={styles.scrollView}>
        {/* Section Profil */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Mon Profil</div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Modifier le nom d'affichage</span>
            <span>→</span>
          </div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Choisir un avatar</span>
            <span>→</span>
          </div>
        </div>

        {/* Section Notifications */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Notification</div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <div style={styles.optionTextContainer}>
              <div style={styles.optionText}>Rappel quotidien d'apprentissage</div>
              <div style={styles.optionSubtext}>Apprentis à l'origine juré</div>
            </div>
            <label style={styles.switch}>
              <input 
                type="checkbox" 
                checked={notifications.dailyReminder}
                onChange={() => toggleNotification('dailyReminder')}
                style={styles.switchInput}
              />
              <span style={{
                ...styles.slider,
                backgroundColor: notifications.dailyReminder ? '#4a00e0' : '#ccc'
              }}>
                <span style={{
                  ...styles.sliderBefore,
                  transform: notifications.dailyReminder ? 'translateX(26px)' : 'translateX(0)'
                }} />
              </span>
            </label>
          </div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <div style={styles.optionTextContainer}>
              <div style={styles.optionText}>Nouveaux conseils hebdomadaires</div>
              <div style={styles.optionSubtext}>Chaque texte entier</div>
            </div>
            <label style={styles.switch}>
              <input 
                type="checkbox" 
                checked={notifications.weeklyTips}
                onChange={() => toggleNotification('weeklyTips')}
                style={styles.switchInput}
              />
              <span style={{
                ...styles.slider,
                backgroundColor: notifications.weeklyTips ? '#4a00e0' : '#ccc'
              }}>
                <span style={{
                  ...styles.sliderBefore,
                  transform: notifications.weeklyTips ? 'translateX(26px)' : 'translateX(0)'
                }} />
              </span>
            </label>
          </div>
        </div>

        {/* Section Préférences */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Préférences</div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Effets sonores</span>
            <label style={styles.switch}>
              <input 
                type="checkbox" 
                checked={preferences.soundEffects}
                onChange={() => togglePreference('soundEffects')}
                style={styles.switchInput}
              />
              <span style={{
                ...styles.slider,
                backgroundColor: preferences.soundEffects ? '#4a00e0' : '#ccc'
              }}>
                <span style={{
                  ...styles.sliderBefore,
                  transform: preferences.soundEffects ? 'translateX(26px)' : 'translateX(0)'
                }} />
              </span>
            </label>
          </div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Mode sombre</span>
            <label style={styles.switch}>
              <input 
                type="checkbox" 
                checked={preferences.darkMode}
                onChange={() => togglePreference('darkMode')}
                style={styles.switchInput}
              />
              <span style={{
                ...styles.slider,
                backgroundColor: preferences.darkMode ? '#4a00e0' : '#ccc'
              }}>
                <span style={{
                  ...styles.sliderBefore,
                  transform: preferences.darkMode ? 'translateX(26px)' : 'translateX(0)'
                }} />
              </span>
            </label>
          </div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Taille du texte</span>
            <span>→</span>
          </div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Contenu</span>
            <span>→</span>
          </div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Télécharger hors ligne</span>
            <label style={styles.switch}>
              <input 
                type="checkbox" 
                checked={preferences.offlineContent}
                onChange={() => togglePreference('offlineContent')}
                style={styles.switchInput}
              />
              <span style={{
                ...styles.slider,
                backgroundColor: preferences.offlineContent ? '#4a00e0' : '#ccc'
              }}>
                <span style={{
                  ...styles.sliderBefore,
                  transform: preferences.offlineContent ? 'translateX(26px)' : 'translateX(0)'
                }} />
              </span>
            </label>
          </div>
          <div style={styles.option} 
            onClick={handleResetProgress}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Réinitialiser ma progression</span>
            <span>→</span>
          </div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Dernière mise à jour</span>
            <span style={styles.optionValue}>01/11/2024</span>
          </div>
        </div>

        {/* Section Partage */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Partage</div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Partager l'application</span>
            <span>↗</span>
          </div>
          <div style={styles.option} 
            onClick={handleRateApp}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Noter l'application</span>
            <span>⭐</span>
          </div>
        </div>

        {/* Section Légale */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Légal</div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Conditions d'utilisation</span>
            <span>→</span>
          </div>
          <div style={styles.option}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            <span style={styles.optionText}>Politique de confidentialité</span>
            <span>→</span>
          </div>
        </div>

        {/* Version */}
        <div style={styles.versionContainer}>
          <div style={styles.versionText}>Version : 1.0.0</div>
          <div style={styles.developerText}>Développé par PC Master Team</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;