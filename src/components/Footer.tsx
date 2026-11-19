import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>

            <div className="mt-4 flex gap-4">
              <a href=""><FaLinkedin size={20} /></a>
              <a href=""><FaGithub size={20} /></a>
              <a href=""><FaInstagram size={20} /></a>
              <a href=""><TbMail size={20} /></a>
            </div>

          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Suryansh Chauhan</h4>
            <p className="main-footer__short-desc">
              For projects or Internship offers you can contact me through my social media handles too, I am active there. Thank you!
              <br />
              <br />
              Email: <a href="mailto:[EMAIL_ADDRESS]">suryanshchauhan1607@gmail.com</a>
              <br />
              Mobile: +91 84371 09265
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          &copy; Copyright 2022. Made by{' '}
          <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">
            @suryansh-f-r-i-d-a-y
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer