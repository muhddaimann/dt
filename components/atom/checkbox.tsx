import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import { Check } from 'lucide-react-native';
import * as React from 'react';
import { useColorScheme } from 'react-native';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  const scheme = useColorScheme();
  const tickColor = scheme === 'dark' ? '#60a5fa' : '#2563eb';

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      android_ripple={{ color: '#e5e7eb', borderless: true }}
      className={cn(
        'h-5 w-5 shrink-0 rounded-md border border-border bg-background',
        'flex items-center justify-center',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator className="flex items-center justify-center">
        {props.checked ? <Check className="h-3.5 w-3.5" color={tickColor} /> : null}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
