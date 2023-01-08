import { InterfaceSeatInfo } from '../../core/interface/booking/booking.interface';

export const bookingUtils = {
  renderSelectedSeat: (selectedSeatList: InterfaceSeatInfo[]) => {
    const selectedSeats = selectedSeatList.map((seat) => seat.maGhe);
    return selectedSeats.join(', ');
  },
};
