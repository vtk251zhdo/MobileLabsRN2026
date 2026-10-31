import { View, Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const faqData = [
  {
    title: 'Навчальний процес',
    data: ['Як дізнатися розклад пар?', 'Де знайти матеріали лекцій?', 'Як перевірити свої бали?'],
  },
  {
    title: 'Технічна підтримка',
    data: ['Як відновити пароль до порталу?', 'Не працює корпоративна пошта', 'Як підключитися до Wi-Fi eduroam?'],
  },
];

export default function FAQScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={faqData}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index, section }) => (
          <TouchableOpacity
            style={[
              styles.item,
              index === section.data.length - 1 && styles.lastItem // Прибираємо лінію в останнього елемента
            ]}
          >
            <Text style={styles.itemText}>{item}</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  listContainer: { padding: 15 },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#002855',
    textTransform: 'uppercase',
    marginTop: 15,
    marginBottom: 8,
    paddingHorizontal: 5
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastItem: { borderBottomWidth: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
  itemText: { fontSize: 15, color: '#333' }
});