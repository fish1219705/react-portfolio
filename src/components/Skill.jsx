import React, { useEffect, useState } from 'react';

const SkillParagraphs = () => {
  const [skills, setSkills] = useState({
    'Front-End': [],
    'Back-End': [],
    'Tools': []
  });

  useEffect(() => {
    fetch('https://node-js-express-api-app.onrender.com/api/skills')
      .then(res => res.json())
      .then(data => {
        
        console.log('fetched skills:', data);
        const grouped = {
          'Front-End': [],
          'Back-End': [],
          'Tools': []
        };

        data.forEach(skill => {
          const category = skill.category;
          if (grouped[category]) {
            grouped[category].push(skill.name);
          }
        });

        setSkills(grouped);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="skills-paragraph">
      <p>
        <span className="skill-category">Front-End</span><br />
        {skills['Front-End'].join(', ')}
      </p>

      <p>
        <span className="skill-category">Back-End</span><br />
        {skills['Back-End'].join(', ')}
      </p>

      <p>
        <span className="skill-category">Tools</span><br />
        {skills['Tools'].join(', ')}
      </p>
    </div>
  );
};

export default SkillParagraphs;

