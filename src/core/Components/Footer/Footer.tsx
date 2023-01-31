import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import MOVIE_SERV from '../../services/movieServ';

const Footer = () => {
  const { error, data: theatreChainsList } = useQuery(
    ['theatreChainsList'],
    MOVIE_SERV.getTheaterChainList,
    { staleTime: 3600000, cacheTime: 3600000 },
  );

  let renderTheatreChainLogos = () => {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
      return;
    }
    return theatreChainsList?.map((chain, index) => {
      return (
        <img
          className="w-16 h-16"
          src={chain.logo}
          alt={chain.maHeThongRap}
          key={chain.maHeThongRap.toString() + index}
        />
      );
    });
  };

  return (
    <footer className="py-5">
      <hr className="sm:mx-auto border-gray-700" />
      <div className="xl:max-w-screen-xl container mx-auto pt-8 px-3 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3">
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white uppercase">
            Điều khoản sử dụng
          </h2>
          <ul>
            <li className="mb-3">
              <a
                href="#"
                className="text-[16px] text-white/60 hover:text-white"
              >
                Điều Khoản Chung
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-[16px] text-white/60 hover:text-white"
              >
                Điều Khoản Giao Dịch
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-[16px] text-white/60 hover:text-white"
              >
                Chính Sách Thanh Toán
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-[16px] text-white/60 hover:text-white"
              >
                Chính Sách Bảo Mật
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-3 sm:mb-0">
          <h2 className="mb-4 text-lg font-semibold text-white uppercase">
            Đối tác
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {renderTheatreChainLogos()}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white uppercase">
            Download
          </h2>
          <ul>
            <li className="mb-3">
              <a
                href="#"
                className="text-[16px] text-white/60 hover:text-white"
              >
                iOS
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-[16px] text-white/60 hover:text-white"
              >
                Android
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-[16px] text-white/60 hover:text-white"
              >
                Windows
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-[16px] text-white/60 hover:text-white"
              >
                MacOS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 sm:mx-auto lg:my-8 border-gray-700" />
      <div className="px-2 sm:px-5 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-1/3 mt-4 lg:mt-0 text-[16px] text-gray-400 text-center">
          <p className="mb-0">
            © 2022 <span className="font-semibold text-white">The Miracle</span>
            . All Rights Reserved.
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <img className="h-24" src="/movieLogo.png" alt="web-logo" />
        </div>
        <div className="hidden lg:block w-1/3">
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
