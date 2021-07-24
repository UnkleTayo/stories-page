import { useState, useEffect } from 'react';

function useOnScreen(ref, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Nullish Coalescing :  If the left side is null/undefined use the value on the right
        setIntersecting(entry?.isIntersecting ?? false);
      },
      {
        rootMargin,
        threshold: 0.5,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }
    // Clean up
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  });
  console.log(isIntersecting);
  return isIntersecting;
}

export default useOnScreen;
