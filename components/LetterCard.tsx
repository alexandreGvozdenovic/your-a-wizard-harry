import { useRouter } from "next/router";

function LetterCard({ letter, character }) {
  const history = useRouter();
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="text-2xl mb-2">{letter}</div>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 gap-2 xl:grid-cols-4 gap-4">
        {character.map((character, i) => {
          return (
            <div
              key={`card${character + i}`}
              className="flex cursor-pointer"
              onClick={() => history.push(`/${character.name}`)}
            >
              <p className="mr-4">{character.name}</p>
              <img src="/icons/arrowRight.svg" width={12} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LetterCard;
