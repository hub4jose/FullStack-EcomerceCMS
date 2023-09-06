'use client';

import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  onConfirm,
  children,
}): any => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

// const onChange = (open: boolean) => {
//     if (!open) {
//       onClose();
//     }
//   };

//   onOpenChange={onChange}
