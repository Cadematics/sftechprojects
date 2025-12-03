import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (formData.email.includes('error')) {
      setError('There was an error submitting the form. Please try again.');
    } else {
      setSuccess(true);
      setFormData({ name: '', email: '', service: '', message: '' });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="request-quote-page">
      <header className="page-header">
        <h1 className="page-title">Request a Quote</h1>
        <p className="page-subtitle">
          Let's build something amazing together. Fill out the form below to get started.
        </p>
      </header>

      <main>
        {success && <div className="success-message">Your quote request has been sent successfully!</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-section">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="service">Service of Interest</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="product-development">Product Development</option>
              <option value="cad-engineering">CAD Engineering</option>
              <option value="laser-cutting">Laser Cutting & Engraving</option>
              <option value="web-development">Web Development</option>
              <option value="3d-visualization">3D Visualization</option>
            </select>
          </div>

          <div className="form-section">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="submit-section">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
