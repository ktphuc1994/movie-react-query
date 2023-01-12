import { InterfaceMovieAndSchedule } from '../booking/booking.interface';
import { InterfaceBaseProps } from '../common/baseProps.interface';

export interface InterfaceMovieTabItemComponent extends InterfaceBaseProps {
  movie: InterfaceMovieAndSchedule;
}
