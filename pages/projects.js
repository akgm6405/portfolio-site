import React from 'react';


export default function Projects() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">My Portfolio of Projects</h1>

      <div className="project-grid">

        <div className="project-card">
          <h2 className="project-card-title">Project Management App</h2>
          <p className="project-card-description">
            Developed an **Angular 10** web application designed to empower organizations in monitoring software development progress. This tool provides real-time tracking of APIs, webpages, and milestones, ensuring transparent oversight across various projects.
          </p>
          {/* Optional: Add technologies or links here */}
          {/* <p className="project-technologies">Technologies: Angular 10, REST APIs</p> */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a> */}
        </div>

        <div className="project-card">
          <h2 className="project-card-title">Loan Recommendation Tool</h2>
          <p className="project-card-description">
            Engineered a **machine learning** application in **Databricks** for classifying loan approvals and recommending suitable loan types. The deployed models are exposed via a **Flask API**, complemented by a custom dashboard for real-time predictions and intelligent user routing.
          </p>
          {/* <p className="project-technologies">Technologies: Python, Flask, Machine Learning, Databricks</p> */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a> */}
        </div>

        <div className="project-card">
          <h2 className="project-card-title">Student Registration App</h2>
          <p className="project-card-description">
            A robust **full-stack React and Node.js** application enabling seamless student registration and data persistence. Built with modular React components and an **Express.js** backend utilizing JSON-based storage, this app emphasizes simplicity, clarity, and future scalability.
          </p>
          {/* <p className="project-technologies">Technologies: React, Node.js, Express.js, REST API</p> */}
          {/* <a href="https://github.com/akgm6405/student_registration_app" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a> */}
        </div>

        <div className="project-card">
          <h2 className="project-card-title">Hotel Room Management App</h2>
          <p className="project-card-description">
            A **Flask-based CRUD** application crafted for managing room data at the Continental Palms Hotel. Developed with **Python and HTML**, it offers functionalities to add, view, and delete room records, including a confirmation prompt for deletions, demonstrating foundational full-stack web operations.
          </p>
          {/* <p className="project-technologies">Technologies: Flask, Python, HTML</p> */}
          {/* <a href="https://github.com/akgm6405/flask-crud-app" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a> */}
        </div>

        <div className="project-card">
          <h2 className="project-card-title">Real-Time Chatbot with Angular & FastAPI</h2>
          <p className="project-card-description">
            Developed a dynamic **real-time chatbot** web application featuring an **Angular** frontend and a **FastAPI** backend. Utilized **Server-Sent Events (SSE)** for live message streaming and seamless user interaction. The design incorporates a clean, responsive chat UI with **Angular Material** and robust REST APIs for session management and dynamic responses.
          </p>
          {/* <p className="project-technologies">Technologies: Angular, FastAPI, Python, SSE, REST APIs, Angular Material</p> */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a> */}
        </div>

      </div> {/* End project-grid */}
    </section>
  );
}