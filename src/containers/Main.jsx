import { useEffect, useState } from 'react';

import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero/';
import FeatureSlides from '../components/FeatureSlides';
import CursorManager from '../components/CustomCursor/CursorManager';

export default function Main() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
      <CursorManager />
      <Hero />
      <FeatureSlides />
      <div className="footer">Build your ideal story today.</div>
    </div>
  );
}
