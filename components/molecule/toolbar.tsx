
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View } from 'react-native';
import { Text } from '../atom';

const Toolbar = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & {
    title: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
  }
>(({ className, title, left, right, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={cn(
        'h-16 flex-row items-center justify-between px-4 bg-card border-b border-border',
        className
      )}
      {...props}
    >
      <View className="flex-1 items-start">{left}</View>
      <View className="flex-1 items-center">
        <Text variant="h4">{title}</Text>
      </View>
      <View className="flex-1 items-end">{right}</View>
    </View>
  );
});
Toolbar.displayName = 'Toolbar';

export { Toolbar };
