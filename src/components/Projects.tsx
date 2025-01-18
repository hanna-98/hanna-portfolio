import Navigation from "./Navigation";
import projectIcon from "../../public/project-icon.png";
export default function Projects() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="mx-4 flex justify-evenly p-4 text-textColour">
        <div className="m-2 flex w-fit flex-col p-4">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className="pb-2 text-center text-4xl">TasteQuest</h2>
          <p className="px-6 text-center text-2xl">
            A dynamic food exploration app built with React, TypeScript, and a
            custom REST API. The project features responsive design, seamless
            user interactions, and robust backend integration to deliver
            personalised cuisine recommendations.
          </p>
        </div>
        <div className="m-2 flex w-fit flex-col p-4">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className="pb-2 text-center text-4xl">Rock, paper, scissors</h2>
          <p className="px-6 text-center text-2xl">
            Single-player game built with Node.js, Express and CSS. Players
            compete against the computer, with the game implementing the classic
            rules and providing a simple, interactive experience.
          </p>
        </div>
        <div className="m-2 flex w-fit flex-col p-4">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className=" pb-2 text-center text-4xl">Wordle</h2>
          <p className="px-6 text-center text-2xl">
            A reproduction of the NYT Wordle game, built with React and styled
            with CSS. The project includes interactive gameplay, dynamic
            feedback for guesses, and a responsive design.
          </p>
        </div>
      </div>
    </div>
  );
}
