import React, { useEffect, useRef, useState } from "react";
import "./skills.css";

const skills = [
  { label: "React", value: 95 },
  { label: "Next.js", value: 94 },
  { label: "Typescript", value: 70 },
  { label: "Tailwind", value: 80 },
  { label: "Redux", value: 70 },
  { label: "PS", value: 90 },
  { label: "AI", value: 90 },
  { label: "Pr", value: 70 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.4, // Adjust as needed
      }
    );
    const secR = sectionRef.current;
    if (secR) {
      observer.observe(secR);
    }

    return () => {
      if (secR) observer.unobserve(secR);
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className="skills-heading">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <div className="progress-circle">
                <svg className="circle-svg">
                  <defs>
                    <linearGradient
                      id={`gradient-${idx}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                  <circle className="bg" cx="60" cy="60" r="50" />
                  <circle
                    className="progress"
                    cx="60"
                    cy="60"
                    r="50"
                    stroke={`url(#gradient-${idx})`}
                    style={{
                      strokeDashoffset: inView
                        ? 314 - (314 * skill.value) / 100
                        : 314,
                    }}
                  />
                </svg>
                <span className="percent-text">{skill.value}%</span>
              </div>
              <p className="skill-name">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
