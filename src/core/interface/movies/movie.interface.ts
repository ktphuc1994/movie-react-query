export interface InterfaceMovie {
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

export interface InterfaceMoviePagination {
  currentPage: number;
  itemsOnThisPage: number;
  totalItems: number;
  totalPages: number;
  items: InterfaceMovie[];
}

export interface InterfaceBanner {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
}

export interface InterfaceGetMoviePagination {
  tenPhim: string | undefined;
  currentPage?: string | undefined;
  itemsPerPage?: string | undefined;
  fromDate: string | undefined;
  toDate: string | undefined;
}
