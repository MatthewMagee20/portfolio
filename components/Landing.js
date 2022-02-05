const Landing = () => {
  return (
    <section
      id="landing"
      className="animated animatedFadeInUp fadeInUp items-start justify-center"
    >
      <div>
        <h2>Hello there! My name is</h2>
        <h1 className="title">Matthew Magee</h1>
        <p>
          I am a recent BSc. Computer Science (Infrastructure) Graduate from
          Technological University Dublin, achieving a 2.1 grade. I am currently
          seeking employment in the area of Software Development. Do not
          hesitate to contact me if you would like to know more about me!
        </p>
        <div className="button-wrapper">
          <a className="button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
