import React from 'react';

type Toast = { id: string; message: string; variant?: 'default'|'success'|'error' };
type AlertOptions = { title: string; message?: string; confirmText?: string; cancelText?: string; onConfirm?: () => void; onCancel?: () => void };
type ModalOptions = { key?: string; content: React.ReactNode; dismissOnBackdrop?: boolean };

type OverlayContextType = {
  showToast: (t: Omit<Toast,'id'>) => string;
  hideToast: (id: string) => void;
  showAlert: (a: AlertOptions) => void;
  hideAlert: () => void;
  showModal: (m: ModalOptions) => void;
  hideModal: () => void;
  toasts: Toast[];
  alert: AlertOptions | null;
  modal: ModalOptions | null;
};

export const OverlayContext = React.createContext<OverlayContextType | null>(null);

export function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const [alert, setAlert] = React.useState<AlertOptions | null>(null);
  const [modal, setModal] = React.useState<ModalOptions | null>(null);

  const showToast = (t: Omit<Toast,'id'>) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { id, ...t }]);
    return id;
  };
  const hideToast = (id: string) => setToasts(prev => prev.filter(x => x.id !== id));
  const showAlert = (a: AlertOptions) => setAlert(a);
  const hideAlert = () => setAlert(null);
  const showModal = (m: ModalOptions) => setModal(m);
  const hideModal = () => setModal(null);

  const value = { showToast, hideToast, showAlert, hideAlert, showModal, hideModal, toasts, alert, modal };

  return (
    <OverlayContext.Provider value={value}>
      {children}
    </OverlayContext.Provider>
  );
}
