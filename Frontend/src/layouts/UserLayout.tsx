import { Outlet } from 'react-router-dom';
import UserSidebar from '@/components/UserSidebar';

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-background flex">
      <UserSidebar />
      <main className="flex-1 p-4 lg:p-8 pt-20 lg:pt-8">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
