import dayjs from 'dayjs';
import { useQuery } from '@tanstack/react-query';

// import local services
import MOVIE_SERV from '../../core/services/movieServ';

// import local components
import MoviesList from './MoviesList';
import InnerSpinner from '../../core/Components/Spinners/InnerSpinner';

// import local constants
import { TIME_FORMAT_CONST } from '../../core/constants/time.const';

// import ANTD Components
import { Button, DatePicker, Form, Input } from 'antd';
const { RangePicker } = DatePicker;
const dateFormat = TIME_FORMAT_CONST.DAY_MONTH_YEAR_FORMAT;

// ANTD Config
const formConfig = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
  initialValues: {
    tenPhim: '',
    ngayKhoiChieuPicker: [
      dayjs(Date.now()),
      dayjs(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000),
    ],
  },
};
const rangeConfig = {
  rules: [
    { type: 'array' as const, required: true, message: 'Please select time!' },
  ],
};

const HomePage = () => {
  const {
    isLoading,
    isFetching,
    data: moviesList,
  } = useQuery(['moviesList'], MOVIE_SERV.getMovieList, {
    staleTime: 3600000,
    cacheTime: 3600000,
  });

  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.
    console.log('Received values of form: ', fieldsValue);
    const rangeValue = fieldsValue['ngayKhoiChieuPicker'];
    const fromDate = rangeValue[0].format('YYYY-MM-DD');
    const toDate = rangeValue[1].format('YYYY-MM-DD');
    const value = { tenPhim: fieldsValue.tenPhim, fromDate, toDate };
    console.log('Output values of form: ', value);
  };
  const renderMovieFilter = () => (
    <Form name="movie_filter_control" {...formConfig} onFinish={onFinish}>
      <Form.Item name="tenPhim" label="Tên phim">
        <Input />
      </Form.Item>
      <Form.Item
        name="ngayKhoiChieuPicker"
        label="Ngày khỏi chiếu"
        {...rangeConfig}
      >
        <RangePicker format={dateFormat} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }}
      >
        <Button danger type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <>
      <div className="container xl:max-w-screen-xl mx-auto">
        <h3 className="mt-10 font-semibold text-2xl">DANH SÁCH PHIM</h3>

        {isLoading || isFetching ? (
          <InnerSpinner />
        ) : (
          <>
            {renderMovieFilter()}
            <MoviesList moviesList={moviesList} />
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;
