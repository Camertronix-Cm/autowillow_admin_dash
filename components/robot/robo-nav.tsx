// Navbar.js

import Link from 'next/link';
import { useRouter } from 'next/router';

export const RoboNavbar = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li className={router.pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === '/about' ? 'active' : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname === '/contact' ? 'active' : ''}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
 