import styled from 'styled-components';

export const StyleWrapperDatePicker = styled.div`
  .ant-picker-panel {
    &:last-child:has(.ant-picker-date-panel) {
      @media (max-width: 640px) {
        width: 0;
        position: absolute;
        .ant-picker-date-panel {
          position: absolute;
        }
        .ant-picker-header {
          position: absolute;
          right: 0;
          border-bottom: none;

          .ant-picker-header-super-prev-btn,
          .ant-picker-header-prev-btn,
          .ant-picker-header-view {
            display: none;
          }
        }

        .ant-picker-body {
          display: none;
        }
      }
    }
  }
`;
