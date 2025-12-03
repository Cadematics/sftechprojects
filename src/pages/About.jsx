import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Our Company</h1>
        <p>Learn more about our journey, mission, and the dedicated team behind our success.</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Founded in [Year], our company started with a small team of passionate engineers and designers who wanted to make a difference. We saw a need for high-quality, reliable, and innovative design and engineering services, and we set out to fill that gap. Over the years, we have grown into a full-service agency, but our core values of quality, integrity, and customer satisfaction remain the same.</p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>Our mission is to empower our clients to achieve their goals by providing them with the best possible design and engineering solutions. We strive to be a trusted partner, offering our expertise and support at every stage of the product development lifecycle. We are committed to pushing the boundaries of innovation and delivering exceptional results that exceed expectations.</p>
        </div>

        <div className="about-section team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Lead Engineer</p>
            </div>
            <div className="team-member">
              <img src="https://via.placeholder.com/150" alt="Team Member 3" />
              <h3>Peter Jones</h3>
              <p>Creative Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
