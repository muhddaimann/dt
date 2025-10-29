import React from 'react';
import { View, Text } from 'react-native';
import { useOverlay } from '@/hooks/useOverlay';
import { Button } from '../atom';

export function AlertHost() {
  const { alert, hideAlert } = useOverlay();
  if (!alert) return null;
  return (
    <View className="absolute inset-0 items-center justify-center bg-black/30">
      <View className="w-11/12 max-w-md rounded-lg border border-border bg-card p-4">
        <Text className="text-lg font-semibold">{alert.title}</Text>
        {!!alert.message && <Text className="mt-2 text-muted-foreground">{alert.message}</Text>}
        <View className="mt-4 flex-row justify-end gap-2">
          {alert.cancelText && (
            <Button variant="outline" onPress={() => { alert.onCancel?.(); hideAlert(); }}>
              <Text>{alert.cancelText}</Text>
            </Button>
          )}
          <Button onPress={() => { alert.onConfirm?.(); hideAlert(); }}>
            <Text className="text-primary-foreground">{alert.confirmText ?? 'OK'}</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
