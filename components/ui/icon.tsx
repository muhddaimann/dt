import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon, LucideProps } from 'lucide-react-native';

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

function Icon({ as: IconComponent, className, size, ...props }: IconProps) {
  return <IconComponent className={cn(iconVariants({ size }), className)} {...props} />;
}

export { Icon };
