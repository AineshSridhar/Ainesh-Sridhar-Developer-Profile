import React, {useState} from 'react'

const projects = [
    {
      title: "Crowdfunding Website",
      image: "/Crowdfunding.png", // Update with actual image paths
      description: "Website created for funding community-welfare based projects. Made use of HTML/CSS/JS, PHP, mySQL along with ajax and jQuery",
    },
    {
      title: "Application of machine learning models to predict probability of various chronic diseases",
      image: "/DSNProject.png",
      description: "Focuses on identification of chronic diseases (diabetes and cardiovascular diseases) using machine learning models. Achieved ~97% accuracy.",
    },
    {
      title: "Project 3",
      image: "/RaggingFrontend.png",
      description: "Description of Project 3",
    },
    // Add more projects as needed
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
    },
    image: {
        maxWidth: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "10px",
    },
    title: {
        margin: "10px 0",
        fontSize: "24px",
        color: "#18f1f5"
    },
    description: {
        fontSize: "16px",
        color: "#fff",
    },
};