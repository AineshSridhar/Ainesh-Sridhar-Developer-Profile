import React from 'react';

const Profiles = () => {
  return (
    <div style={styles.profiles}>
      <h1 style={styles.title}>My Profiles</h1>
      <div style={styles.profilesContainer}>

        {/* LinkedIn Profile */}
        <a href="https://www.linkedin.com/in/ainesh-sridhar-17bb39251" style={{ ...styles.profileCard, ...styles.leftCard }}>
          <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" style={styles.profileLogo} />
          <div style={styles.desc}>
            <p>Experience and achievements in detail</p>
          </div>
        </a>

        {/* LeetCode Profile */}
        <a href="https://www.leetcode.com/u/aineshsridhar" style={{ ...styles.profileCard, ...styles.middleCard }}>
          <img src={`${process.env.PUBLIC_URL}/leetcode.png`} alt="LeetCode" style={styles.profileLogo} />
          <p style={styles.profileDesc}>Solved 150+ DSA questions</p>
        </a>

        {/* GeeksForGeeks Profile */}
        <a href="https://www.geeksforgeeks.org/user/aineshs16jk/" style={{ ...styles.profileCard, ...styles.rightCard }}>
          <img src={`${process.env.PUBLIC_URL}/geeksforgeeks.png`} alt="GeeksForGeeks" style={styles.profileLogo} />
          <div style={styles.desc}>
            <p>Actively solving DSA problems on GFG</p>
          </div>
        </a>

      </div>
    </div>
  );
};

export default Profiles;

const styles = {
  profiles: {
    padding: '50px 100px',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#1c1c1c',
    height: '100vh',
  },
  title: {
    marginBottom: '325px',
    fontSize: '40px',
    color: '#03fcdf',
    fontFamily: 'Playfair Display, serif',
  },
  profilesContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '800px',
    margin: '100px auto',
  },
  profileCard: {
    textDecoration: 'none',
    color: '#18f1f5',
    borderRadius: '15px',
    width: '380px',
    height: '480px',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: '#333',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
    zIndex: '1',
  },
  profileCardHover: {
    transform: 'scale(1.1)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.6)',
  },
  leftCard: {
    transform: 'translateX(-270px) scale(0.9)',
    zIndex: '0',
  },
  middleCard: {
    transform: 'translateX(0px) scale(1.1)',
    zIndex: '2',
    backgroundColor: '#444',
  },
  rightCard: {
    transform: 'translateX(270px) scale(0.9)',
    zIndex: '0',
  },
  profileLogo: {
    width: '80%',
    margin: '30px 0',
  },
  desc: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    padding: '15px 0',
    backgroundColor: '#111',
    color: '#18f1f5',
  },
  profileDesc: {
    color: '#18f1f5',
    fontSize: '18px',
    marginTop: '20px',
  },
};
