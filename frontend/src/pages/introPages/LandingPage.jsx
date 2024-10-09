// src/components/LandingPage.js
import React from 'react';

const LandingPage = () => {
    const schemaOrgJSONLD = {
        "@context": "http://schema.org",
        "@type": "WebApplication",
        "name": "Keyboard Bilingual",
        "url": "https://yourwebsite.com",
        "description": "Learn new keyboard layouts effortlessly while keeping your current typing skills intact.",
        "author": {
          "@type": "Organization",
          "name": "Your Company Name",
        },
      };
  return (
    
    <div style={styles.container}>
        
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroHeading}>Master Any Keyboard Layout Without Losing Your Touch</h1>
          <p style={styles.heroSubHeading}>
            Learn new keyboard layouts effortlessly while keeping your current typing skills intact.
          </p>
          <button style={styles.ctaButton}>Start Your Journey</button>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Why Choose Keyboard Bilingual?</h2>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Users Say</h2>
        <div style={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <p style={styles.testimonialText}>"{testimonial.text}"</p>
              <h4 style={styles.testimonialAuthor}>- {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Keyboard Bilingual. All rights reserved.</p>
        <button style={styles.ctaButton}>Try It Free</button>
      </footer>
    </div>
  );
};

const features = [
  { title: 'Dual Proficiency', description: 'Master a new keyboard layout without forgetting the old one.' },
  { title: 'Flexible Learning', description: 'Practice any keyboard style on your existing hardware.' },
  { title: 'Seamless Transition', description: 'Switch between layouts effortlessly as you become more comfortable.' },
  { title: 'Customizable Lessons', description: 'Tailor your learning experience with personalized lessons.' },
  { title: 'Interactive Exercises', description: 'Engage with fun and challenging exercises to build muscle memory.' },
  { title: 'Progress Tracking', description: 'Monitor your improvement with detailed statistics and milestones.' },
];

const testimonials = [
  { text: 'Keyboard Bilingual helped me master Colemak in weeks!', author: 'John D.' },
  { text: 'The customizable lessons are a game changer.', author: 'Sarah P.' },
  { text: 'My typing speed and accuracy improved significantly.', author: 'Emily R.' },
];

const styles = {
  container: {
    fontFamily: "'Ubuntu', sans-serif",
    backgroundColor: '#1C1C1C',
    color: '#fff',
    textAlign: 'center',
  },
  heroSection: {
    background: 'linear-gradient(135deg, #00ADB5, #FF6F61)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
  heroContent: {
    maxWidth: '800px',
  },
  heroHeading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  heroSubHeading: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#F1F1F1',
  },
  ctaButton: {
    padding: '1rem 2rem',
    backgroundColor: '#2E2E2E',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  featuresSection: {
    background: '#1C1C1C',
    color: '#FFFFFF',
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    background: '#2E2E2E',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  featureDescription: {
    fontSize: '1rem',
    color: '#B0B0B0',
  },
  testimonialsSection: {
    background: '#2E2E2E',
    color: '#FFFFFF',
    padding: '4rem 2rem',
    textAlign: 'center',
  },
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  testimonialCard: {
    background: '#1C1C1C',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  testimonialText: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    color: '#B0B0B0',
  },
  testimonialAuthor: {
    fontSize: '1rem',
    color: '#FFF',
  },
  footer: {
    background: '#2E2E2E',
    color: '#FFFFFF',
    padding: '2rem',
  },
};

export default LandingPage;
