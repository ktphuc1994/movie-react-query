import { useQueryClient } from '@tanstack/react-query';

// import local constants
import { TIME_FORMAT_CONST } from '../../core/constants/time.const';
import defaultConst from '../../core/constants/defaultConst';

// import interface and types
import { InterfaceMovieFilterBarComponent } from '../../core/interface/movies/movieComponent.interface';
import type { Dayjs } from 'dayjs';

// import ANTD Components
import { Button, DatePicker, Form, Input } from 'antd';
const { RangePicker } = DatePicker;

// ANTD Config
const dateFormat = TIME_FORMAT_CONST.DAY_MONTH_YEAR_FORMAT;
const formConfig = {
  //   labelCol: {
  //     xs: { span: 24 },
  //     sm: { span: 8 },
  //   },
  //   wrapperCol: {
  //     xs: { span: 24 },
  //     sm: { span: 16 },
  //   },
  initialValues: {
    tenPhim: '',
    ngayKhoiChieuPicker: defaultConst.movieFilterTimeRange,
  },
};
const rangeConfig = {
  rules: [
    { type: 'array' as const, required: true, message: 'Please select time!' },
  ],
};

const MovieFilterBar = ({
  tenPhimRef,
  ngayKhoiChieuPickerRef,
}: InterfaceMovieFilterBarComponent) => {
  const queryClient = useQueryClient();

  const onRangeChange = (dates: null | (Dayjs | null)[], _: string[]) => {
    if (dates) {
      ngayKhoiChieuPickerRef.current = [...dates];
    } else {
      ngayKhoiChieuPickerRef.current = [...defaultConst.movieFilterTimeRange];
    }
  };
  const onFinish = (fieldsValue: any) => {
    // Should format date value before submit.
    queryClient.invalidateQueries(['moviesList']);
  };

  return (
    <Form
      name="movie_filter_control"
      {...formConfig}
      onFinish={onFinish}
      layout={'inline'}
      style={{ marginBottom: '20px' }}
    >
      <Form.Item name="tenPhim" label="Tên phim">
        <Input ref={tenPhimRef} />
      </Form.Item>
      <Form.Item
        name="ngayKhoiChieuPicker"
        label="Ngày khỏi chiếu"
        {...rangeConfig}
      >
        <RangePicker format={dateFormat} onChange={onRangeChange} />
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
};

export default MovieFilterBar;
