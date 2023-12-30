import { Col, Row, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactView = () => {
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
    console.log('Form Data:', formData);
    emailjs
      .sendForm(
        'service_w4iphl5',
        'template_ykzxhcg',
        e.target,
        'B9AtGVDb0s4A6iO5I'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your message has been sent!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          console.log(error.text);
          alert('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
    <Row>
      <Col className="text-left">
        <h1>Contact Me</h1>
        <p>
          Send me a message or email me directly at{' '}
          <a href="mailto:ddecicco330@gmail.com">ddecicco330@gmail.com</a>.
        </p>

        <Form className="w-50" onSubmit={handleSubmit}>
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
          <Form.Group className="mb-3">
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
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactView;
