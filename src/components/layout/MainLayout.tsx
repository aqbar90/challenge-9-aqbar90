import Navbar from '@/components/layout/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
