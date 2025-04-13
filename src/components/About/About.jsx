import './about.css'
export default function About() {

    const skillImages = [
        { name: "HTML", src: "/images/html.png" },
        { name: "CSS", src: "/images/css.png" },
        { name: "JavaScript", src: "/images/js.png" },
        { name: "Node.js", src: "/images/node.png" },
        { name: "MySQL", src: "/images/mysql.png" },
        { name: "PHP", src: "/images/php.png" },
        { name: "React", src: "/images/react.png" },
        { name: "jQuery", src: "/images/jquery.png" },
        { name: "C#", src: "/images/C.png" },
        { name: "MongoDB", src: "/images/mongoDB.png" },
        { name: "pug", src: "/images/pug.png" },
        { name: "Laravel", src: "/images/laravel.png" },
        { name: "Express.js", src: "/images/express.png" },
        { name: "JSON", src: "/images/json.png" },
        { name: "npm", src: "/images/npm.png" },
        { name: "TypeScript", src: "/images/typescript.png" },
        { name: "TailwindCSS", src: "/images/tailwind.png" },
        { name: "BootStrap", src: "/images/bootstrap.png" },
        { name: "Git", src: "/images/git.png" },
        { name: "GitHub", src: "/images/github.png" },
        { name: "WordPress", src: "/images/wordpress.png" },
        { name: "MAMP", src: "/images/mamp.png" },
        { name: "Google Cloud", src: "/images/googlecloud.png" },
        { name: "Markdown", src: "/images/markdown.png" },
        { name: "Composer", src: "/images/composer.png" },
        { name: "Firebase", src: "/images/firebase.png" },
        { name: "Docker", src: "/images/docker.png" },
        { name: "Sass", src: "/images/sass.png" },
        { name: "Apache", src: "/images/apache.png" },
        { name: "D3", src: "/images/d3.png" },
        { name: "ES6", src: "/images/es6.png" },
        { name: "Filament", src: "/images/filament.png" },
        { name: "less", src: "/images/less.png" },
        { name: "MUI", src: "/images/MUI.png" },
        { name: "Material3", src: "/images/Material 3.png" },
        { name: "StackOverflow", src: "/images/stackoverflow.png" },
        { name: "Discord", src: "/images/discord.png" },
        { name: "Ubuntu", src: "/images/ubuntu.png" },
        { name: "Raspberry Pi", src: "/images/raspbery.png" },
        
        
       
        // 繼續填滿到 40 個...
      ];
    return (
        <section className="about-section" id="about">
        <h2 className="about-title">About</h2>
        <div className="about-content-wrapper">
          <h3 className="about-subtitle">About me</h3>
          <p className="about-paragraph">
            Full-Stack Developer with a Philosophy background.<br />
            Focused on what matters: clarity, usability, and results.
          </p>
          <p className="about-paragraph">
            Strong in communication, fast understanding, and logical thinking.<br />
            I translate ideas into working solutions - and execute with precision.<br />
            Technology should serve people - and I make sure it does.
          </p>
          <h3 className="about-subtitle skills-title">Skills</h3>
            <div className="skills-paragraph">
            <p><span className="skill-category">Front-End</span><br />
            HTML, CSS, JavaScript, React, jQuery, TypeScript, Bootstrap, Tailwind CSS, Responsive Design, Web Design, Web Accessibility</p>

            <p><span className="skill-category">Back-End</span><br />
            Node.js, Express.js, PHP, C#, ASP.NET, MySQL, SQL, NoSQL (MongoDB), REST APIs, Laravel, Entity Framework/EF Core</p>

            <p><span className="skill-category">Tools</span><br />
            Git, GitHub, Next.js, Firebase, Docker, npm, Visual Studio, VS Code, Powershell<br />
            UX/UI Design: Figma, Miro, Prototyping, Wireframing</p>
            </div>

            <div className="skills-icons-wrapper">
            {skillImages.map((skill, index) => (
            <div className="skill-icon" key={index}>
                <img src={skill.src} alt={skill.name} />
            </div>
            ))}
            </div>

        </div>
        <div className="contact-wrapper">
            <a href="#contact" className="contact-link">
                {`>> /* Get in touch to collaborate */`}
            </a>
        </div>
       

        
      </section>
      
    );
  }