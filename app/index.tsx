import { Button } from '@/components/atom/button';
import { Icon } from '@/components/atom/icon';
import { Text } from '@/components/atom/text';
import { Stack } from 'expo-router';
import { Bell, House, Settings } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { View } from 'react-native';

export default function Home() {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <Stack.Screen options={{ title: 'Theme Demo' }} />

      <Text variant="h1" className="mb-8">
        Design Token Demo
      </Text>

      <View className="mb-8 w-full max-w-sm rounded-4xl bg-card p-13 shadow-3">
        <Text variant="large" className="mb-4">
          This card uses the new design tokens!
        </Text>
        <Text variant="p" className="mb-6 text-muted-foreground">
          It has a padding of `p-13`, a border radius of `rounded-4xl`, and a shadow of `shadow-3`.
        </Text>
        <Button>
          <Text>Hello World</Text>
        </Button>
      </View>

      <View className="w-full max-w-sm items-center rounded-2xl bg-card p-6 shadow-2">
        <Text variant="large" className="mb-6">
          Icon Component Demo
        </Text>
        <View className="flex-row gap-8">
          <Icon as={House} size="sm" />
          <Icon as={Settings} />
          <Icon as={Bell} size="lg" />
          <Icon as={House} size="xl" className="text-secondary" />
        </View>
      </View>

      <View className="items-center p-4">
        <Text variant="muted" className="mt-4">
          App is in {colorScheme} mode.
        </Text>
      </View>
    </View>
  );
}
