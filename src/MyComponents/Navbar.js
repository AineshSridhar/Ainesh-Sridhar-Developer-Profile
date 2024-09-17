import React from "react";
import {FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <navbar style={styles.navbar}>
      <div style={styles.logo}>Portfolio</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>
            Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/about" style={styles.navLink}>
            About
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/projects" style={styles.navLink}>
            Projects
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/" style={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
      <div style={styles.icons}>
        <a href="#" style={styles.icon}>
          <FaLinkedin />
        </a>
        <a href="#" style={styles.icon}>
          <FaInstagram />
        </a>
      </div>
    </navbar>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    color: "#b1c7c8",
  },
  logo: {
    fontSize: "30px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "80px",
  },
  navItem: {
    fontSize: "19px",
  },
  navLink: {
    textDecoration: "none",
    color: "#b1c7c8",
  },
  icons: {
    display: "flex",
    gap: "30px",
  },
  icon: {
    fontSize: "24px",
    color: "#b1c7c8",
    marginTop:"8px",
  },
};
