import Head from "next/head";
import Search from "../components/Search";
import { useCharacters } from "../hooks/useCharacters";
import { sortByLastname } from "../utils";
function Home() {
  const { characters, isLoading, isError } = useCharacters();

  if (!isLoading) {
    console.log("test", characters[111].name.split(" ")[1]);
    console.log("sorted", sortByLastname(characters));
  }
  return (
    <div className="px-32">
      <div>
        <Search />
      </div>
    </div>
  );
}
export default Home;
