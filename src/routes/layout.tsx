import { Outlet } from 'react-router';

export default function ProjectLayout() {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}
