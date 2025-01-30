import Navigation from "./Navigation";
import projectIcon from "../../public/project-icon.png";

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-globalBg px-4 text-lightText">
      <Navigation />
      <div className="mt-4 grid w-full max-w-6xl gap-8 text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-blue-950 p-6 shadow-lg">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className="mb-2 text-3xl">TasteQuest</h2>
          <p className="mb-4 text-xl">
            A dynamic food exploration app built with React, TypeScript, and a
            custom REST API. The project features responsive design, seamless
            user interactions, and robust backend integration to deliver
            personalised cuisine recommendations.
          </p>
          {/* <a
            href="#"
            className="inline-block rounded bg-textColour px-4 py-2 text-globalBg"
          >
            View on GitHub
          </a> */}
        </div>

        <div className="rounded-lg bg-blue-950 p-6 shadow-lg">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className="mb-2 text-3xl">Rock Paper Scissors</h2>
          <p className="mb-4 text-xl">
            Single-player game built with Node.js, Express and CSS. Players
            compete against the computer, with the game implementing the classic
            rules and providing a simple, interactive experience.
          </p>
          {/* <a
            href="#"
            className="inline-block rounded bg-textColour px-4 py-2 text-globalBg"
          >
            View on GitHub
          </a> */}
        </div>

        <div className="rounded-lg bg-blue-950 p-6 shadow-lg">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className="mb-2 text-3xl">Wordle Clone</h2>
          <p className="mb-4 text-xl">
            A reproduction of the NYT Wordle game, built with React and styled
            with CSS. The project includes interactive gameplay, dynamic
            feedback for guesses, and a responsive design.
          </p>
          {/* <a
            href="#"
            className="inline-block rounded bg-textColour px-4 py-2 text-globalBg"
          >
            View on GitHub
          </a> */}
        </div>
      </div>
    </div>
  );
}
