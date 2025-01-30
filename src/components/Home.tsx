import Navigation from "./Navigation";
import Title from "./Title";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Navigation />
      <div className="flex min-h-80 items-center justify-center gap-2 dark:bg-gray-800">
        <Title />
      </div>
    </div>
  );
}
