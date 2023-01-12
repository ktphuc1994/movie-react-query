interface InterfaceBaseProps {
  children?: React.ReactNode;
  className?: string;
}

interface InterfaceNotifyModal extends InterfaceBaseProps {
  okText?: string;
  isNotifyModalOpen: boolean;
  isCancelHidden?: boolean;
  handleCancelClick: () => void;
  handleOKClick: () => void;
}

export type { InterfaceBaseProps, InterfaceNotifyModal };
