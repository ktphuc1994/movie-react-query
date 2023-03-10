import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import other library
import moment from 'moment';

// import local services
import MOVIE_SERV from '../../core/services/movieServ';

// import local components
import BookingSuccess from './BookingSuccess';

// import ANTD Components
import { Button, message } from 'antd';

// import local interface
import { InterfaceBookingConfirmationComponent } from '../../core/interface/booking/bookingComponent.interface';

// import local utils
import { numberWithCommas } from '../../core/utils/utils';
import { bookingUtils } from './bookingUtils';

export default function BookingConfirmation({
  showtimeInfo,
  selectedSeatList,
  setStep,
}: InterfaceBookingConfirmationComponent) {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [isBookingSuccessOpen, setIsBookingSuccessOpen] = useState(false);

  let getTotalPrice = () =>
    selectedSeatList.reduce((total, item) => total + item.giaVe, 0);

  let handleCloseBookingSuccess = () => {
    message.success('Chuyển hướng về Trang chủ', 2);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  let handleXacNhanDatVe = () => {
    let ticketsInfo = {
      maLichChieu: showtimeInfo.maLichChieu,
      danhSachGhe: selectedSeatList.map((seatInfo) => seatInfo.maGhe),
    };
    MOVIE_SERV.postBookTicket(ticketsInfo)
      .then(() => {
        setIsBookingSuccessOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let renderTicketDetails = () => {
    return (
      <>
        {selectedSeatList.map((item, index) => {
          return (
            <tr
              className="border-white/50 border-b"
              key={item.maGhe.toString() + index}
            >
              <th scope="row" className="py-4 px-6">
                {index + 1}
              </th>
              <td className="py-4 px-6 font-medium text-white whitespace-nowrap">
                {item.tenGhe}
              </td>
              <td className="py-4 px-6">
                {item.loaiGhe === 'Thuong' ? 'Thường' : 'VIP'}
              </td>
              <td className="py-4 px-6">{numberWithCommas(item.giaVe)} đ</td>
              <td className="py-4 px-6">{numberWithCommas(item.giaVe)} đ</td>
            </tr>
          );
        })}
        <tr className="border-white/50 border-b text-lg font-semibold">
          <td className="py-4 px-6 text-white whitespace-nowrap" colSpan={4}>
            TỔNG CỘNG:
          </td>
          <td className="py-4 px-6 text-white whitespace-nowrap">
            {numberWithCommas(getTotalPrice())} đ
          </td>
        </tr>
        <tr>
          <td colSpan={4}></td>
          <td className="pt-6 pb-3 px-6 font-medium text-white whitespace-nowrap">
            <button
              type="button"
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 rounded-lg focus:ring-red-900 font-medium text-white text-lg md:text-xl transition duration-300"
              onClick={handleXacNhanDatVe}
            >
              Thanh toán
            </button>
          </td>
        </tr>
      </>
    );
  };

  return (
    <div className="container xl:max-w-screen-xl mx-auto px-2 sm:px-0">
      <h2 className="pb-3 mb-6 border-b-2 text-3xl text-white">Đặt vé</h2>
      {!showtimeInfo ? null : (
        <>
          <Button
            onClick={() => {
              setStep(1);
            }}
          >
            Trở về trước
          </Button>
          <div className="movieInfo flex mb-5">
            <div className="movieInfo__cover w-1/4 lg:w-1/6 mr-6 flex-shrink-0">
              <img
                src={showtimeInfo.hinhAnh}
                alt={showtimeInfo.tenPhim}
                className="object-contain w-full"
              />
            </div>
            <div className="movieInfo__detail">
              <p className="mb-2 font-bold text-xl lg:text-2xl uppercase">
                {showtimeInfo.tenPhim}
              </p>
              <p className="mb-0 font-semibold text-lg">
                {showtimeInfo.tenCumRap}
              </p>
              <p className="mb-2 text-white/80">{showtimeInfo.diaChi}</p>
              <p className="mb-0 text-lg">{showtimeInfo.tenRap}</p>
              <p className="mb-0 text-white/70 text-[16px]">
                Ghế:{' '}
                <span className="font-semibold text-lg text-white">
                  {bookingUtils.renderSelectedSeat(selectedSeatList)}
                </span>
              </p>
              <p className="mb-2 text-white/70 text-[16px]">
                Xuất chiếu:{' '}
                <span className="font-semibold text-lg text-white">
                  {moment(showtimeInfo.ngayGioChieu).format('hh:mm DD/MM/YYYY')}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
      <div>
        <h3 className="pb-3 mb-6 border-b-2 text-2xl lg:text-3xl text-white">
          Chi tiết
        </h3>
        <div className="overflow-x-auto relative">
          <table className="w-full text-center text-gray-400">
            <thead className="uppercase bg-gray-700/70 text-white/70">
              <tr>
                <th scope="col" className="py-3 px-6">
                  STT
                </th>
                <th scope="col" className="py-3 px-6">
                  Ghế
                </th>
                <th scope="col" className="py-3 px-6">
                  Loại ghế
                </th>
                <th scope="col" className="py-3 px-6">
                  Đơn giá
                </th>
                <th scope="col" className="py-3 px-6">
                  Thành tiền
                </th>
              </tr>
            </thead>
            <tbody className="text-[16px]">{renderTicketDetails()}</tbody>
          </table>
        </div>
      </div>
      <BookingSuccess
        isBookingSuccessOpen={isBookingSuccessOpen}
        handleCloseBookingSuccess={handleCloseBookingSuccess}
        selectedSeatList={selectedSeatList}
        showtimeInfo={showtimeInfo}
      />
    </div>
  );
}
