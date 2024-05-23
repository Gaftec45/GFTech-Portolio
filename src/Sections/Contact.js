import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../Styling/Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4 text-center">Let's Connect</h2>
          <p className="text-center mb-3">
              I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://github.com/Gaftec45" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-decoration-none" style={{ color: '#181717' }} >
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/gftech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-decoration-none" style={{ color: '#0A66C2' }} >
              <FaLinkedin size={30} />
            </a>
            <a href="https://instagram.com/gaaftech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-decoration-none" style={{ color: '#E4405F' }} >
              <FaInstagram size={30} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-decoration-none" style={{ color: '#1877F2' }} >
              <FaFacebook size={30} />
            </a>
          </div> <br />
          <div className="cardd shadow-sm p-4 mb-4">
          <h2 className="mb-4 text-center">Got a job for me? Oh yes! I'm in</h2>
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder='e.g Abdulfatai Yusuf'
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='e.g yusufabdulfatai037@gmail.com'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder='Enter your message here...'
                    rows="4"
                  />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary mt-3">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
