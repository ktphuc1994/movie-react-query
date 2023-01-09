// import local interfaces
import { InterfaceSeatDetailsComponent } from '../../../core/interface/booking/bookingComponent.interface';

// import local constants
import { webColor } from '../../../core/constants/colorConst';

export default function SeatDetails({
  seatInfo,
  handleSelectSeat,
  selectedSeatList,
}: InterfaceSeatDetailsComponent) {
  const selectedSeatIndex = selectedSeatList.findIndex(
    (item) => item.maGhe === seatInfo.maGhe,
  );
  const seatStatus = () => {
    if (seatInfo.daDat === true) {
      return webColor.seat.booked;
    }
    if (selectedSeatIndex !== -1) {
      return webColor.seat.selected;
    }
    if (seatInfo.loaiGhe === 'Regular') {
      return webColor.seat.regular;
    }
    return webColor.seat.vip;
  };

  return (
    <div
      className="p-0 md:p-1 flex justify-center items-center"
      style={seatStatus()}
      onClick={() => {
        handleSelectSeat(seatInfo);
      }}
    >
      <p className="m-0 text-xs md:text-sm">{seatInfo.tenGhe}</p>
    </div>
  );
}
