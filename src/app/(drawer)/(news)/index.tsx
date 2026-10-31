import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { router } from 'expo-router';

const ITEM_HEIGHT = 120;

const generateData = (startIndex, count) =>
  Array.from({ length: count }).map((_, i) => ({
    id: String(startIndex + i),
    title: `Новина #${startIndex + i}`,
    date: `2${startIndex % 9 + 1} жовтня 2026`,
    image: `https://picsum.photos/seed/${startIndex + i}/100/100`,
  }));

const NewsCard = React.memo(({ item }) => (
  <TouchableOpacity
    style={styles.card}
    activeOpacity={0.7}
    onPress={() => router.push(`/(drawer)/(news)/${item.id}`)}
  >
    <Image source={{ uri: item.image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.cardDate}>{item.date}</Text>
    </View>
  </TouchableOpacity>
));

export default function NewsFeedScreen() {
  const [data, setData] = useState(generateData(1, 100));
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setData(generateData(1, 100));
      setRefreshing(false);
    }, 1500);
  }, []);

  const loadMore = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      setData(prev => [...prev, ...generateData(prev.length + 1, 20)]);
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <NewsCard item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={styles.listContainer}
        getItemLayout={(data, index) => (
          { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
        )}
        ListFooterComponent={loadingMore ? <ActivityIndicator size="large" color="#002855" style={{ margin: 20 }} /> : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  listContainer: { padding: 15 },
  card: {
    height: 105,
    marginBottom: 15,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardImage: { width: 100, height: '100%', backgroundColor: '#e9ecef' },
  cardContent: { flex: 1, padding: 12, justifyContent: 'space-between' },
  cardTitle: { fontSize: 15, fontWeight: '600', color: '#333', lineHeight: 20 },
  cardDate: { fontSize: 12, color: '#888' }
});