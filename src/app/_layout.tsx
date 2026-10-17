import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#224A98',
      headerShown: false,
      tabBarStyle: { height: 60, paddingBottom: 10 }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Головна',
          tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: 'Галерея',
          tabBarIcon: ({color}) => <Ionicons name="image" size={24} color={color} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Профіль',
          tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color} />
        }}
      />
    </Tabs>
  );
}