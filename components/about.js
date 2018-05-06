const About = () => (
  <section id="about">
    <div className="overlay">
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2>A Little Background</h2>
          <p>
            I'm a developer that loves to ship clean functional code. With a
            passion for full-stack, it's common for me to work on all parts of a
            project from start to finish. Sometimes you'll find me configuring a
            linux server or working on the UI of an application.
          </p>
          <p>
            With a true passion for Web Development even when I'm not in the
            office you will find me researching new trends and emerging myself
            in the latest technology to keep my skills at their finest.
          </p>
          <p>
            Want the full story? Well go <a href="/about">here</a>.
          </p>

          <div className="text-center">
            <h3>Keep going. Let's look at some projects.</h3>
            <a href="#projects" className="arrow">
              <i className="fa fa-arrow-circle-o-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
