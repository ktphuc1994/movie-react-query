import { InterfaceBaseProps } from '../common/baseProps.interface';
import { InterfaceShowtime, InterfaceSeatInfo } from './booking.interface';

export interface InterfaceSeatDetailsComponent extends InterfaceBaseProps {
  seatInfo: InterfaceSeatInfo;
  handleSelectSeat: (seatInfo: InterfaceSeatInfo) => void;
  selectedSeatList: InterfaceSeatInfo[];
}

export interface InterfaceSelectedDetailTicketsComponent
  extends InterfaceBaseProps {
  showtimeInfo: InterfaceShowtime;
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
