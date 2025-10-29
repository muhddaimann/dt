import React from 'react';
import { OverlayContext } from '@/contexts/overlayContext';

export function useOverlay() {
  const ctx = React.useContext(OverlayContext);
  if (!ctx) throw new Error('useOverlay must be used within OverlayProvider');
  return ctx;
}
