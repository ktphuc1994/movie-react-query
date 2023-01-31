import { ReactNode } from 'react';
import { useQueryClient } from '@tanstack/react-query';

// import local constants
import { TIME_FORMAT_CONST } from '../../core/constants/time.const';
import defaultConst from '../../core/constants/defaultConst';

// import Styled components
import { StyleWrapperDatePicker } from '../../core/Components/styledComponents/StyledWrapperDatePicker';

// import interface and types
import { InterfaceMovieFilterBarComponent } from '../../core/interface/movies/movieComponent.interface';
import type { Dayjs } from 'dayjs';

// import ANTD Components
import { Button, DatePicker, Input } from 'antd';
const { RangePicker } = DatePicker;
const panelRender = (panelNode: ReactNode) => (
  <StyleWrapperDatePicker>{panelNode}</StyleWrapperDatePicker>
);

// Filter Category Config
const dateFormat = TIME_FORMAT_CONST.DAY_MONTH_YEAR_FORMAT;
const formItemStyle = {
  className: 'space-y-1',
};

const MovieFilterBar = ({
  tenPhimRef,
  ngayKhoiChieuPickerRef,
}: InterfaceMovieFilterBarComponent) => {
  const queryClient = useQueryClient();

  const onRangeChange = (
    dates: null | [Dayjs | null, Dayjs | null],
    _: [string, string],
  ) => {
    if (dates) {
      ngayKhoiChieuPickerRef.current = [...dates];
    } else {
      ngayKhoiChieuPickerRef.current = [...defaultConst.timeRange];
    }
  };
  const onFinish = () => {
    // Should format date value before submit.
    queryClient.invalidateQueries(['moviesList']);
  };

  return (
    <>
      <div
        id="movie_filter_control"
        className="mb-6 grid grid-cols-1 lg:grid-cols-3 lg:gap-6 space-y-4 lg:space-y-0"
      >
        <div {...formItemStyle}>
          <label htmlFor="tenPhim">Tên phim</label>
          <Input
            id="ten-phim-search-input"
            name="tenPhim"
            ref={tenPhimRef}
            defaultValue=""
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                document.getElementById('movie-list-search')?.click();
              }
            }}
          />
        </div>
        <div {...formItemStyle}>
          <label htmlFor="releaseRangePicker">Ngày Khởi Chiếu</label>
          <RangePicker
            name="releaseRangePicker"
            style={{ width: '100%' }}
            format={dateFormat}
            onChange={onRangeChange}
            defaultValue={ngayKhoiChieuPickerRef.current}
            panelRender={panelRender}
            inputReadOnly={true}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'end',
          }}
          {...formItemStyle}
        >
          <Button
            id="movie-list-search"
            className="w-full lg:w-auto"
            danger
            type="primary"
            onClick={onFinish}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default MovieFilterBar;
