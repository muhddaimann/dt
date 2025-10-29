import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text, View } from 'react-native';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type BadgeProps = React.ComponentPropsWithoutRef<typeof View> & VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<React.ElementRef<typeof View>, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

const badgeTextVariants = cva(
    'text-xs font-semibold',
    {
        variants: {
            variant: {
                default: 'text-primary-foreground',
                secondary: 'text-secondary-foreground',
                destructive: 'text-destructive-foreground',
                outline: 'text-foreground',
            }
        },
        defaultVariants: {
            variant: 'default',
        }
    }
)

type BadgeTextProps = React.ComponentPropsWithoutRef<typeof Text> & VariantProps<typeof badgeTextVariants>;

const BadgeText = React.forwardRef<React.ElementRef<typeof Text>, BadgeTextProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={cn(badgeTextVariants({ variant, className }))}
        {...props}
      />
    );
  }
);
BadgeText.displayName = 'BadgeText';

export { Badge, BadgeText, badgeVariants };
