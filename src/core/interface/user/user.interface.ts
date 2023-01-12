export interface InterfaceUser {
  taiKhoan: number;
  hoTen: string;
  email: string;
  soDt: string;
  loaiNguoiDung: string;
}

export interface InterfaceUserRegister
  extends Omit<InterfaceUser, 'loaiNguoiDung'> {}
