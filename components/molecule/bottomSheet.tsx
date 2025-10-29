
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Modal, Pressable, View, Animated, Easing } from 'react-native';

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ visible, onClose, children }) => {
  const slideAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  const slideUp = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <Pressable className="flex-1 bg-black/50" onPress={onClose}>
        <Animated.View
          style={[{ transform: [{ translateY: slideUp }] }]}
          className="absolute bottom-0 left-0 right-0 bg-card p-6 rounded-t-2xl"
        >
          {children}
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

export { BottomSheet };
