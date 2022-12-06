import Navigation from './Navigation';
import UserNav from './UserNav';

const Header = () => {
  return (
    <div className="container xl:max-w-screen-xl mx-auto py-3 px-2 sm:px-0 flex justify-between items-center">
      <Navigation />
      <UserNav />
    </div>
  );
};

export default Header;
