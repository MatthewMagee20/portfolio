import groq from "groq";
import client from "../client";

import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing";
import About from "../components/About";
import Contact from "../components/Contact";

const Index = ({ projects }) => {
  return (
    <div id="content">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Navbar />
      <main id="home">
        <Landing />
        <About />
        <section id="projects">
          <h1 className="title">Projects</h1>
          {projects.length > 0 &&
            projects.map(
              ({
                _id,
                title = "",
                slug = "",
                previewDescription = "",
                url = "",
                technologies = "",
              }) =>
                slug && (
                  <li className="project" key={_id}>
                    <a className="project__title" href={url}>
                      <span className="link__icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z"
                            fill="currentColor"
                          />
                          <path
                            d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <h2>{title}</h2>
                    </a>
                    <span className="text-lg tablet:text-2xl">
                      {previewDescription}
                    </span>
                    <ul className="technologies-list">
                      {technologies.map((a, index) => (
                        <li key={index}>{a}</li>
                      ))}
                    </ul>
                  </li>
                )
            )}
        </section>
        <Contact />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const projects = await client.fetch(groq`
  *[_type == "project"]{
    _id, title, slug, previewDescription, url, 
    "technologies": technologies[]->title
  }`);

  console.log(projects);

  return {
    props: {
      projects,
    },
    revalidate: 10, // In seconds
  };
}

export default Index;

// `
//       *[_type == "project"]{
//         _id, title, slug, previewDescription, url,
//         "technologies": *[_type=='technology'].title
//       }`
