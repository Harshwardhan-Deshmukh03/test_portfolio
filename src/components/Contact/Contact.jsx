import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import ResumeModal from '../ResumeModal/ResumeModal';
import './Contact.css';

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'harshwardhanrdd@gmail.com', href: 'mailto:harshwardhanrdd@gmail.com' },
  { icon: <FiMapPin />, label: 'Location', value: 'Bengaluru, KA, IND', href: null },
  { icon: <FiPhone />, label: 'Phone', value: '+(91) 7387058440', href: 'tel:+917387058440' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, hook this to an email service like EmailJS, Formspree, etc.
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s work <span className="gradient-text">together</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="contact__content">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact__info-title">Get in touch</h3>
            <p className="contact__info-text">
              I&apos;m currently open to freelance opportunities, full-time positions,
              and interesting collaborations. Don&apos;t hesitate to reach out!
            </p>

            <div className="contact__info-items">
              {contactInfo.map((item, i) => (
                <motion.div
                  className="contact__info-item glass-card"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <span className="contact__info-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value">{item.value}</a>
                    ) : (
                      <span className="contact__info-value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact__socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact__social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact__social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <button
                className="contact__social-link"
                onClick={() => setResumeOpen(true)}
                aria-label="Resume"
              >
                <FiFileText />
              </button>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="contact-name" className="contact__form-label">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact__form-input"
                  required
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="contact-email" className="contact__form-label">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="contact__form-input"
                  required
                />
              </div>
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-subject" className="contact__form-label">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="contact__form-input"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="contact__form-input contact__form-textarea"
                rows="5"
                required
              />
            </div>

            <button type="submit" className="contact__form-btn" disabled={submitted}>
              {submitted ? (
                <>✓ Message Sent!</>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};

export default Contact;
