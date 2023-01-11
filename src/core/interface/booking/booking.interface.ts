import { InterfaceMovie } from '../movies/movie.interface';
import { InterfaceHeThongRap } from '../theatres/theatre.interface';

export interface InterfaceLichChieuPhim {
  maLichChieu: number;
  maRap: number;
  tenRap: string;
  ngayGioChieu: string;
}

export interface InterfaceScheduleInfo extends InterfaceMovie {
  heThongRap: InterfaceHeThongRap[];
}

export interface InterfaceSeatInfo {
  maGhe: number;
  tenGhe: string;
  loaiGhe: string;
  maRap: number;
  giaVe: number;
  daDat: boolean;
  taiKhoan: number;
}

export interface InterfaceShowtime {
  maLichChieu: number;
  tenCumRap: string;
  diaChi: string;
  tenRap: string;
  tenPhim: string;
  hinhAnh: string;
  ngayGioChieu: string;
}

export interface InterfaceShowtimeAndSeat extends InterfaceShowtime {
  danhSachGhe: InterfaceSeatInfo[];
}

export interface InterfaceCreateTicket {
  maLichChieu: number;
  danhSachGhe: number[];
}
