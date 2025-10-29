
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View, Pressable } from 'react-native';
import { Text, Icon } from '../atom';
import { LucideIcon } from 'lucide-react-native';

interface TabBarProps {
  tabs: {
    name: string;
    icon: LucideIcon;
  }[];
  activeTab: string;
  onTabPress: (tabName: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, onTabPress }) => {
  return (
    <View className="flex-row bg-card border-t border-border">
      {tabs.map((tab) => (
        <Pressable
          key={tab.name}
          onPress={() => onTabPress(tab.name)}
          className={cn(
            'flex-1 items-center justify-center p-2',
            activeTab === tab.name && 'bg-primary/10'
          )}
        >
          <Icon
            as={tab.icon}
            className={cn(
              'h-6 w-6 text-muted-foreground',
              activeTab === tab.name && 'text-primary'
            )}
          />
          <Text
            className={cn(
              'text-xs text-muted-foreground',
              activeTab === tab.name && 'text-primary'
            )}
          >
            {tab.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export { TabBar };
