import projectIcon from "./project-icon.png";
import Navigation from "./Navigation";
export default function Projects() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="mx-4 flex justify-evenly p-4">
        <div className="m-2 flex flex-col p-4">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className="pb-2 text-center text-4xl">TasteQuest</h2>
          <p className="px-6 text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero
            dolorum esse laborum sunt nihil id repellat omnis necessitatibus
            tenetur minima ipsum enim repudiandae, sequi ea incidunt, blanditiis
            vitae atque!
          </p>
        </div>
        <div className="m-2 flex flex-col p-4">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className="pb-2 text-center text-4xl">Rock, paper, scissors</h2>
          <p className="px-6 text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero
            dolorum esse laborum sunt nihil id repellat omnis necessitatibus
            tenetur minima ipsum enim repudiandae, sequi ea incidunt, blanditiis
            vitae atque!
          </p>
        </div>
        <div className="m-2 flex flex-col p-4">
          <div className="flex justify-center">
            <img className="size-24" src={projectIcon} />
          </div>
          <h2 className=" pb-2 text-center text-4xl">Wordle</h2>
          <p className="px-6 text-center text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero
            dolorum esse laborum sunt nihil id repellat omnis necessitatibus
            tenetur minima ipsum enim repudiandae, sequi ea incidunt, blanditiis
            vitae atque!
          </p>
        </div>
      </div>
    </div>
  );
}
