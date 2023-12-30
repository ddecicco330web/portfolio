import { Carousel, Row, Col } from "react-bootstrap";

const projects = [
  {
    name: 'myFlix',
    description: 'description1',
    image: 'image1',
    gh_link: 'link1',
    case_link: 'link1',
    live_link: 'link1'
  },
  {
    name: 'project2',
    description: 'description2',
    image: 'image2',
    link: 'link2'
  },
  {
    name: 'project3',
    description: 'description3',
    image: 'image3',
    link: 'link3'
  }
];

const ProjectsView = () => {
    return(
        <Row>
            <Col>
                <h1>Projects</h1>
                <Carousel
            </Col>
        </Row>
    )
};

export default ProjectsView;
