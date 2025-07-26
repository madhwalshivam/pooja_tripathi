import React, { useEffect, useState } from 'react';
import desktopBanner from '../../assets/stk.jpg';
import mobileBanner from '../../assets/stk.jpg'; 

const StorySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bannerImage = isMobile ? mobileBanner : desktopBanner;

  return (
    <section className="min-h-[100vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div
          className="w-full h-[600px]"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </section>
  );
};

export default StorySection;



