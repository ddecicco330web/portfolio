import AboutView from '../about-view/about-view';
import IntroView from '../intro-view/intro-view';
import ProjectsView from '../projects-view/projects-view';

const HomeView = () => {
  return (
    <div className="w-100">
      <IntroView />
      <AboutView />
      <ProjectsView />
    </div>
  );
};

export default HomeView;
