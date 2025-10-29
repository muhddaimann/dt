import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon, LucideProps } from 'lucide-react-native';
import { useTheme } from '@react-navigation/native';

const iconVariants = cva('text-foreground', {
  variants: {
    size: {
      default: 'size-4',
      sm: 'size-3.5',
      lg: 'size-5',
      xl: 'size-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type IconProps = Omit<LucideProps, 'size'> &
  VariantProps<typeof iconVariants> & {
    as: LucideIcon;
  };

function Icon({ as: IconComponent, className, size, color, ...props }: IconProps) {
  const { colors } = useTheme();
  return (
    <IconComponent
      className={cn(iconVariants({ size }), className)}
      color={color || colors.text}
      {...props}
    />
  );
}

export { Icon };
