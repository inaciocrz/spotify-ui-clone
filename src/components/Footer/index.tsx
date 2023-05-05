import { Container } from "./styles";
import { Instagram, Twitter, FacebookCircle } from "../icons";

export default function Footer() {
  return (
    <Container>
      <div className="main">
        <div className="infos">
          <div>
            <h2>Company</h2>
            <a href="/">About</a>
            <a href="/">Jobs</a>
            <a href="/">For the Record</a>
          </div>
          <div>
            <h2>Communities</h2>
            <a href="/">For Artists</a>
            <a href="/">Developers</a>
            <a href="/">Advertising</a>
            <a href="/">Investors</a>
            <a href="/">Vendors</a>
            <a href="/">Spotify for Work</a>
          </div>
          <div>
            <h2>Company</h2>
            <a href="/">Support</a>
            <a href="/">Free Mobile App</a>
          </div>
        </div>
        <div className="socials">
          <a href="/">
            <Instagram />
          </a>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <FacebookCircle />
          </a>
        </div>
      </div>
      <div className="policies">
        <div className="links">
          <a href="/">Legal</a>
          <a href="/">Privacy Center</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Cookies</a>
          <a href="/">About Ads</a>
        </div>

        <div className="copyrights">© 2023 Spotify AB</div>
      </div>
    </Container>
  );
}
