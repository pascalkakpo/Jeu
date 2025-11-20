import React, { useState } from 'react';

const PasswordQuestionPage = ({ onBack }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

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
      alignItems: 'center',
      marginBottom: '24px',
      padding: '16px 0',
      flexShrink: 0,
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
      marginRight: '16px',
    },
    title: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1a1a1a',
      margin: 0,
      flex: 1,
    },
    questionContainer: {
      flex: 1,
      overflowY: 'auto',
      paddingBottom: '20px',
    },
    questionCard: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      border: '2px solid #e9ecef',
    },
    questionTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a1a1a',
      marginBottom: '20px',
      lineHeight: '1.4',
      textAlign: 'center',
    },
    optionsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    option: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px',
      borderRadius: '12px',
      border: '2px solid #e9ecef',
      backgroundColor: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    optionSelected: {
      borderColor: '#4a00e0',
      backgroundColor: '#f8f4ff',
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(74, 0, 224, 0.15)',
    },
    optionLetter: {
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      backgroundColor: '#e9ecef',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontSize: '14px',
      color: '#666',
      marginRight: '12px',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    optionLetterSelected: {
      backgroundColor: '#4a00e0',
      color: 'white',
    },
    optionText: {
      fontSize: '16px',
      color: '#333',
      lineHeight: '1.4',
      flex: 1,
    },
    optionTextSelected: {
      color: '#4a00e0',
      fontWeight: '500',
    },
    actionButtons: {
      display: 'flex',
      gap: '12px',
      marginTop: '24px',
      flexShrink: 0,
    },
    checkButton: {
      backgroundColor: '#4a00e0',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '16px 24px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      flex: 2,
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
    checkButtonDisabled: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    },
    skipButton: {
      backgroundColor: 'transparent',
      color: '#666',
      border: '2px solid #e9ecef',
      borderRadius: '12px',
      padding: '16px 24px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      flex: 1,
      transition: 'all 0.3s ease',
    },
    feedbackCard: {
      backgroundColor: selectedOption === 'B' ? '#d4edda' : '#f8d7da',
      borderRadius: '12px',
      padding: '20px',
      marginTop: '20px',
      border: `2px solid ${selectedOption === 'B' ? '#c3e6cb' : '#f5c6cb'}`,
      animation: 'slideUp 0.3s ease',
    },
    feedbackTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: selectedOption === 'B' ? '#155724' : '#721c24',
      marginBottom: '8px',
    },
    feedbackText: {
      fontSize: '16px',
      color: selectedOption === 'B' ? '#155724' : '#721c24',
      lineHeight: '1.4',
    },
    progressContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '20px',
      padding: '12px 16px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      flexShrink: 0,
    },
    progressText: {
      fontSize: '14px',
      color: '#666',
      fontWeight: '500',
    },
    progressBar: {
      flex: 1,
      height: '6px',
      backgroundColor: '#e9ecef',
      borderRadius: '3px',
      margin: '0 12px',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#4a00e0',
      borderRadius: '3px',
      width: '42%',
    },
  };

  const options = [
    {
      letter: 'A',
      text: 'Utiliser seulement des chiffres',
      isCorrect: false,
    },
    {
      letter: 'B',
      text: 'Mélanger majuscules, minuscules, chiffres et symboles sur au moins 12 caractères',
      isCorrect: true,
    },
    {
      letter: 'C',
      text: 'Vérifier ma réponse',
      isCorrect: false,
    },
    {
      letter: 'D',
      text: 'Je ne sais pas (passer)',
      isCorrect: false,
    },
  ];

  const handleOptionClick = (option) => {
    if (option.letter === 'C') {
      setShowFeedback(true);
    } else if (option.letter === 'D') {
      // Passer à la question suivante
      alert('Question passée - Passage à la suivante');
    } else {
      setSelectedOption(option.letter);
      setShowFeedback(false);
    }
  };
