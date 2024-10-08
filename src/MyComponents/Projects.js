import React, {useState} from 'react'

const projects = [
    {
      title: "Crowdfunding Website",
      image: `${process.env.PUBLIC_URL}/Crowdfunding.png`, 
      description: "Website created for funding community-welfare based projects. Made use of HTML/CSS/JS, PHP, mySQL along with ajax and jQuery",
    },
    {
      title: "ML Models for chronic diseases prediction",
      image: `${process.env.PUBLIC_URL}/DSNProject.png`,
      description: "Application of machine learning models to predict probability of various chronic diseases. Focuses on identification of chronic diseases (diabetes and cardiovascular diseases) using machine learning models. Achieved ~97% accuracy.",
    },
    {
      title: "Anti-Ragging Awareness Website",
      image: `${process.env.PUBLIC_URL}/RaggingFrontend.png`,
      description: "Created as part of a front-end competition within 1.5 hours on the occasion of ragging awareness. Showcases efficient time management and proficiency in web development tech stacks",
    },
  ];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 2 < projects.length ? prevIndex + 2 : 0
      );
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 2 >= 0 ? prevIndex - 2 : projects.length - 2
      );
    };

    return (
        <section id="projects">
        <div>
            <h3 style={styles.heading}>Explore My Recent Projects</h3>
            <div style={styles.container}>
            <button onClick={handlePrev} style={styles.arrowButton}>{"<"}</button>
            <div style={styles.marquee}>
                <div style={styles.project}>
                <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    style={styles.image}
                />
                <h3 style={styles.title}>{projects[currentIndex].title}</h3>
                <p style={styles.description}>
                    {projects[currentIndex].description}
                </p>
                </div>
                {currentIndex + 1 < projects.length && (
                <div style={styles.project}>
                    <img
                    src={projects[currentIndex + 1].image}
                    alt={projects[currentIndex + 1].title}
                    style={styles.image}
                    />
                    <h3 style={styles.title}>{projects[currentIndex + 1].title}</h3>
                    <p style={styles.description}>
                    {projects[currentIndex + 1].description}
                    </p>
                </div>
                )}
            </div>
            <button onClick={handleNext} style={styles.arrowButton}>{">"}</button>
            </div>
        </div>
        </section>
    );
};

export default Projects

const styles = {
    heading:{
        fontSize: "40px",
        color:"#e8a410",
        textAlign: "center",
        fontFamily: 'Playfair Display, serif',
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
    },
    arrowButton: {
        background: "transparent",
        border: "none",
        color: "#fff",
        fontSize: "30px",
        cursor: "pointer",
    },
    marquee: {
        display: "flex",
        gap: "100px",
    },
    project: {
        width: "600px",
        textAlign: "center",
        marginBottom:"30px",
    },
    image: {
        maxWidth: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "10px",
    },
    title: {
        margin: "30px auto",
        fontSize: "24px",
        color: "#18f1f5",
        width:"550px",
    },
    description: {
        fontSize: "16px",
        color: "#fff",
        width:"500px",
        margin:"0 auto",
    },
};