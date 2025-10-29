
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react-native';
import * as React from 'react';
import { View } from 'react-native';
import { Icon, Input } from '../atom';

const SearchBar = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <View className="relative w-full">
      <Icon
        as={Search}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
      />
      <Input
        ref={ref}
        className={cn('pl-10', className)}
        {...props}
      />
    </View>
  );
});
SearchBar.displayName = 'SearchBar';

export { SearchBar };
