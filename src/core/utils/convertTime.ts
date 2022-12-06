import moment from 'moment';
import { TIME_FORMAT_CONST } from '../constants/time.const';

const convertTime = (timeString: Date, timeFormat: string) =>
  moment(timeString).format(timeFormat);

const convertTimeOnlyYear = (timeString: Date) =>
  convertTime(timeString, TIME_FORMAT_CONST.ONLY_YEAR_FORMAT);

const convertTimeMovieFormat = (timeString: Date) =>
  convertTime(timeString, TIME_FORMAT_CONST.FULL_TIME_MOVIE_FORMAT);

export { convertTimeOnlyYear, convertTimeMovieFormat };
