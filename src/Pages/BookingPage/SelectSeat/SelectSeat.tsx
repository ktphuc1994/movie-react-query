import { useState } from 'react';
import { useParams } from 'react-router-dom';

// import react query
import { useQuery } from '@tanstack/react-query';

// import other library
import moment from 'moment';

// import local components
import SeatDetails from './SeatDetails';
import SelectedDetailTickets from './SelectedDetailTickets';
import NotifyModal from '../../../core/Components/Utils/NotifyModal';

// import local interface
import { InterfaceSeatInfo } from '../../../core/interface/booking/booking.interface';

// import local services
import MOVIE_SERV from '../../../core/services/movieServ';

// import local constants
import { webColor } from '../../../core/constants/colorConst';
import BookingConfirmation from '../BookingConfirmation';

export default function SelectSeat() {
  const { maLichChieu } = useParams();
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState<boolean>(false);
  const [selectedSeatList, setSelectedSeatList] = useState<InterfaceSeatInfo[]>(
    [],
  );
  const [step, setStep] = useState<1 | 2>(1);

  // Lấy thông tin lịch chiếu theo mã lịch chiếu
  const { data } = useQuery(
    ['showtimeAndSeat', maLichChieu],
    () => MOVIE_SERV.getShowtimeDetail(maLichChieu!),
    { staleTime: 60 * 60 * 1000, cacheTime: 60 * 60 * 1000 },
  );
  if (!data) return null;

  const { danhSachGhe, ...showtimeInfo } = data;
  const collator = new Intl.Collator('en', {
    numeric: true,
    sensitivity: 'base',
  });
  danhSachGhe.sort((a, b) => collator.compare(a.tenGhe, b.tenGhe));

  // HANDLE Notify Modal
  const handleOKClick = () => {
    setIsNotifyModalOpen(false);
  };
  const handleCancelClick = () => {
    setIsNotifyModalOpen(false);
  };

  // HANDLE chọn ghế
  const handleSelectSeat = (seatInfo: InterfaceSeatInfo) => {
    let newSelectedSeatList = [...selectedSeatList];
    if (seatInfo.daDat) return;
    const selectedSeatIndex = newSelectedSeatList.findIndex(
      (item) => item.maGhe === seatInfo.maGhe,
    );
    if (selectedSeatIndex === -1) {
      newSelectedSeatList.push(seatInfo);
      setSelectedSeatList(newSelectedSeatList);
      return;
    }
    newSelectedSeatList.splice(selectedSeatIndex, 1);
    setSelectedSeatList(newSelectedSeatList);
  };

  // Render danh sách ghế ra màn hình
  const renderSeats = () => {
    return (
      <>
        <div className="max-w-xl mx-auto p-5 sm:p-0 grid grid-cols-12 gap-2">
          {danhSachGhe.map((seatInfo, index) => (
            <SeatDetails
              key={seatInfo.maGhe.toString() + index}
              seatInfo={seatInfo}
              handleSelectSeat={handleSelectSeat}
              selectedSeatList={selectedSeatList}
            />
          ))}
        </div>
        <div className="max-w-lg mx-auto grid grid-cols-2">
          <div className="flex items-center mt-5">
            <div className="h-5 w-5 mr-3" style={webColor.seat.selected}></div>
            <p className="m-0">Đang chọn</p>
          </div>
          <div className="flex items-center mt-5">
            <div className="h-5 w-5 mr-3" style={webColor.seat.regular}></div>
            <p className="m-0">Thường</p>
          </div>
          <div className="flex items-center mt-5">
            <div className="h-5 w-5 mr-3" style={webColor.seat.booked}></div>
            <p className="m-0">Đã được đặt</p>
          </div>
          <div className="flex items-center mt-5">
            <div className="h-5 w-5 mr-3" style={webColor.seat.vip}></div>
            <p className="m-0">VIP (Prime)</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {step === 1 ? (
        <div className="container xl:max-w-screen-xl mx-auto px-2 sm:px-0">
          <h2 className="mb-6 pb-3 border-b-2 text-3xl text-white">Đặt vé</h2>
          <div className="container max-w-screen-lg mx-auto border border-white/50">
            <div className="theatreInfo p-5">
              <p className="mb-2 font-bold text-2xl uppercase">
                {showtimeInfo.tenPhim}
              </p>
              <p className="mb-1 font-semibold text-xl">
                {showtimeInfo.tenCumRap} | {showtimeInfo.tenRap}
              </p>
              <p className="text-white/80">{showtimeInfo.diaChi}</p>
              <p className="mb-0 text-lg text-white/80">
                Xuất chiếu:{' '}
                <span className="text-white font-semibold">
                  {moment(showtimeInfo.ngayGioChieu).format('DD/MM/YYYY hh:mm')}
                </span>
              </p>
            </div>
            <div className="mb-8">
              <p className="py-2 px-5 bg-gray-600 text-center text-lg font-semibold text-white">
                Chọn ghế
              </p>
              <div className="px-5">
                <img
                  className="w-full mt-8 mb-12"
                  src="https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/bg-screen.png"
                  alt=""
                />
              </div>
              {renderSeats()}
            </div>
            <SelectedDetailTickets
              setIsNotifyModalOpen={setIsNotifyModalOpen}
              showtimeInfo={showtimeInfo}
              selectedSeatList={selectedSeatList}
              setStep={setStep}
            />
          </div>
        </div>
      ) : (
        <BookingConfirmation
          showtimeInfo={showtimeInfo}
          selectedSeatList={selectedSeatList}
          setStep={setStep}
        />
      )}
      <NotifyModal
        isNotifyModalOpen={isNotifyModalOpen}
        handleOKClick={handleOKClick}
        handleCancelClick={handleCancelClick}
      >
        Vui lòng chọn ghế để tiếp tục đặt vé
      </NotifyModal>
    </>
  );
}
