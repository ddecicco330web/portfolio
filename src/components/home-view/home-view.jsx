import { useEffect } from 'react';
import AboutView from '../about-view/about-view';
import IntroView from '../intro-view/intro-view';
import { addScrollListener } from '../../main';

const HomeView = () => {
  useEffect(() => {
    addScrollListener();

    return () => {
      window.removeEventListener('scroll', addScrollListener);
    };
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <IntroView />
      <AboutView />
    </div>
  );
};

export default HomeView;
