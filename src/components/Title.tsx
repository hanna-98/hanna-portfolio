// import { DarkThemeToggle } from "flowbite-react";
import computerImage from "../../public/computer-image.png";

export default function Title() {
  return (
    <div className="relative flex w-computerWidth justify-center">
      <img src={computerImage} />
      {/* <DarkThemeToggle className="toggle" /> */}
    </div>
  );
}
