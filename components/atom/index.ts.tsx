import { cn } from '@/lib/utils';
import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva('flex-1 items-center justify-center', {
  variants: {
    size: {
      default: '',
      sm: '',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type BaseIndicatorProps = Omit<
  React.ComponentPropsWithoutRef<typeof ActivityIndicator>,
  'size'
>;

interface SpinnerProps
  extends BaseIndicatorProps,
    VariantProps<typeof spinnerVariants> {
  color?: string;
}

const Spinner = React.forwardRef<
  React.ElementRef<typeof ActivityIndicator>,
  SpinnerProps
>(({ className, size = 'default', color, style, ...indicatorProps }, ref) => {
  const { colors } = useTheme();

  const rnSize: 'small' | 'large' =
    size === 'lg' ? 'large' : 'small';

  return (
    <View className={cn(spinnerVariants({ size }), className)} role="status">
      <ActivityIndicator
        ref={ref}
        size={rnSize}
        color={color ?? colors.primary}
        {...indicatorProps}
      />
    </View>
  );
});
Spinner.displayName = 'Spinner';

export { Spinner };
