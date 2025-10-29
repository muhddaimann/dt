import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Pressable, Text } from 'react-native';

const chipVariants = cva('inline-flex items-center justify-center rounded-full px-3 py-1.5', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      outline: 'border border-border text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const chipTextVariants = cva('text-sm font-medium', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      outline: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ChipProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof chipVariants> & {
    label: string;
  };

const Chip = React.forwardRef<React.ElementRef<typeof Pressable>, ChipProps>(
  ({ className, variant, label, ...props }, ref) => {
    return (
      <Pressable ref={ref} className={cn(chipVariants({ variant }), className)} {...props}>
        <Text className={cn(chipTextVariants({ variant }))}>{label}</Text>
      </Pressable>
    );
  }
);
Chip.displayName = 'Chip';

export { Chip, chipVariants, chipTextVariants };
