import React from 'react'

export default function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.heading}>
        <h4 style={styles.hi}>Hi!</h4>
        <h3 style={{ display: 'inline', color: 'white', fontSize: '60px' }}>I'm </h3>
        <h3 style={styles.intro}>Ainesh Sridhar</h3>
        <h4 style={styles.softwareEngineer}>Software Engineer</h4>
      </div>
      <div style={styles.headerImgSection}>
        <img src="/download4.png" alt="SamplePhoto" style={styles.headerImg} />
      </div>
    </div>
  )
}

const styles = {
  header: {
    display: 'flex',
  },
  heading: {
    margin: '150px',
    width: '50%',
  },
  hi: {
    color: '#e8a410',
    fontSize: '28px',
    margin: '0',
  },
  intro: {
    display: 'inline',
    fontSize: '60px',
    color: '#e8a410',
  },

  softwareEngineer: {
    color: 'white',
    fontSize: '32px',
    margin: '10px 0 0 0',
    borderRight: '2px solid white',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '0ch',
    animation: 'typing 3s steps(30, end), blink 0.75s step-end infinite',
  },

  '@keyframes typing': {
    from: { width: '0ch' },
    to: { width: '15ch' },
  },
  '@keyframes blink': {
    from: { borderColor: 'transparent' },
    to: { borderColor: 'white' },
  },
  headerImgSection: {
    paddingTop: '40px',
    paddingRight: '130px',
  },
  headerImg: {
    width: '400px',
  },
}
