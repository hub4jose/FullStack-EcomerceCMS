'use client';

import { useEffect, useState } from 'react';

import { toast } from 'react-hot-toast';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';

interface AlertModalprops {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const AlertModal: React.FC<AlertModalprops> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Modal
      title="Are you sure?"
      description="This cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={loading} variant="destructive" onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
