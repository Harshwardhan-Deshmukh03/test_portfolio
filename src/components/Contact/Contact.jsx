import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container">
        <div className="contact__intro">
          <span className="section-label">07 / Contact</span>
          <h2 className="section-title">Get in touch.</h2>
          <p className="section-subtitle">Always open to discussing new opportunities, interesting projects or just good engineering problems.</p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__location">
              <span>Bengaluru, India</span>
              <span>GMT +5:30</span>
            </div>
            <a href="mailto:harshwardhanrdd@gmail.com" className="contact__email">harshwardhanrdd@gmail.com <FiArrowUpRight /></a>
            <div className="contact__links">
              <a href="https://github.com/Harshwardhan-Deshmukh03" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/harshwardhan-deshmukh-3b0043179/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            </div>
          </div>

          <motion.form ref={formRef} className="contact__form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="contact__row">
              <label>
                Name
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
              </label>
            </div>

            <label>
              Subject
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required />
            </label>

            <label>
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows="5" required />
            </label>

            <button type="submit" className={`contact__form-btn ${status === 'error' ? 'contact__form-btn--error' : ''}`} disabled={status === 'sending' || status === 'sent'}>
              {status === 'sending' && '⏳ Sending...'}
              {status === 'sent' && '✓ Message Sent!'}
              {status === 'error' && '✕ Failed to send. Try again.'}
              {status === 'idle' && <><FiSend /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
