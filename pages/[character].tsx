import { useRouter } from "next/router";
import IdentityCard from "../components/character/IdentityCard";
import WizardInfoCard from "../components/character/WizardInfoCard";
import { useCharacters } from "../hooks/useCharacters";

function Character({}) {
  const { characters, isLoading, isError } = useCharacters();
  const history = useRouter();

  if (!isLoading) {
    const character = characters.find(
      (char) => char.name === history.query.character
    );
    return (
      <div className="mt-20 px-4 xl:px-32">
        <div
          className="flex mb-6 cursor-pointer"
          onClick={() => history.back()}
        >
          <img className="mr-3" src="/icons/arrowLeft.svg" />
          <p className="font-body text-white">Back</p>
        </div>
        <h1 className="text-4xl text-white mb-10">{character.name}</h1>
        <div className="flex flex-col xl:flex-row">
          <IdentityCard character={character} />
          <WizardInfoCard character={character} />
        </div>
      </div>
    );
  }
  return <div className="sm:px-4 md:px- 8 lg:px-32"></div>;
}

export default Character;
