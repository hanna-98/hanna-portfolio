import Navigation from "./Navigation";

export default function About() {
  return (
    <div className="text-textColour flex flex-col align-middle">
      <Navigation />
      <div className="m-4 mt-8 px-16">
        <p className="pb-6">
          Hi! I'm Hanna. I am a mathematician turned software engineer based in
          London. I specialise in building intuitive front-end applications
          using React, TypeScript and CSS.
        </p>
        <p className="pb-6">
          My journey into tech started with an intensive course at the Digital
          Futures Academy, where I mastered four years of degree-level content
          in just 12 weeks. Since then, I’ve gained hands-on experience building
          admin tools, integrating with third-party APIs, and contributing to
          various different projects.
        </p>
        <p className="pb-6">
          I’m passionate about creating tools that make life easier for users
          and working with companies that strive for good, whether that’s
          promoting sustainability or increasing financial accessibility.
        </p>
        <p>
          I’m always eager to learn and grow, and I’m excited about
          collaborating on meaningful projects in the near future.
        </p>
      </div>
    </div>
  );
}
