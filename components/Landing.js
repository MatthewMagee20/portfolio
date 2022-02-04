import Image from "next/image";

import avatar from "../public/img_0912.jpg";

const Landing = () => {
  return (
    <section
      id="landing"
      className="animated animatedFadeInUp fadeInUp items-start justify-center"
    >
      <h2>Hello there! My name is</h2>
      <h1 className="title">Matthew Magee</h1>
      <p>
        I am a recent BSc. Computer Science (Infrastructure) Graduate from
        Technological University Dublin, achieving a 2.1 grade. I am currently
        seeking employment in the area of Software Development. Do not hesitate
        to contact me if you would like to know more about me!
      </p>
      <a className="button" href="#contact">
        Contact
      </a>
      {/* <div className="flex flex-col justify-center">
        <div className="image-wrapper p-6">
          <Image
            className="-rotate-90 -scale-x-100 avatar"
            alt="Avatar"
            src={avatar}
            priority
          />
        </div>
      </div> */}
    </section>
  );
};

export default Landing;
