import Head from "next/head";
import Directory from "../components/Directory";
import Search from "../components/Search";
import { useCharacters } from "../hooks/useCharacters";
import { filterByLastname, sortByLastname } from "../utils";
function Home() {
  const { characters, isLoading, isError } = useCharacters();

  if (!isLoading) {
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
