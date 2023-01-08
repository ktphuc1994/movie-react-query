import { InterfaceMovie } from '../movies/movie.interface';
import { InterfaceHeThongRap } from '../theatres/theatre.interface';

interface InterfaceLichChieuPhim {
  maLichChieu: number;
  maRap: number;
  tenRap: string;
  ngayGioChieu: string;
}

interface InterfaceShowtimeInfo extends InterfaceMovie {
  heThongRap: InterfaceHeThongRap[];
}

interface InterfaceSeatInfo {
  maGhe: number;
  tenGhe: string;
  loaiGhe: string;
  giaVe: number;
  daDate: boolean;
  taiKhoan: number;
}
export type {
  InterfaceLichChieuPhim,
  InterfaceShowtimeInfo,
  InterfaceSeatInfo,
};
