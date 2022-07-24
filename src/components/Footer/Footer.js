import "./Footer.css";
import githubIcon from "../../images/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {year} NewsExplorer - Powered by News API
      </p>
      <nav className="footer__wrapper">
        <Link to={"/"} className="footer__link">
          Home
        </Link>
        <a
          href="https://timothyrusso.tech/"
          target="_blank"
          rel="noreferrer"
          className="footer__link footer__link_type_mobile"
        >
          Portfolio
        </a>
        <ul className="footer__icon-wrapper">
          <a
            href="https://github.com/murrk-smb"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              className="footer__icon"
              alt="GitHub logo"
            ></img>
          </a>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
