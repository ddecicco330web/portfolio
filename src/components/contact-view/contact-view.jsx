import { Col, Row, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactView = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showErrors, setShowErrors] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    emailjs.init('B9AtGVDb0s4A6iO5I');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const re = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setMessage('');

    if (document.querySelector('.is-invalid')) setShowErrors(true);
    else {
      emailjs
        .sendForm(
          'service_w4iphl5',
          'template_ykzxhcg',
          e.target,
          'B9AtGVDb0s4A6iO5I'
        )
        .then(
          (result) => {
            setFormData({
              name: '',
              email: '',
              message: ''
            });
            setShowErrors(false);
            setMessage('Message sent.');
          },
          (error) => {
            setMessage('Something went wrong.');
          }
        );
    }
  };

  return (
    <section id="contact">
      <Row className="dark-bg">
        <Col>
          <div className="section-title">
            <h2 className="gradient-bg">CONTACT ME</h2>
          </div>
        </Col>
      </Row>
      <Row className="dark-bg">
        <Col>
          <Form noValidate className="form" onSubmit={handleSubmit}>
            <Row className="mb-5 mt-5">
              <Col md={6}>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    isInvalid={!formData.name.length}
                  />
                  <span>NAME *</span>
                  {showErrors ? (
                    <Form.Control.Feedback type="invalid">
                      Please enter your name.
                    </Form.Control.Feedback>
                  ) : null}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    isInvalid={!re.test(String(formData.email).toLowerCase())}
                  />

                  <span>EMAIL ADDRESS *</span>

                  {showErrors ? (
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group className="form-group">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    isInvalid={!formData.message.length}
                  />
                  <span>MESSAGE *</span>
                  {showErrors ? (
                    <Form.Control.Feedback type="invalid">
                      Please enter your message.
                    </Form.Control.Feedback>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            {message !== '' ? (
              <Row className="d-block w-100 text-center ps-5 pe-5">
                <div className="message-container">
                  <span className="me-2">{message}</span>{' '}
                  <Button className="close-btn" onClick={() => setMessage('')}>
                    X
                  </Button>
                </div>
              </Row>
            ) : null}

            <Row className="mb-5 mt-5">
              <Col md={12} className="d-block text-center">
                <Button type="submit" className="contact-form-btn">
                  SEND MESSAGE
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default ContactView;
