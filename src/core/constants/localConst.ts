const localConst = {
  AUTH_LOCAL_STORE_KEY: 'AUTH_INFO',
  USER_LOCAL_STORE_KEY: 'USER_INFO',
  CYBERSOFT_TOKEN:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNCIsIkhldEhhblN0cmluZyI6IjIwLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3Njg1MTIwMDAwMCIsIm5iZiI6MTY1NDEwMjgwMCwiZXhwIjoxNjc2OTk4ODAwfQ.QYLXMgjth5hQh9opZbNS7JEDPZGWA3o_95kR_VyLix8',
  // maNhom: 'GP03',
  BASE_URL: 'http://localhost:3500',
  BASE_BOOKING_URL: function (): string {
    return this.BASE_URL + '/api/QuanLyDatVe';
  },
  BASE_USER_URL: function (): string {
    return this.BASE_URL + '/api/QuanLyNguoiDung';
  },
  BASE_MOVIE_URL: function (): string {
    return this.BASE_URL + '/api/QuanLyPhim';
  },
  BASE_THEATER_URL: function (): string {
    return this.BASE_URL + '/api/QuanLyRap';
  },
};

export default localConst;
