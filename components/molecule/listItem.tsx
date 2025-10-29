
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from '../atom';

const ListItem = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> & {
    title: string;
    subtitle?: string;
    left?: React.ReactNode;
    right?: React.ReactNode;
  }
>(({ className, title, subtitle, left, right, ...props }, ref) => {
  return (
    <Pressable
      ref={ref}
      className={cn(
        'flex-row items-center justify-between p-4 border-b border-border',
        className
      )}
      {...props}
    >
      <View className="flex-row items-center gap-4">
        {left}
        <View>
          <Text variant="p">{title}</Text>
          {subtitle && <Text variant="muted">{subtitle}</Text>}
        </View>
      </View>
      {right}
    </Pressable>
  );
});
ListItem.displayName = 'ListItem';

export { ListItem };
