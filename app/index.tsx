import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Stack } from 'expo-router';
import { Bell, House, Settings } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { View } from 'react-native';

export default function Home() {
  const { colorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center p-4 bg-background">
      <Stack.Screen options={{ title: 'Theme Demo' }} />

      <Text variant="h1" className="mb-8">Design Token Demo</Text>

      <View className="p-13 bg-card rounded-4xl shadow-3 w-full max-w-sm mb-8">
        <Text variant="large" className="mb-4">
          This card uses the new design tokens!
        </Text>
        <Text variant="p" className="text-muted-foreground mb-6">
          It has a padding of `p-13`, a border radius of `rounded-4xl`, and a shadow of `shadow-3`.
        </Text>
        <Button>
          <Text>Hello World</Text>
        </Button>
      </View>

      <View className="p-6 bg-card rounded-2xl shadow-2 w-full max-w-sm items-center">
        <Text variant="large" className="mb-6">Icon Component Demo</Text>
        <View className="flex-row gap-8">
          <Icon as={House} size="sm" />
          <Icon as={Settings} />
          <Icon as={Bell} size="lg" />
          <Icon as={House} size="xl" className="text-secondary" />
        </View>
      </View>

      <View className="p-4 items-center">
        <Text variant="muted" className="mt-4">
          App is in {colorScheme} mode.
        </Text>
      </View>
    </View>
  );
}