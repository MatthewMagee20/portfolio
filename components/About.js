const About = () => {
  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <div>
        <p>
          Hello! My name is Matthew Magee and I enjoy creating things in my
          spare time. I got exposed to Web Development while studying Computer
          Science in Dublin Institute of Technology (now Technological
          University Dublin).
        </p>
        <p>
          This is where my interest for HTML and CSS began. Throughout my
          studies, I was surprised and intrigued at the amount of technologies
          that are used on the web today, and this deepened my interest in the
          field.
        </p>
        <p>A few technologies I have been using over the last while:</p>
        <ul className="technologies-list">
          <li>NextJS (React)</li>
          <li>TailwindCSS</li>
          <li>Sanity.io CMS</li>
          <li>SASS(SCSS)</li>
          <li>Strapi CMS</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
