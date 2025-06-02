import { useState, useEffect } from 'react';
import styles from './ScrollProgressStyles.module.css';

function ScrollProgress() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      let currentSection = 0;
      sectionElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentSection = index;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.scrollProgress}>
      <div className={styles.circles}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`${styles.circle} ${index === activeSection ? styles.active : ''}`}
            onClick={() => scrollToSection(section.id)}
            title={section.name}
          >
            <div className={styles.circleInner} />
            <span className={styles.sectionName}>{section.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollProgress; 
