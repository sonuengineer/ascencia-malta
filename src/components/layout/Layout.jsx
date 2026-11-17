import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

/** Shared page shell. Each route renders inside <Outlet />. */
export default function Layout() {
  const { pathname } = useLocation();

  // SPA navigation keeps the old scroll position by default, so reset it per page.
  // 'instant' overrides the global `scroll-behavior: smooth`, otherwise the new
  // page would visibly animate up from wherever the previous page was scrolled.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
