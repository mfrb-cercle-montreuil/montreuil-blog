import React from "react";
import { Link } from "gatsby";
import mfrb from "../img/mfrb.svg";
import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";

const footerColor = { backgroundColor: "#f8ea2e", color: "#2b2523" };

const Footer = class extends React.Component {
  render() {
    return (
      <footer style={footerColor} className="footer">
        <div className="content has-text-centered">
          <img
            src={mfrb}
            alt="mfrb-montreuil"
            style={{ marginTop: "1.5em", width: "14em", height: "10em" }}
          />
        </div>
        <div style={footerColor} className="content">
          <div className="container">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Acceuil
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        A propos
                      </Link>
                    </li>

                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Derniers billets
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{
                      width: "1em",
                      height: "1em"
                    }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img className="fas fa-lg" src={twitter} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
