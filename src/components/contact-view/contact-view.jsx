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

  const re = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setMessage('');

    if (!validateForm()) setShowErrors(true);
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
            handleSuccess();
          },
          (error) => {
            handleError();
          }
        );
    }
  };

  const handleSuccess = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setShowErrors(false);
    setMessage('Message sent.');
  };

  const handleError = () => {
    setMessage('Something went wrong.');
  };

  const validateForm = () => {
    return (
      formData.name.length > 0 &&
      re.test(String(formData.email).toLowerCase()) &&
      formData.message.length > 0
    );
  };

  return (
    <section id="contact" className="contact">
      <Row className="contact__title-row bg--dark">
        <Col className="contact__title-col">
          <div className="section-title">
            <h2 className="section-title__text bg--gradient">CONTACT ME</h2>
          </div>
        </Col>
      </Row>

      <Row className="contact__form-row bg--dark">
        <Col className="contact__form-col">
          <Form noValidate className="contact__form" onSubmit={handleSubmit}>
            <Row className="form__top-row mb-5 mt-5">
              <Col className="form__top-col" md={6}>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    isInvalid={!formData.name.length}
                  />
                  <span className="form-group__label">NAME *</span>
                  {showErrors && (
                    <Form.Control.Feedback type="invalid">
                      Please enter your name.
                    </Form.Control.Feedback>
                  )}
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

                  <span className="form-group__label">EMAIL ADDRESS *</span>

                  {showErrors && (
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <Form.Group className="form-group">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    isInvalid={!formData.message.length}
                  />
                  <span className="form-group__label">MESSAGE *</span>
                  {showErrors && (
                    <Form.Control.Feedback type="invalid">
                      Please enter your message.
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>
            {message !== '' && (
              <Row className="form__message-row d-block w-100 text-center ps-5 pe-5">
                <Col className="form__message-col d-block" sm={12}>
                  <span className="form__message-text me-2">{message}</span>{' '}
                  <Button className="close-btn" onClick={() => setMessage('')}>
                    X
                  </Button>
                </Col>
              </Row>
            )}

            <Row className="form__submit-row mb-5 mt-5">
              <Col md={12} className="form__submit-col d-block text-center">
                <Button type="submit" className="form__submit-btn">
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
