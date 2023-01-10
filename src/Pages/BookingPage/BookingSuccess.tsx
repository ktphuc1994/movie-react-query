import moment from 'moment';
import { QRCodeSVG } from 'qrcode.react';
import { createPortal } from 'react-dom';
import { generalStyle } from '../../core/styles/generalStyle';
// import { heroIcon } from '../../constants/heroIcon';
import { InterfaceBookingSuccessComponent } from '../../core/interface/booking/bookingComponent.interface';
import { bookingUtils } from './bookingUtils';

export default function BookingSuccess({
  isBookingSuccessOpen,
  handleCloseBookingSuccess,
  selectedSeatList,
  scheduleInfo,
}: InterfaceBookingSuccessComponent) {
  if (!isBookingSuccessOpen) return null;
  if (!scheduleInfo) return null;
  return createPortal(
    <>
      <div style={generalStyle.modalOverlay}></div>
      <div
        style={generalStyle.modal}
        className="bookingSuccess bg-white p-5 w-2/3 sm:w-3/5 md:w-1/2 lg:w-auto"
      >
        <div className="absolute top-3 right-3">
          <button onClick={handleCloseBookingSuccess}>X</button>
        </div>
        <div className="bookingSuccess__wrapper max-h-[90vh] mt-5 overflow-y-auto">
          <div className="ticketDetails border-b border-dashed border-black">
            <h4 className="uppercase font-semibold text-2xl text-center text-red-500">
              Đặt vé thành công
            </h4>
            <div className="pb-5 space-y-4 text-[16px]">
              <p className="mb-0 uppercase font-semibold text-xl">
                {scheduleInfo.tenPhim}
              </p>
              <div className="space-y-0">
                <p className="mb-0 font-semibold">Xuất chiếu:</p>
                <p>{moment(scheduleInfo.ngayGioChieu).format('DD/MM/YYYY')}</p>
                <p>{moment(scheduleInfo.ngayGioChieu).format('hh:mm')}</p>
              </div>
              <div className="space-y-0">
                <p className="mb-0 font-semibold">Tên Rạp:</p>
                <p>{scheduleInfo.tenCumRap}</p>
                <p>{scheduleInfo.tenRap}</p>
              </div>
              <div className="space-y-0">
                <p className="mb-0 font-semibold">Ghế:</p>
                <p>{bookingUtils.renderSelectedSeat(selectedSeatList)}</p>
              </div>
              <p className="font-semibold text-lg text-center">
                Cảm ơn quý khách đã đặt vé cùng chúng tôi
              </p>
            </div>
          </div>
          <div className="ticketQRCode py-5 border-b border-dashed border-black flex justify-center">
            <QRCodeSVG
              value={
                scheduleInfo.maLichChieu.toString +
                JSON.stringify(selectedSeatList)
              }
            />
          </div>
          <p className="my-2 text-lg text-center">
            Vui lòng xuất trình mã QR tại quầy để nhận vé
          </p>
        </div>
      </div>
    </>,
    document.getElementById('portal')!,
  );
}
