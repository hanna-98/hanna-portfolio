import Navigation from "./Navigation";

export default function Experience() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="text-textColour m-8 px-10">
        <div className="flex flex-col pb-10">
          <h2 className="text-center text-5xl">Fluro (Loans) 2022-2023</h2>
          <ul className="flex list-disc flex-col px-20">
            <li>
              Developed an admin tool in Kotlin to simulate loan applications
              for better platform testing.
            </li>
            <li>
              Helped to facilitate the seamless integration of a new open
              banking provider by researching endpoints and building out a new
              API
            </li>
            <li>
              Collaborated with product designers during Fluro's rebrand,
              ensuring pages and components matched wireframe designs.
            </li>
            <li>
              Worked in a cross-functional Agile team, using Jira to manage
              tasks, participating in sprint planning, daily stand-ups, and
              retrospectives.
            </li>
            <li>
              Built user-friendly front-end components with React, TypeScript,
              and Sass, writing unit and end-to-end tests and following TDD
              principles.
            </li>
            <li>
              Translated business requirements into effective software solutions
              and pair programmed with colleagues to promote knowledge sharing
              and growth.
            </li>
          </ul>
        </div>

        <div className="flex flex-col pb-10">
          <h2 className="text-center text-5xl">Digital Futures 2021</h2>
          <ul className="flex list-disc flex-col px-20">
            <li>
              Completed an intensive 12-week program, transitioning to a
              full-time software engineer role and contributing to internal and
              client-facing platforms.
            </li>
            <li>
              Built and maintained front-end applications, applying knowledge of
              React, TypeScript, and user-centred design.
            </li>
            <li>
              Efficiently managed data with GraphQL, Hasura, and PostgreSQL
            </li>
            <li>Automated workflows using GitHub Actions for CI/CD.</li>
            <li>
              Deployed scalable cloud functions with Google Cloud Platform
              (GCP), ensuring scalability and reliability.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
