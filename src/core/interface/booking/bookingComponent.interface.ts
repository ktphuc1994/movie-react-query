import { InterfaceBaseProps } from '../common/baseProps.interface';
import { InterfaceScheduleInfo, InterfaceSeatInfo } from './booking.interface';

export interface InterfaceSeatDetailsComponent extends InterfaceBaseProps {
  seatInfo: InterfaceSeatInfo;
  handleSelectSeat: (seatInfo: InterfaceSeatInfo) => void;
  selectedSeatList: InterfaceSeatInfo[];
}

export interface InterfaceSelectedDetailTicketsComponent
  extends InterfaceBaseProps {
  scheduleInfo: InterfaceScheduleInfo;
  selectedSeatList: InterfaceSeatInfo[];
  setIsNotifyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
