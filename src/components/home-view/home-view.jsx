import AboutView from '../about-view/about-view';
import ContactView from '../contact-view/contact-view';
import IntroView from '../intro-view/intro-view';
import ProjectsView from '../projects-view/projects-view';

const HomeView = () => {
  return (
    <div className="w-100">
      <IntroView />
      <AboutView />
      <ProjectsView />
      <ContactView />
    </div>
  );
};

export default HomeView;
