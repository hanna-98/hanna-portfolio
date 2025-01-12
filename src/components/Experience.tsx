import Navigation from "./Navigation";

export default function Experience() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="m-8 px-10">
        <div className="flex flex-col pb-10">
          <h2 className="text-center text-5xl">Digital Futures</h2>
          <ul className="flex list-disc flex-col px-20">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              inventore distinctio ut totam.
            </li>
            <li>
              Tempora saepe quia soluta. Tempora ullam, dolorum totam laborum,
              pariatur nam consequatur tenetur, non natus soluta eos.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              In perspiciatis a quas, nisi libero sint dolor modi consequuntur
              voluptate dignissimos atque rerum non consequatur sit amet
              exercitationem, doloremque rem similique.
            </li>
          </ul>
        </div>

        <div className="flex flex-col pb-10">
          <h2 className="text-center text-5xl">Fluro</h2>
          <ul className="flex list-disc flex-col px-20">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              inventore distinctio ut totam.
            </li>
            <li>
              Tempora saepe quia soluta. Tempora ullam, dolorum totam laborum,
              pariatur nam consequatur tenetur, non natus soluta eos.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>In perspiciatis a quas, nisi libero sint dolor modi</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              inventore distinctio ut totam.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
