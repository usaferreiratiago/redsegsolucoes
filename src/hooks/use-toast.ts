import { toast as sonnerToast } from "sonner";
import * as React from "react";

type ToastOptions = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
};

function toast({ title, description, action, duration }: ToastOptions) {
  return sonnerToast(title ?? "", {
    description,
    duration,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
  });
}

function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  };
}

export { useToast, toast };
