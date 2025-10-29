import { cn } from '@/lib/utils';
import { useOverlay } from '@/hooks/useOverlay';
import React from 'react';
import { View, Text, Pressable, Animated, Easing } from 'react-native';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react-native';

type ToastVariant = 'default' | 'success' | 'error' | 'info';

function ToastIcon({ variant }: { variant?: ToastVariant }) {
  switch (variant) {
    case 'success':
      return <CheckCircle2 size={18} className="text-white" />;
    case 'error':
      return <AlertCircle size={18} className="text-white" />;
    case 'info':
      return <Info size={18} className="text-white" />;
    default:
      return <Info size={18} className="text-foreground" />;
  }
}

function useToastAnimation(duration = 3500) {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const translate = React.useRef(new Animated.Value(-12)).current;
  const progress = React.useRef(new Animated.Value(1)).current;

  const inAnim = React.useCallback(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 180,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 180,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, translate]);

  const outAnim = React.useCallback(
    (cb?: () => void) => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 160,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(translate, {
          toValue: -12,
          duration: 160,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start(() => cb?.());
    },
    [opacity, translate]
  );

  const startProgress = React.useCallback(() => {
    Animated.timing(progress, {
      toValue: 0,
      duration,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [progress, duration]);

  return { opacity, translate, progress, inAnim, outAnim, startProgress };
}

function ToastItem({
  id,
  message,
  variant,
  onClose,
  duration = 3500,
}: {
  id: string;
  message: string;
  variant?: ToastVariant;
  onClose: (id: string) => void;
  duration?: number;
}) {
  const { opacity, translate, progress, inAnim, outAnim, startProgress } =
    useToastAnimation(duration);

  React.useEffect(() => {
    inAnim();
    startProgress();
    const t = setTimeout(() => outAnim(() => onClose(id)), duration);
    return () => clearTimeout(t);
  }, [id, duration, inAnim, outAnim, startProgress, onClose]);

  const barWidth = progress.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });

  const isColored = variant === 'success' || variant === 'error' || variant === 'info';

  return (
    <Animated.View
      style={{ opacity, transform: [{ translateY: translate }] }}
      className={cn(
        'w-11/12 max-w-md overflow-hidden rounded-xl border p-3 shadow-lg',
        'flex-row items-center',
        variant === 'success' && 'border-emerald-700 bg-emerald-600',
        variant === 'error' && 'border-rose-700 bg-rose-600',
        variant === 'info' && 'border-blue-700 bg-blue-600',
        (!variant || variant === 'default') && 'border-border bg-card'
      )}>
      <View className="mr-3">
        <ToastIcon variant={(variant as ToastVariant) ?? 'default'} />
      </View>

      <View className="flex-1">
        <Text className={cn('text-sm', isColored ? 'text-white' : 'text-foreground')}>
          {message}
        </Text>
        <View className="mt-2 h-1 w-full rounded-full bg-black/10">
          <Animated.View
            style={{ width: barWidth }}
            className={cn(
              'h-1 rounded-full',
              variant === 'success' && 'bg-white/70',
              variant === 'error' && 'bg-white/70',
              variant === 'info' && 'bg-white/70',
              (!variant || variant === 'default') && 'bg-primary/60'
            )}
          />
        </View>
      </View>

      <Pressable
        onPress={() => outAnim(() => onClose(id))}
        className="ml-3 rounded-md p-1.5 active:opacity-70">
        <X size={16} className={cn(isColored ? 'text-white' : 'text-foreground')} />
      </Pressable>
    </Animated.View>
  );
}

export function ToastHost() {
  const { toasts, hideToast } = useOverlay();
  if (!toasts.length) return null;

  return (
    <View className="pointer-events-none absolute left-0 right-0 bottom-5 items-center px-4">
      <View className="pointer-events-auto w-full items-center gap-2">
        {toasts.map((t) => (
          <ToastItem
            key={t.id}
            id={t.id}
            message={t.message}
            variant={t.variant as ToastVariant}
            onClose={hideToast}
          />
        ))}
      </View>
    </View>
  );
}
