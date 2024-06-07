import { Col, Row, Form, Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const MessageModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="d-flex justify-content-center flex-column text-center">
        <h1>{props.message}</h1>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center flex-column text-center">
        <p className="custom-btn close-btn" onClick={props.onHide}>
          Close
        </p>
      </Modal.Footer>
    </Modal>
  );
};

const ContactView = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    emailjs.init('B9AtGVDb0s4A6iO5I');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_w4iphl5',
        'template_ykzxhcg',
        e.target,
        'B9AtGVDb0s4A6iO5I'
      )
      .then(
        (result) => {
          setModalShow(true);
          setModalMessage('Your message has been sent!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          setModalShow(true);
          setModalMessage('There was an error sending your message.');
        }
      );
  };

  return (
    <Row>
      <Col className="text-left">
        <div className="contact-container">
          <h1>Contact Me</h1>
          <p>
            Send me a message or email me directly at{' '}
            <a href="mailto:ddecicco330@gmail.com">ddecicco330@gmail.com</a>.
          </p>

          <Form className="form" onSubmit={handleSubmit}>
            <div className="form-content">
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-5">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="custom-btn submit-btn"
              >
                Send Message
              </Button>
            </div>
          </Form>
        </div>
      </Col>
      <MessageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        message={modalMessage}
      />
    </Row>
  );
};

export default ContactView;
