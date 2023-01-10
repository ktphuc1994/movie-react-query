import { InterfaceBaseProps } from '../common/baseProps.interface';
import { InterfaceSchedule, InterfaceSeatInfo } from './booking.interface';

export interface InterfaceSeatDetailsComponent extends InterfaceBaseProps {
  seatInfo: InterfaceSeatInfo;
  handleSelectSeat: (seatInfo: InterfaceSeatInfo) => void;
  selectedSeatList: InterfaceSeatInfo[];
}

export interface InterfaceSelectedDetailTicketsComponent
  extends InterfaceBaseProps {
  scheduleInfo: InterfaceSchedule;
  selectedSeatList: InterfaceSeatInfo[];
  setIsNotifyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setStep: React.Dispatch<React.SetStateAction<1 | 2>>;
}

export interface InterfaceBookingConfirmationComponent
  extends Omit<
    InterfaceSelectedDetailTicketsComponent,
    'setIsNotifyModalOpen'
  > {}

export interface InterfaceBookingSuccessComponent
  extends Omit<
    InterfaceSelectedDetailTicketsComponent,
    'setIsNotifyModalOpen' | 'setStep'
  > {
  isBookingSuccessOpen: boolean;
  handleCloseBookingSuccess: () => void;
}
