import React from 'react';

const GenerateQRScreen = ({ onBack }) => {
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
    subtitle: {
      fontSize: '16px',
      color: '#666',
      padding: '20px',
      paddingBottom: '10px',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 20px',
      backgroundColor: 'white',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    menuItemLeft: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    },
    checkbox: {
      marginRight: '15px',
    },
    menuIcon: {
      marginRight: '15px',
      fontSize: '18px',
      color: '#333',
    },
    menuText: {
      fontSize: '16px',
      color: '#333',
      flex: 1,
    },
    legalSection: {
      marginTop: '20px',
      backgroundColor: 'white',
    },
    legalItem: {
      padding: '15px 20px',
      borderBottom: '1px solid #f0f0f0',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    legalText: {
      fontSize: '16px',
      color: '#333',
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
  };

  const menuItems = [
    { title: 'Aide à Support', icon: '❓' },
    { title: "Guide d'utilisation", icon: '📖' },
    { title: 'FAQ', icon: '❔' },
    { title: 'Contacte le support', icon: '📞' },
    { title: 'Noter l\'application', icon: '⭐' },
    { title: 'Où adresse un PC ?', icon: '📍' },
    { title: 'Liste des magasins partenaires', icon: '🏪' },
    { title: 'Trouver un vendeur près de moi', icon: '👤' },
    { title: 'Promotions en cours', icon: '🎯' },
    { title: 'Mode Vendeur', icon: '💼' },
    { title: 'Code : ……???', icon: '🔢' },
  ];

  const handleMenuItemClick = (title) => {
    alert(`Ouverture: ${title}`);
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
        <span style={styles.headerTitle}>Générer mes QR Code</span>
        <div style={styles.headerSpacer} />
      </div>

      <div style={styles.scrollView}>
        <div style={styles.subtitle}>Voir mes recommandations</div>
        
        {menuItems.map((item, index) => (
          <div 
            key={index}
            style={styles.menuItem}
            onClick={() => handleMenuItemClick(item.title)}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            <div style={styles.menuItemLeft}>
              <div style={styles.checkbox}>
                <input type="checkbox" style={{ transform: 'scale(1.2)' }} />
              </div>
              <span style={styles.menuIcon}>{item.icon}</span>
              <span style={styles.menuText}>{item.title}</span>
            </div>
            <span>→</span>
          </div>
        ))}

        {/* Section Légale */}
        <div style={styles.legalSection}>
          <div style={styles.legalItem}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>
            <span style={styles.legalText}>Légal</span>
          </div>
          <div style={styles.legalItem}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>
            <span style={styles.legalText}>Conditions d'utilisation</span>
          </div>
          <div style={styles.legalItem}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}>
            <span style={styles.legalText}>Politique de confidentialité</span>
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

export default GenerateQRScreen;