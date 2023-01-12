import { useIsFetching } from '@tanstack/react-query';
import { ClockLoader } from 'react-spinners';

// import local constant
import { webColor } from '../../constants/colorConst';

export const LoadingScreen = () => {
  const isFetching = false;
  // const isFetching = useIsFetching({
  //   queryKey: ['user'],
  // });

  return isFetching ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/90 z-10">
      <ClockLoader color={webColor.spinnerPrimary} size={75} />
    </div>
  ) : null;
};
