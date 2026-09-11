import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './ProjectDemoGallery.module.css';

export default function ProjectDemoGallery({ images, title = "Demo App", description = "Explore the application interface and primary workflows." }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  }, [prevSlide, nextSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
  };

  // Support trackpad horizontal scroll (debounced)
  const isScrolling = useRef(false);
  const handleWheel = useCallback((e) => {
    if (isScrolling.current) return;
    
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
      e.preventDefault();
      isScrolling.current = true;
      if (e.deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 300); // Prevent rapid scrolling
    }
  }, [prevSlide, nextSlide]);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      // Add non-passive event listener for wheel to prevent default
      el.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (el) {
        el.removeEventListener('wheel', handleWheel);
      }
    };
  }, [handleWheel]);

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.gallerySection}>
      <div className={styles.header}>
        <div className={styles.textContent}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>

      <div 
        className={styles.stage}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        tabIndex="0"
        onKeyDown={handleKeyDown}
        aria-label="Demo Gallery. Use left and right arrows to navigate."
      >
        <button 
          className={`${styles.controlButton} ${styles.controlPrev}`} 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          aria-label="Previous screenshot"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        
        <button 
          className={`${styles.controlButton} ${styles.controlNext}`} 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          aria-label="Next screenshot"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>

        <div className={styles.track}>
          {images.map((img, idx) => {
            let offset = idx - currentIndex;
            const total = images.length;
            
            // Circular offset logic
            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;
            
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            
            // Only render Previous (-1), Active (0), Next (1)
            if (Math.abs(offset) > 1) return null;

            return (
              <div 
                key={idx} 
                className={`${styles.slide} ${isCenter ? styles.slideActive : ''} ${isLeft ? styles.slideLeft : ''} ${isRight ? styles.slideRight : ''}`}
                style={{
                  '--offset': offset,
                  '--abs-offset': Math.abs(offset),
                  zIndex: 10 - Math.abs(offset)
                }}
                onClick={() => {
                  if (isLeft) prevSlide();
                  if (isRight) nextSlide();
                }}
                aria-hidden={!isCenter}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    loading={isCenter ? "eager" : "lazy"}
                    className={`${styles.image} ${img.isMobile ? styles.imageMobile : styles.imageDesktop}`} 
                  />
                  {!isCenter && <div className={styles.imageOverlay} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
