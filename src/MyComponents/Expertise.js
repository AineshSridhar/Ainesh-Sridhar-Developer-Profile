import React, { useState, useEffect, useRef } from 'react';

const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const expertiseSectionRef = useRef(null);

  const expertise = [
    { title: "UX Audit" },
    { title: "Web Development" },
    { title: "UX/UI Design" },
    { title: "Branding" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); 
          }
        });
      },
      { threshold: 0.2 } 
    );

    if (expertiseSectionRef.current) {
      observer.observe(expertiseSectionRef.current);
    }

    return () => {
      if (expertiseSectionRef.current) {
        observer.unobserve(expertiseSectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={expertiseSectionRef}
      style={{
        ...styles.expertiseSection,
        ...(isVisible ? styles.fadeIn : {}), 
      }}
    >
      <h2 style={styles.title}>My Expertise</h2>
      <div style={styles.expertiseContainer}>
        <div
          style={{
            ...styles.card1,
            ...styles.card,
            ...(hoveredCard === 'card1' ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard('card1')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {expertise[0].title}
        </div>
        <div
          style={{
            ...styles.card2,
            ...styles.card,
            ...(hoveredCard === 'card2' ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard('card2')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {expertise[2].title}
        </div>
        <div style={styles.centerImage}>
          <img src={`${process.env.PUBLIC_URL}/developer.avif`} alt="My Expertise" style={styles.image} />
        </div>
        <div
          style={{
            ...styles.card3,
            ...styles.card,
            ...(hoveredCard === 'card3' ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard('card3')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {expertise[1].title}
        </div>
        <div
          style={{
            ...styles.card4,
            ...styles.card,
            ...(hoveredCard === 'card4' ? styles.cardHover : {}),
          }}
          onMouseEnter={() => setHoveredCard('card4')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {expertise[3].title}
        </div>
      </div>
    </div>
  );
};

const styles = {
  expertiseSection: {
    color: '#e8a410',
    padding: '0 50px 50px',
    textAlign: 'center',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  },
  fadeIn: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '40px',
    marginBottom: '40px',
  },
  expertiseContainer: {
    position: 'relative',
    width: '1000px',
    height: '650px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundImage: `url(${process.env.PUBLIC_URL}//Bkg.jpg)`,
    borderRadius: '10px',
    color: '#18f1f5',
    padding: '140px 10px',
    marginBottom: '0px',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '250px',
    zIndex: 1,
    border: '2px solid #18f1f5',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover transition
    cursor: 'pointer',
  },
  card1: {
    position: 'absolute',
    top: '0',
    left: '0',
  },
  card2: {
    position: 'absolute',
    bottom: '0',
    left: '0',
  },
  card3: {
    position: 'absolute',
    top: '0',
    right: '0',
  },
  card4: {
    position: 'absolute',
    bottom: '0',
    right: '0',
  },
  cardHover: {
    transform: 'scale(1.1)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  centerImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
  },
  image: {
    borderRadius: '10px',
    width: '600px',
    height: '400px',
    objectFit: 'cover',
  },
};

export default Expertise;
