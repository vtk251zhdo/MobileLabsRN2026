import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const getNewsDetails = (id) => ({
  id,
  title: `Новина #${id}`,
  date: `2${Number(id) % 9 + 1} жовтня 2026`,
  image: `https://picsum.photos/seed/${id}/400/300`,
  content: `Це детальний опис новини під номером ${id}. Тут міститься повний текст статті, який детально розповідає про події, що відбулися або плануються в університеті.`,
});

export default function NewsDetailScreen() {
  const { id } = useLocalSearchParams();
  const newsItem = getNewsDetails(id);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
        activeOpacity={0.8}
      >
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Image source={{ uri: newsItem.image }} style={styles.headerImage} />

        <View style={styles.contentContainer}>
          <View style={styles.metaRow}>
            <Ionicons name="calendar-outline" size={16} color="#666" />
            <Text style={styles.date}>{newsItem.date}</Text>
          </View>

          <Text style={styles.title}>{newsItem.title}</Text>

          <View style={styles.divider} />

          <Text style={styles.content}>{newsItem.content}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  headerImage: {
    width: '100%',
    height: 280,
    backgroundColor: '#ccc',
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -25,
    padding: 25,
    minHeight: 500,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#002855',
    lineHeight: 30,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 20,
  },
  content: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
});