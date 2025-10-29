
import * as React from 'react';
import { View } from 'react-native';
import { Text } from '../atom';

interface ProgressSectionProps {
  title: string;
  progress: number; // 0 to 100
  info?: string;
}

const ProgressSection: React.FC<ProgressSectionProps> = ({ title, progress, info }) => {
  return (
    <View className="p-4 bg-card rounded-lg border border-border">
      <View className="flex-row justify-between items-center mb-2">
        <Text variant="p">{title}</Text>
        {info && <Text variant="muted">{info}</Text>}
      </View>
      <View className="h-2 bg-muted rounded-full">
        <View
          className="h-2 bg-primary rounded-full"
          style={{ width: `${progress}%` }}
        />
      </View>
    </View>
  );
};

export { ProgressSection };
