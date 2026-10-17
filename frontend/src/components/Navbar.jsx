import { useState, useEffect } from 'react';
import TopBar from './TopBar';
import MainNav from './MainNav';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'fixed top-0 left-0 bg-white lg:bg-[#0F1E4A] shadow-lg'
          : 'absolute top-0 left-0 bg-white lg:bg-transparent'
      }`}
    >
      <TopBar scrolled={scrolled} />

      <div className="bg-white lg:bg-transparent">
        <MainNav scrolled={scrolled} />
      </div>
    </nav>
  );
};

export default Navbar;