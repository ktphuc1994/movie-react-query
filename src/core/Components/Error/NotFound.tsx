import { NavLink } from 'react-router-dom';
import { FrownOutlined } from '@ant-design/icons';

export default function NotFound() {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center">
      <FrownOutlined style={{ fontSize: 150 }} />
      <p className="my-5 text-6xl">404</p>
      <p className="mb-5 text-2xl text-white/90">Page not found</p>
      <div className="text-white/70 text-center">
        <p className="mb-2">
          The Page you are looking for doesn't exist or an other error occurred.
        </p>
        <p>
          Please go back, or head over to{' '}
          <NavLink
            to="/"
            className="font-semibold text-white text-lg hover:text-white/70 transition-all duration-300"
          >
            Home
          </NavLink>{' '}
          to choose a new direction
        </p>
      </div>
    </div>
  );
}
