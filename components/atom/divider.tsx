
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View } from 'react-native';

const Divider = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={cn('h-[1px] w-full bg-border', className)}
      {...props}
    />
  );
});
Divider.displayName = 'Divider';

export { Divider };
