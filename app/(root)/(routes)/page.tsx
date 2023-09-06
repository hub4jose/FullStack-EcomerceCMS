'use client';
import { useEffect } from 'react';

import { useStoreModel } from '@/hooks/use-store-modal';

const SetupPage = () => {
  const isOpen = useStoreModel((state) => state.isOpen);
  const onOpen = useStoreModel((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return;
};

export default SetupPage;
