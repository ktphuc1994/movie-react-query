import { useParams } from 'react-router-dom';

// import React Query
import { useQuery } from '@tanstack/react-query';

// import local components
import MovieTabItem from './MovieTabItem';

// import ANTD Components
import { Tabs } from 'antd';

// import local interfaces
import { InterfaceCumRap } from '../../core/interface/theatres/theatre.interface';

// import local services
import MOVIE_SERV from '../../core/services/movieServ';

export default function TheatresListPage() {
  const { maHeThongRap } = useParams();

  const { data: theatreChains } = useQuery(['theatre', maHeThongRap], () =>
    MOVIE_SERV.getTheatreChainAndSchedule(maHeThongRap),
  );

  const renderTheatreChainsList = () =>
    theatreChains?.map((chain, index) => ({
      label: (
        <img
          className="w-16 h-16 mb-2"
          src={chain.logo}
          alt={chain.maHeThongRap}
        />
      ),
      key: chain.maHeThongRap.toString() + index,
      children: (
        <Tabs
          className="theatre__lists"
          defaultActiveKey="1"
          tabPosition="left"
          style={{
            maxHeight: '70vh',
          }}
          items={renderTheatresList(chain.cumRap!)}
        />
      ),
    }));
  const renderTheatresList = (lstCumRap: InterfaceCumRap[]) =>
    lstCumRap.map((cumRap, index) => ({
      label: (
        <div className="theatre__details text-left text-white/50 hover:text-white transition duration-300">
          <p className="mb-0 font-semibold text-[16px]">{cumRap.tenCumRap}</p>
          <p className="mb-0">{cumRap.diaChi}</p>
        </div>
      ),
      key: cumRap.maCumRap.toString() + index,
      children: (
        <div
          style={{ maxHeight: '70vh', overflowY: 'scroll' }}
          className="space-y-4"
        >
          {cumRap.phim!.map((movie, index) => (
            <div key={movie.maPhim.toString() + index}>
              <MovieTabItem movie={movie} />
            </div>
          ))}
        </div>
      ),
    }));
  return (
    <div className="ourTheatres container xl:max-w-screen-xl mx-auto px-2 sm:px-0">
      <h2 className="mb-5 pb-3 border-b-2 text-3xl text-white">
        Hệ thống rạp chiếu của chúng tôi
      </h2>
      <Tabs
        className="theatre__chains"
        defaultActiveKey="1"
        tabPosition="top"
        style={{
          maxHeight: '90vh',
        }}
        items={renderTheatreChainsList()}
      />
    </div>
  );
}
