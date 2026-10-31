import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { Redirect } from 'expo-router';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useAuth } from '../../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Ionicons name="person-circle-outline" size={60} color="#fff" />
        <Text style={styles.userName}>Студент ВТк-25-1</Text>

        <View style={styles.statusContainer}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Авторизовано (Online)</Text>
        </View>
      </View>

      <View style={styles.menuItems}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const { isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: '#002855' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#002855',
        drawerInactiveTintColor: '#333',
        headerRight: () => (
          <Ionicons
            name="log-out-outline"
            size={24}
            color="#fff"
            style={{ marginRight: 15 }}
            onPress={logout}
          />
        ),
      }}
    >
      <Drawer.Screen
        name="(news)"
        options={{
          title: 'Житомирська політехніка',
          drawerLabel: 'Стрічка новин',
          drawerIcon: ({ color }) => <Ionicons name="newspaper-outline" size={22} color={color} />
        }}
      />
      <Drawer.Screen
        name="faq"
        options={{
          title: 'Довідковий центр',
          drawerLabel: 'FAQ',
          drawerIcon: ({ color }) => <Ionicons name="help-circle-outline" size={22} color={color} />
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 0,
  },
  drawerHeader: {
    backgroundColor: '#002855',
    padding: 20,
    paddingTop: 60,
    marginBottom: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4caf50',
    marginRight: 6,
  },
  statusText: {
    color: '#e0e0e0',
    fontSize: 12,
  },
  menuItems: {
    flex: 1,
    paddingHorizontal: 10,
  },
});