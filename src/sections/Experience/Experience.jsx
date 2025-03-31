import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Blueground",
      location: "Athens, Greece",
      period: "2025 - Present",
      description: "Developed and maintained backend APIs using Fastify and TypeScript. Designed and implemented microservices architecture, integrated Kafka for event-driven communication, and optimized database performance.",
      technologies: ["TypeScript", "Fastify", "MongoDB", "Kafka", "Jest", "Docker"]
    },
    {
      title: "Software Engineer Intern",
      company: "Justice4 Finland",
      location: "Helsinki, Finland",
      period: "9/2024 - 12/2024",
      description: "Implemented company's first proof-of-concept legal advice chatbot. Developed conversational AI interface and integrated legal knowledge base.",
      technologies: ["React", "Flask", "Azure"]
    },
    {
      title: "Fullstack Developer Intern",
      company: "MetalMaker3D",
      location: "Krakow, Poland",
      period: "3/2024 - 6/2024",
      description: "Implemented new UI/UX improvements from Figma designs using React. Developed backend APIs to support business logic and improved database schema to match new requirements.",
      technologies: ["TypeScript", "React", "Node.js", "Prisma", "PostgreSQL"]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.location} - {exp.period}</p>
                <p className="description">{exp.description}</p>
                <div className="technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 