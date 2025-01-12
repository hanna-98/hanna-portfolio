import { DarkThemeToggle } from "flowbite-react";
import computerImage from "./computer-image.png";

export default function Title() {
  return (
    <div className="w-computerWidth relative flex justify-center">
      <h1 className="title-text text-titleSize absolute mt-32 text-titleText">
        HANNA DAWIT
      </h1>
      <div className="toggle-container">
        <img src={computerImage} />
        <DarkThemeToggle className="toggle" />
      </div>
    </div>
  );
}
