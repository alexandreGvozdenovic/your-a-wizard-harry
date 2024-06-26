import Head from "next/head";
import Directory from "../components/Directory";
import Search from "../components/Search";
import { useCharacters } from "../hooks/useCharacters";
import { sortByLastname } from "../common/utils";
function Home() {
  const { characters, isLoading } = useCharacters();

  if (!isLoading && characters) {
    return (
      <div className="sm:px-4 md:px-8 lg:px-32 pb-20">
        <Search characters={sortByLastname(characters)} />
        <Directory characters={sortByLastname(characters)} />
      </div>
    );
  }
  return <div className="sm:px-4 md:px- 8 lg:px-32"></div>;
}
export default Home;
