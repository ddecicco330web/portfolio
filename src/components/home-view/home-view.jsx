import AboutView from '../about-view/about-view';
import ContactView from '../contact-view/contact-view';
import IntroView from '../intro-view/intro-view';
import ProjectsView from '../projects-view/projects-view';

const HomeView = () => {
  return (
    <>
      <IntroView />
      <AboutView />
      <ProjectsView />
      <ContactView />
    </>
  );
};

export default HomeView;
