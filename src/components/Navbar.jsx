'use client';
import { routes } from '@/constants/routes';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const pathname = usePathname();
  return (
    <div className="flex flex-row gap-6 px-6 py-3 items-center">
      <nav
        onClick={() => router.push(routes.home)}
        className={`text-2xl cursor-pointer text-yellow-900 font-semibold hover:text-yellow-700 transition-colors duration-200 ${
          pathname === routes.home
            ? 'text-yellow-900 border-b-2 border-yellow-700'
            : 'text-yellow-700 hover:text-yellow-900'
        }`}
      >
        Home
      </nav>
      <nav
        onClick={() => router.push(routes.recipes)}
        className={`text-2xl cursor-pointer text-yellow-900 font-semibold hover:text-yellow-700 transition-colors duration-200 ${
          pathname.startsWith(routes.recipes)
            ? 'text-yellow-900 border-b-2 border-yellow-700'
            : 'text-yellow-700 hover:text-yellow-900'
        }`}
      >
        Recipes
      </nav>
    </div>
  );
};

export default Navbar;
