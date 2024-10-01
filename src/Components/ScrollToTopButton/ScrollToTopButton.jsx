import React, { useState, useEffect } from 'react';
import downArrow from '/src/assets/right-arrow.png';  // Ensure the correct path

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button depending on the scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 cursor-pointer"
        >
          <img
            src={downArrow}
            alt="Scroll to Top"
            className="w-10 h-10 transform rotate-270"  // Rotate the arrow 180 degrees
            style={{ transform: 'rotate(270deg)' }} // Another way to rotate
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
