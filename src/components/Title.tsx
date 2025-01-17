import { DarkThemeToggle } from "flowbite-react";
import computerImage from "./computer-image.png";

export default function Title() {
  return (
    <div className="relative flex w-computerWidth justify-center">
      <h1 className="title-text text-textColour absolute mt-32 text-titleSize">
        HANNA DAWIT
      </h1>
      <div className="toggle-container">
        <img src={computerImage} />
        <DarkThemeToggle className="toggle" />
      </div>
    </div>
  );
}
