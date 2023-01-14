import dayjs from 'dayjs';

const defaultConst = {
  movieFilterTimeRange: [
    dayjs(Date.now() - 1 * 30 * 24 * 60 * 60 * 1000),
    dayjs(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000),
  ],
};

export default defaultConst;
