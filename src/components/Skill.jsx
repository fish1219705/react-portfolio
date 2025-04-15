import React, { useEffect, useState } from 'react';

const SkillParagraphs = () => {
  const [skills, setSkills] = useState({
    'Front-End': [],
    'Back-End': [],
    'Tools': []
  });

  const [loading, setLoading] = useState(true); // 加入 loading 狀態

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
        setLoading(false); // 記得資料抓到後要關掉 loading
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setLoading(false); // 即使錯誤也要關掉 loading，避免畫面卡住
      });
  }, []);

  return (
    <div className="skills-paragraph">
      {loading ? (
        <p>Loading skills from personal api...</p>
      ) : (
    <>
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
    </>
    )}
    </div>
  );
};

export default SkillParagraphs;

