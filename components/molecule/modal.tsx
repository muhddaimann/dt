import React from 'react';
import { View, Pressable, Animated, Easing, BackHandler, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useOverlay } from '@/hooks/useOverlay';

export function ModalHost() {
  const { modal, hideModal } = useOverlay();
  const open = !!modal;

  const opacity = React.useRef(new Animated.Value(0)).current;
  const translate = React.useRef(new Animated.Value(12)).current;

  React.useEffect(() => {
    if (open) {
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 160, easing: Easing.out(Easing.quad), useNativeDriver: true }),
        Animated.timing(translate, { toValue: 0, duration: 180, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ]).start();
    } else {
      opacity.setValue(0);
      translate.setValue(12);
    }
  }, [open, opacity, translate]);

  React.useEffect(() => {
    if (!open) return;
    const onBack = () => {
      if (modal?.dismissOnBackdrop === false) return true;
      hideModal();
      return true;
    };
    const sub = BackHandler.addEventListener('hardwareBackPress', onBack);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (modal?.dismissOnBackdrop === false) return;
        hideModal();
      }
    };
    if (Platform.OS === 'web') window.addEventListener('keydown', onKey);
    return () => {
      sub.remove();
      if (Platform.OS === 'web') window.removeEventListener('keydown', onKey);
    };
  }, [open, modal, hideModal]);

  if (!open) return null;

  return (
    <View className="absolute inset-0 items-center justify-center" pointerEvents="box-none">
      <Animated.View
        style={{ opacity }}
        className="absolute inset-0 bg-black/40"
      />
      {modal.dismissOnBackdrop !== false && (
        <Pressable
          className="absolute inset-0"
          onPress={hideModal}
        />
      )}

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="w-full items-center px-4">
        <Animated.View
          style={{ transform: [{ translateY: translate }] }}
          className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card"
        >
          <ScrollView contentContainerClassName="p-4" keyboardShouldPersistTaps="handled">
            {modal?.content}
          </ScrollView>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  );
}
