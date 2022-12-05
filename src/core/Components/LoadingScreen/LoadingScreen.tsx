import { ClockLoader } from 'react-spinners';

export const LoadingScreen = () => {
  let isLoading: boolean = false;
  if (isLoading === false) return null;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/90 z-10">
      <ClockLoader color="#e53e3e" size={75} />
    </div>
  );
};
