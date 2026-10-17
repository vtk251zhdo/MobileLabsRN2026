import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Header from '../components/Header';

const imagesData = [
  { id: '1', uri: 'https://news.ztu.edu.ua/wp-content/uploads/2026/10/na-sajt-4.png' },
  { id: '2', uri: 'https://news.ztu.edu.ua/wp-content/uploads/2025/10/dsc04361-825x510.jpg' },
  { id: '3', uri: 'https://news.ztu.edu.ua/wp-content/uploads/2026/10/na-sajt-6.png' },
  { id: '4', uri: 'https://news.ztu.edu.ua/wp-content/uploads/2026/10/na-sajt-7.png' },
  { id: '5', uri: 'https://news.ztu.edu.ua/wp-content/uploads/2026/10/na-sajt-5.png' },
  { id: '6', uri: 'https://news.ztu.edu.ua/wp-content/uploads/2026/10/shablon-7.png' },
];

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.headerRow}>
        <Text style={styles.pageTitle}>Фотогалерея</Text>
      </View>
      <FlatList
        data={imagesData}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: item.uri }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerRow: { padding: 15 },
  pageTitle: { fontSize: 24, fontWeight: 'bold' },
  gridContainer: { paddingHorizontal: 10, paddingBottom: 20 },
  imageWrapper: {
    flex: 1,
    margin: 5,
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: { width: '100%', height: '100%' },
});