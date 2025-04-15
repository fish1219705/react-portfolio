import React, { useState, useEffect } from 'react';
import './header.css'

export default function Header() {

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById('about');
      const work = document.getElementById('work');

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (about && scrollPosition >= about.offsetTop) {
        setActiveSection('about');
      } else if (work && scrollPosition >= work.offsetTop && scrollPosition < about.offsetTop) {
        setActiveSection('work');
      } else {
        setActiveSection(''); // 如果滾動位置不在 work 或 about 之內，清除 active 狀態
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化時判斷一次

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


return (
  <>
    <header id="header">
      <nav>
      <div class="nav-section left">
        <a href="#work" 
        className={`link ${activeSection === 'work' ? 'active' : ''}`}
        >
          WORK
          </a>
        </div>
        <div class="nav-section center">
          <a href="#">
          <img src="/images/icon.png" alt="website icon" className="icon" />
          </a>
        </div>
        <div class="nav-section right">
        <a href="#about"
        className={`link ${activeSection === 'about' ? 'active' : ''}`}
        >
          ABOUT
          </a>
        </div>
      </nav>
    </header>
  </>
  );
}