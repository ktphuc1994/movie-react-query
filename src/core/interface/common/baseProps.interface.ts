interface InterfaceBaseProps {
  children?: React.ReactNode;
  className?: string;
}

interface InterfaceNotifyModal extends InterfaceBaseProps {
  isNotifyModalOpen: boolean;
  handleCancelClick: () => void;
  handleOKClick: () => void;
}

export type { InterfaceBaseProps, InterfaceNotifyModal };
