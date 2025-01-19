
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Book Sports Facilities */}
        <div className="footer-section">
          <h4 className="footer-title">Book Sports Facilities</h4>
          <ul className="footer-links">
            <li><a href="/football">Football</a></li>
            <li><a href="/basketball">Basketball</a></li>
            <li><a href="/tennis">Tennis</a></li>
            <li><a href="/badminton">Badminton</a></li>
            <li><a href="/cricket">Cricket</a></li>
          </ul>
        </div>

        {/* Community and Events */}
        <div className="footer-section">
          <h4 className="footer-title">Community & Events</h4>
          <ul className="footer-links">
            <li><a href="/community">Community Hub</a></li>
            <li><a href="/events">Upcoming Events</a></li>
            <li><a href="/blogs">Blogs & Tips</a></li>
            <li><a href="/partners">Our Partners</a></li>
          </ul>
        </div>

        {/* App Store Links */}
        <div className="footer-section">
          <h4 className="footer-title">Get the App</h4>
          <div className="footer-app-links">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img
                src="public/google-play-badge.png"
                alt="Google Play"
                className="app-store-img"
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="public/app-store-badge.png"
                alt="App Store"
                className="app-store-img"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Feather Sports. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
