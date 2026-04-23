import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiFileText } from 'react-icons/fi';
import './ResumeModal.css';

const RESUME_URL = '/Harshwardhan_Deshmukh_resume.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-modal__overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="resume-modal__content glass-card"
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="resume-modal__close" onClick={onClose} aria-label="Close">
              <FiX />
            </button>

            <div className="resume-modal__header">
              <div className="resume-modal__icon-wrap">
                <FiFileText />
              </div>
              <h3 className="resume-modal__title">My Resume</h3>
              <p className="resume-modal__subtitle">
                Harshwardhan Deshmukh — Full Stack Developer
              </p>
            </div>

            <div className="resume-modal__preview">
              <iframe
                src={`${RESUME_URL}#toolbar=0`}
                title="Resume Preview"
                className="resume-modal__iframe"
              />
            </div>

            <div className="resume-modal__actions">
              <a
                href={RESUME_URL}
                download="Harshwardhan_Deshmukh_Resume.pdf"
                className="resume-modal__btn resume-modal__btn--primary"
              >
                <FiDownload /> Download Resume
              </a>
              <button className="resume-modal__btn resume-modal__btn--secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
