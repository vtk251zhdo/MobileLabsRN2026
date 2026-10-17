import { View, Text, StyleSheet, TextInput, Switch, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { useState } from 'react';

export default function ProfileScreen() {
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.blueBackground}>
          <View style={styles.avatarContainer}>
            <Ionicons name="person" size={60} color="#666" />
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>ПІБ</Text>
          <TextInput
            style={styles.input}
            value="Жуковський Даниіл Олександрович"
            editable={false}
          />

          <View style={styles.cardSection}>
            <Text style={styles.sectionTitle}>КОНТАКТИ</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value="zhukovskyi@student.ztu.edu.ua"
            />

            <Text style={styles.label}>Група</Text>
            <TextInput
              style={styles.input}
              value="ВТк-25-1"
              editable={false}
            />
          </View>

          <View style={styles.cardSection}>
            <Text style={styles.sectionTitle}>НАЛАШТУВАННЯ</Text>
            <View style={styles.switchRow}>
              <View style={styles.switchLabel}>
                <Ionicons name="notifications-outline" size={20} color="#333" style={{marginRight: 10}}/>
                <Text>Сповіщення</Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#767577', true: '#224A98' }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  blueBackground: {
    backgroundColor: '#224A98',
    height: 120,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    marginBottom: 50,
  },
  avatarContainer: {
    position: 'absolute',
    bottom: -40,
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  formContainer: { paddingHorizontal: 15 },
  label: { fontSize: 12, color: '#666', marginBottom: 5, marginTop: 10, textTransform: 'uppercase' },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
  },
  cardSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: { fontSize: 12, color: '#666', marginBottom: 10, fontWeight: 'bold' },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  switchLabel: { flexDirection: 'row', alignItems: 'center' },
});