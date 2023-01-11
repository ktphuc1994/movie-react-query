import { InterfaceSeatInfo } from '../../core/interface/booking/booking.interface';

export const bookingUtils = {
  renderSelectedSeat: (selectedSeatList: InterfaceSeatInfo[]) => {
    const selectedSeats = selectedSeatList.map((seat) => seat.tenGhe);
    selectedSeats.sort(
      new Intl.Collator('en', { numeric: true, sensitivity: 'base' }).compare,
    );
    return selectedSeats.join(', ');
  },
};
