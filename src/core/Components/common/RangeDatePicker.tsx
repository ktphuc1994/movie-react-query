import { ReactNode } from 'react';

import type { Dayjs } from 'dayjs';

// import antd components
import { DatePicker } from 'antd';

// import styled components
import { StyleWrapperDatePicker } from '../styledComponents/StyledWrapperDatePicker';

import { PickerComponentClass } from 'antd/es/date-picker/generatePicker/interface';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';

function RangeDatePicker(
  props: PickerComponentClass<
    RangePickerProps<Dayjs> & {
      dropdownClassName?: string | undefined;
      popupClassName?: string | undefined;
    },
    unknown
  >,
) {
  const panelRender = (panelNode: ReactNode) => (
    <StyleWrapperDatePicker>{panelNode}</StyleWrapperDatePicker>
  );
  return <DatePicker.RangePicker panelRender={panelRender} {...props} />;
}

export default RangeDatePicker;
