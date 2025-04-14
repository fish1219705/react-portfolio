import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>
            <div className="contact-info">
            <div className="contact-row">
                <span className="contact-label">Email</span>
                <a className="contact-content" href="mailto:hanpeiyu7755@gmail.com">hanpeiyu7755@gmail.com</a>
            </div>
             <div className="contact-row">
                <span className="contact-label">LinkedIn</span>
                <a className="contact-content" href="https://www.linkedin.com/in/peiyu-han-762337233/" target="_blank" rel="noopener noreferrer">
                Connect →
            </a>
            </div>
            <div className="contact-row">
                <span className="contact-label">GitHub</span>
                <a className="contact-content" href="https://github.com/fish1219705" target="_blank" rel="noopener noreferrer">fish1219705</a>
            </div>
            <div className="contact-row">
                <span className="contact-label">Resume</span>
                <a className="contact-content resume-link" href="/Brynne Han_Resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume →
                </a>
            </div>
        </div>
    </section>
  );
};

export default Contact;
