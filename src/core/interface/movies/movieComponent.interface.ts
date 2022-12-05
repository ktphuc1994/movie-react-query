import { InterfaceBaseProps } from '../common/baseProps.interface';
import { InterfaceMovie } from './movie.interface';

interface InterfaceMovieListComponent extends InterfaceBaseProps {
  moviesList: Array<InterfaceMovie>;
}

export type { InterfaceMovieListComponent };
