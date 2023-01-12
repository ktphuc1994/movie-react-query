import { NavLink } from 'react-router-dom';

// import ANTD Components
import { Tag } from 'antd';

// import local interface
import { InterfaceLichChieuPhim } from '../../core/interface/booking/booking.interface';
import { InterfaceMovieTabItemComponent } from '../../core/interface/theatres/theatreComponent.interface';

// import other library
import moment from 'moment';

export default function MovieTabItem({
  movie,
}: InterfaceMovieTabItemComponent) {
  const renderSchedule = (lstLichChieuPhim: InterfaceLichChieuPhim[]) => (
    <div className="mb-2">
      {lstLichChieuPhim.slice(0, 5).map((lichChieu, index) => (
        <NavLink
          to={`/selectseat/${lichChieu.maLichChieu}`}
          key={lichChieu.maLichChieu.toString() + index}
        >
          <button className="px-5 py-2.5 m-1.5 border rounded-lg border-white/50 hover:border-white font-medium text-sm text-center text-white/50 hover:text-white transition duration-300">
            {moment(lichChieu.ngayGioChieu).format('DD/MM/YYYY hh:mm a')}
          </button>
        </NavLink>
      ))}
    </div>
  );
  return (
    <div className="flex space-x-4">
      <img
        className="w-1/5 object-cover"
        src={movie.hinhAnh}
        alt={movie.maPhim.toString()}
      />
      <div className="text-white">
        <p className="mb-2 font-bold text-xl">
          {movie.tenPhim}{' '}
          {movie.hot ? (
            <Tag color="#f50" className="font-bold align-top">
              HOT
            </Tag>
          ) : (
            <></>
          )}
        </p>
        <p className="mb-1 text-lg">Lịch chiếu:</p>
        {renderSchedule(movie.lichChieuPhim)}
        <NavLink to={`/booking/${movie.maPhim}`}>
          <button className="ml-2 p-1 bg-white/70 hover:bg-white rounded-sm uppercase font-semibold text-black transition duration-300">
            Xem thêm
          </button>
        </NavLink>
      </div>
    </div>
  );
}
