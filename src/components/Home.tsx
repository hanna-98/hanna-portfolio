import Navigation from "./Navigation";
import Title from "./Title";

export default function Home() {
  return (
    <div className="flex flex-col align-baseline">
      <Navigation />
      <div className="flex justify-center gap-2 dark:bg-gray-800">
        <Title />
      </div>
    </div>
  );
}
