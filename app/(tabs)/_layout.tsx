import { Tabs } from 'expo-router';
import { Home, Layers } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabsLayout() {

  return (
    <SafeAreaView edges={['top', 'bottom']} style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 20,
          },
        }}>
        <Tabs.Screen
          name="a"
          options={{
            tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          }}
        />
        <Tabs.Screen
          name="b"
          options={{
            tabBarIcon: ({ color, size }) => <Layers color={color} size={size} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
