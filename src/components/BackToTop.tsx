import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-blue-600/90 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Scroll back to top of page"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
