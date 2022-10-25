import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Cn from 'classnames';

import { NavbarLink, Search, Image } from '@/components';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className={Cn(
        'fixed top-0 left-0 z-10 w-full max-h-32 px-8',
        'transition-[height,background-color] duration-[300ms,300ms] ease-[ease,ease]',
        isShrink ? 'bg-body h-headerShrinkHeight' : 'h-headerHeight'
      )}
    >
      <div className="container h-full grid grid-cols-12 gap-2 grid-rows-1">
        <div className="col-span-3 sm:col-span-4">
          <div className="flex h-full">
            <Link href="/">
              <a className="w-auto font-semibold text-4xl sm:text-2xl flex items-center">
                <div className="flex mr-2.5">
                  <Image className="w-12" src="/icon.png" alt="" />
                </div>
                <span>Xstream.site</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-5 sm:col-span-8">
          <div className="flex h-full items-center">
            <Search />
          </div>
        </div>
        <div className="col-span-3 col-end-13 lg:col-span-4">
          <NavbarLink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
