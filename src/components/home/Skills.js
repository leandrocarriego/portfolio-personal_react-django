function Skills() {
  return (
    <section className="skills">
      <div>
        <h2>SKILLS</h2>
        <div className="skills-container">
          <div className="skill-card">
            <h3>JavaScript</h3>
            <ul className="project-skills">
              <li><i class="bi bi-arrow-right-short"></i>React.js</li>
              <li><i class="bi bi-arrow-right-short"></i>Next.js</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Python</h3>
            <ul className="project-skills">
              <li><i class="bi bi-arrow-right-short"></i>Django</li>
              <li><i class="bi bi-arrow-right-short"></i>Django REST</li>
            </ul>
          </div>
          <div className="skill-card">
            <h3>Desarrollo web</h3>
            <ul className="project-skills">
              <li><i class="bi bi-arrow-right-short"></i>HTML5</li>
              <li><i class="bi bi-arrow-right-short"></i>CSS</li>
              <li><i class="bi bi-arrow-right-short"></i>SCSS</li>
              <li><i class="bi bi-arrow-right-short"></i>Bootstrap</li>
            </ul>
          </div>
        </div>

        {/* <div className="card-container">
        <div class="card">
          <div class="title">Python</div>
        </div>
        <div class="card">
          <div class="title">Django</div>
        </div>
        <div class="card">
          <div class="title">JavaScript</div>
        </div>
        <div class="card">
          <div class="title">React.js</div>
        </div>
        <div class="card">
          <div class="title">HTML5</div>
        </div>
        <div class="card">
          <div class="title">CSS</div>
        </div>
        <div class="card">
          <div class="title">Sass</div>
        </div>
        <div class="card">
          <div class="title">Bootstrap</div>
        </div>
        <div class="card">
          <div class="title">Git</div>
        </div>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
