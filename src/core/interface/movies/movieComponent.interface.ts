import { MutableRefObject, RefObject } from 'react';

// import local interface
import { InterfaceBaseProps } from '../common/baseProps.interface';
import { InterfaceMovie } from './movie.interface';

// import types
import type { Dayjs } from 'dayjs';
import type { InputRef } from 'antd';

export interface InterfaceMovieListComponent extends InterfaceBaseProps {
  moviesList?: Array<InterfaceMovie>;
}

export interface InterfaceMovieFilterBarComponent extends InterfaceBaseProps {
  tenPhimRef: RefObject<InputRef>;
  ngayKhoiChieuPickerRef: MutableRefObject<(Dayjs | null)[]>;
}
