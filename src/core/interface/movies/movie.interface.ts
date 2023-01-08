interface InterfaceMovie {
  maPhim: number;
  tenPhim: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  ngayKhoiChieu: Date;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}
interface InterfaceBanner {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
}

export type { InterfaceMovie, InterfaceBanner };
