import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ title = "Лабораторна робота 1" }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        {}
        <Image
          source={require('../../assets/images/Logo_FIKT.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Жуковський Д.О., ВТк-25-1</Text>
      </View>
      <TouchableOpacity style={styles.settingsButton}>
        <Ionicons name="settings-outline" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002855',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  settingsButton: {
    padding: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
});