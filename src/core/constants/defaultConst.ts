import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

type defaultConstants = {
  timeRange: [Dayjs, Dayjs];
  movieFilterTimeRange: [Dayjs, Dayjs];
};

const defaultConst: defaultConstants = {
  timeRange: [dayjs(Date.parse('1970-01-01')), dayjs(Date.parse('2099-01-01'))],
  movieFilterTimeRange: [
    dayjs(Date.now() - 1 * 30 * 24 * 60 * 60 * 1000),
    dayjs(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000),
  ],
};

export default defaultConst;
