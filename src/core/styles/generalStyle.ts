import { CSSProperties } from 'react';

const generalStyle: { [index: string]: CSSProperties } = {
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: 3,
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2,
  },
};

export { generalStyle };
