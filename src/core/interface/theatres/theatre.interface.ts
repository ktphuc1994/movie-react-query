import {
  InterfaceLichChieuPhim,
  InterfaceMovieAndSchedule,
} from '../booking/booking.interface';

interface InterfaceHeThongRap {
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
  cumRap?: InterfaceCumRap[];
}

interface InterfaceCumRap {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  lichChieuPhim?: InterfaceLichChieuPhim[];
  phim?: InterfaceMovieAndSchedule[];
}

export type { InterfaceHeThongRap, InterfaceCumRap };
