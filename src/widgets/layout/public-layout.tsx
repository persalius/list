import { Outlet } from 'react-router';
import PublicHeader from '../header/public-header';
import PublicFooter from '../footer/public-footer';

export default function PublicLayout() {
  return (
    <>
      <PublicHeader />
      <main className="flex-1 p-4">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <PublicFooter />
    </>
  );
}
