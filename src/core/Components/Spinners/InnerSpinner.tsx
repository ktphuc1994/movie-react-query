import { MoonLoader } from 'react-spinners';

// import local constants
import { webColor } from '../../constants/colorConst';

const InnerSpinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <MoonLoader color={webColor.spinnerPrimary} size={75} />
    </div>
  );
};

export default InnerSpinner;
