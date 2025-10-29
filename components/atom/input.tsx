
import { cn } from '@/lib/utils';
import * as React from 'react';
import { TextInput } from 'react-native';

const Input = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  React.ComponentPropsWithoutRef<typeof TextInput>
>(({ className, ...props }, ref) => {
  return (
    <TextInput
      ref={ref}
      className={cn(
        'h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground',
        'focus:border-ring focus:ring-1 focus:ring-ring',
        className
      )}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
