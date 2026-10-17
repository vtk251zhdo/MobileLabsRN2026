import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';

const newsData = [
  {
    id: '1',
    title: 'Житомирська політехніка – учасник міжнародного проєкту Pilot Program...',
    date: '17 вересня 2026 р.',
    description: 'Житомирська політехніка долучається до міжнародного освітнього проєкту Pilot Program for Enhancing Cybersecurity Skills Gaps in Ukraine, який є складовою...',
    image: 'https://news.ztu.edu.ua/wp-content/uploads/2026/10/na-sajt-4.png',
  },
  {
    id: '2',
    title: 'Представник Житомирської політехніки взяла участь у зустрічі експертів...',
    date: '15 жовтня 2026 р., 10:00',
    description: 'Представник Житомирської політехніки взяла участь у зустрічі експертів Веймарського регіонального трикутника в Польщі...',
    image: 'https://news.ztu.edu.ua/wp-content/uploads/2026/10/na-sajt-6.png',
  },
  {
    id: '3',
    title: 'Якість освіти очима студентів: відкритий діалог у Житомирській політехніці...',
    date: '14 жовтня 2026 р., 10:00',
    description: 'Яким студенти бачать освітній процес? Що вже працює добре, а що хотілося б змінити? Як зробити навчання якіснішим, цікавішим і комфортнішим?',
    image: 'https://news.ztu.edu.ua/wp-content/uploads/2026/10/na-sajt-5.png',
  }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput placeholder="Пошук..." style={styles.searchInput} />
      </View>

      <FlatList
        data={newsData}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    paddingHorizontal: 15,
    height: 45,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16 },
  content: { paddingHorizontal: 15, paddingBottom: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  cardImage: { width: '100%', height: 180, backgroundColor: '#ddd' },
  cardContent: { padding: 15 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, color: '#333' },
  cardDate: { fontSize: 12, color: '#888', marginBottom: 10 },
  cardDescription: { fontSize: 14, color: '#444' },
});