// Dans votre écran de quiz, quand l'utilisateur termine
const finishQuiz = (score, theme, timeSpent) => {
  navigation.navigate('QuizResults', {
    score: score,
    theme: theme,
    timeSpent: timeSpent
  });
};
  const handleCheckAnswer = () => {
    if (selectedOption) {
      setShowFeedback(true);
    }
  };

  const handleSkip = () => {
    // Passer à la question suivante
    alert('Question passée - Passage à la suivante');
  };

  return (
    <div style={styles.container}>
      {/* Header avec flèche de retour */}
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={onBack}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f0f0f0';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.transform = 'scale(1)';
          }}
          title="Retour aux thèmes"
        >
          ←
        </button>
        <h1 style={styles.title}>Sécurité & Protection</h1>
      </div>

      {/* Barre de progression */}
      <div style={styles.progressContainer}>
        <span style={styles.progressText}>Question 42/100</span>
        <div style={styles.progressBar}>
          <div style={styles.progressFill}></div>
        </div>
        <span style={styles.progressText}>42%</span>
      </div>

      {/* Contenu de la question */}
      <div style={styles.questionContainer}>
        <div style={styles.questionCard}>
          <h2 style={styles.questionTitle}>
            Comment créer un mot de passe sécurisé ?
          </h2>

          <div style={styles.optionsList}>
            {options.map((option) => (
              <div
                key={option.letter}
                style={{
                  ...styles.option,
                  ...(selectedOption === option.letter && styles.optionSelected),
                }}
                onClick={() => handleOptionClick(option)}
                onMouseOver={(e) => {
                  if (selectedOption !== option.letter) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedOption !== option.letter) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                <div
                  style={{
                    ...styles.optionLetter,
                    ...(selectedOption === option.letter && styles.optionLetterSelected),
                  }}
                >
                  {option.letter}
                </div>
                <div
                  style={{
                    ...styles.optionText,
                    ...(selectedOption === option.letter && styles.optionTextSelected),
                  }}
                >
                  {option.text}
                </div>
              </div>
            ))}
          </div>

          {/* Feedback après vérification */}
          {showFeedback && (
            <div style={styles.feedbackCard}>
              <h3 style={styles.feedbackTitle}>
                {selectedOption === 'B' ? '✓ Bonne réponse !' : '✗ Réponse incorrecte'}
              </h3>
              <p style={styles.feedbackText}>
                {selectedOption === 'B' 
                  ? 'Exact ! Un mot de passe sécurisé doit combiner différents types de caractères (majuscules, minuscules, chiffres, symboles) et être suffisamment long (au moins 12 caractères) pour résister aux attaques par force brute.'
                  : 'La réponse correcte est B. Un mot de passe sécurisé doit combiner différents types de caractères et être suffisamment long pour assurer une bonne protection.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Boutons d'action */}
      <div style={styles.actionButtons}>
        <button
          style={{
            ...styles.skipButton,
            ...(showFeedback && { flex: 1 }),
          }}
          onClick={handleSkip}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f8f9fa';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Passer
        </button>
        
        {!showFeedback && (
          <button
            style={{
              ...styles.checkButton,
              ...(!selectedOption && styles.checkButtonDisabled),
            }}
            onClick={handleCheckAnswer}
            disabled={!selectedOption}
            onMouseOver={(e) => {
              if (selectedOption) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 12px rgba(74, 0, 224, 0.3)';
              }
            }}
            onMouseOut={(e) => {
              if (selectedOption) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            <span>✓</span>
            Vérifier ma réponse
          </button>
        )}

        {showFeedback && (
          <button
            style={{
              ...styles.checkButton,
              flex: 2,
            }}
            onClick={() => alert('Question suivante')}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 4px 12px rgba(74, 0, 224, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <span>→</span>
            Question suivante
          </button>
        )}
      </div>

      <style>
        {`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PasswordQuestionPage;