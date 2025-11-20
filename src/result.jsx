import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Share,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const QuizResultsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { score = '8/10', theme = 'Sécurité', timeSpent = '8 minutes' } = route.params || {};

  const shareProgress = async () => {
    try {
      const message = `J'ai réussi le quiz Sécurité avec ${score}! 🎉 Rejoins-moi sur PC Master pour apprendre ensemble!`;
      
      await Share.share({
        message: message,
        title: 'PC Master - Mes progrès'
      });
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de partager les résultats');
    }
  };

  const reviewQuestions = () => {
    // Navigation vers l'écran de révision des questions ratées
    navigation.navigate('ReviewQuestions');
  };

  const continueLearning = () => {
    // Navigation vers l'écran des thèmes
    navigation.navigate('Themes');
  };

  const backHome = () => {
    // Navigation vers l'accueil
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Résultats</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Celebration Banner */}
        <View style={styles.celebrationBanner}>
          <Text style={styles.celebrationIcon}>🎉</Text>
          <Text style={styles.celebrationTitle}>Bravo !</Text>
          <Text style={styles.celebrationSubtitle}>Session terminée</Text>
        </View>

        {/* Score Card */}
        <View style={styles.scoreCard}>
          <Text style={styles.scoreNumber}>{score}</Text>
          <Text style={styles.scoreLabel}>bonnes réponses</Text>
          <View style={styles.starsContainer}>
            <Text style={styles.stars}>⭐⭐⭐⭐</Text>
          </View>
        </View>

        {/* Statistics Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>📊</Text>
            <Text style={styles.sectionTitle}>Statistiques</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Thème principal</Text>
            <Text style={styles.statValue}>{theme}</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Temps passé</Text>
            <Text style={styles.statValue}>{timeSpent}</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Questions correctes</Text>
            <Text style={[styles.statValue, styles.correctText]}>✓ 8</Text>
          </View>
          
          <View style={styles.statRow}>
            <Text style={styles.statLabel}>Questions ratées</Text>
            <Text style={[styles.statValue, styles.incorrectText]}>✕ 2</Text>
          </View>
        </View>

        {/* Learning Results */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionIcon}>🎓</Text>
            <Text style={styles.sectionTitle}>Ce que vous avez appris :</Text>
          </View>
          
          <View style={styles.learningBox}>
            <View style={styles.learningItem}>
              <Text style={[styles.learningIcon, styles.correctText]}>✓</Text>
              <Text style={styles.learningText}>Comment créer un mot de passe sécurisé</Text>
            </View>
            
            <View style={styles.learningItem}>
              <Text style={[styles.learningIcon, styles.correctText]}>✓</Text>
              <Text style={styles.learningText}>Reconnaître un email suspect</Text>
            </View>
            
            <View style={styles.learningItem}>
              <Text style={[styles.learningIcon, styles.correctText]}>✓</Text>
              <Text style={styles.learningText}>Activer l'authentification à deux facteurs</Text>
            </View>
            
            <View style={styles.learningItem}>
              <Text style={[styles.learningIcon, styles.incorrectText]}>✕</Text>
              <Text style={[styles.learningText, styles.incorrectText]}>
                Les différents types d'antivirus (à revoir)
              </Text>
            </View>
            
            <View style={styles.learningItem}>
              <Text style={[styles.learningIcon, styles.incorrectText]}>✕</Text>
              <Text style={[styles.learningText, styles.incorrectText]}>
                Configuration du pare-feu (à revoir)
              </Text>
            </View>
          </View>
        </View>

        {/* Badge Section */}
        <View style={styles.section}>
          <View style={styles.badgeBox}>
            <Text style={styles.badgeIcon}>🏆</Text>
            <Text style={styles.badgeTitle}>Gardien de la Sécurité</Text>
            <Text style={styles.badgeDescription}>Maîtrise des bases sécurité</Text>
          </View>
          <Text style={styles.badgeUnlocked}>Nouveau badge débloqué !</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.button, styles.shareButton]} onPress={shareProgress}>
            <Text style={styles.buttonIcon}>🔗</Text>
            <Text style={[styles.buttonText, styles.shareButtonText]}>Partager mes progrès</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.reviewButton]} onPress={reviewQuestions}>
            <Text style={styles.buttonIcon}>🔄</Text>
            <Text style={[styles.buttonText, styles.reviewButtonText]}>Revoir les questions ratées</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.continueButton]} onPress={continueLearning}>
            <Text style={styles.buttonIcon}>📚</Text>
            <Text style={[styles.buttonText, styles.continueButtonText]}>Continuer à apprendre</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={backHome}>
            <Text style={styles.buttonIcon}>🏠</Text>
            <Text style={[styles.buttonText, styles.homeButtonText]}>Retour à l'accueil</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  headerSpacer: {
    width: 24,
  },
  celebrationBanner: {
    backgroundColor: 'linear-gradient(135deg, #3b82f6 0%, #7c3aed 100%)',
    backgroundColor: '#3b82f6', // Fallback color
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  celebrationIcon: {
    fontSize: 60,
    marginBottom: 15,
  },
  celebrationTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  celebrationSubtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.95,
  },
  scoreCard: {
    backgroundColor: '#3b82f6',
    borderRadius: 25,
    padding: 30,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 5,
  },
  scoreNumber: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
    marginBottom: 10,
  },
  scoreLabel: {
    fontSize: 16,
    color: 'white',
    opacity: 0.95,
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  stars: {
    fontSize: 32,
    letterSpacing: 8,
  },
  section: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 15,
  },
  sectionIcon: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1e3a8a',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1e3a8a',
  },
  correctText: {
    color: '#10b981',
  },
  incorrectText: {
    color: '#ef4444',
  },
  learningBox: {
    backgroundColor: '#f0f9ff',
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
    borderRadius: 10,
    padding: 15,
  },
  learningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  learningIcon: {
    marginRight: 10,
    marginTop: 2,
    fontSize: 14,
    fontWeight: 'bold',
  },
  learningText: {
    fontSize: 14,
    color: '#1e3a8a',
    flex: 1,
  },
  badgeBox: {
    backgroundColor: '#fef3c7',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  badgeIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  badgeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#92400e',
    marginBottom: 5,
  },
  badgeDescription: {
    fontSize: 13,
    color: '#b45309',
  },
  badgeUnlocked: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
  },
  actionButtons: {
    padding: 20,
    backgroundColor: 'white',
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
  },
  buttonIcon: {
    marginRight: 10,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  shareButton: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
  },
  shareButtonText: {
    color: 'white',
  },
  reviewButton: {
    backgroundColor: 'white',
    borderColor: '#3b82f6',
  },
  reviewButtonText: {
    color: '#1e3a8a',
  },
  continueButton: {
    backgroundColor: 'white',
    borderColor: '#e5e5e5',
  },
  continueButtonText: {
    color: '#1e3a8a',
  },
  homeButton: {
    backgroundColor: 'white',
    borderColor: '#e5e5e5',
  },
  homeButtonText: {
    color: '#1e3a8a',
  },
});

export default QuizResultsScreen;