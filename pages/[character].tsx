import { useRouter } from "next/router";
function Character({}) {
  const history = useRouter();
  const character = history.query.character;
  console.log("Character", character);
  return <p>je suis toto</p>;
}
export default Character;
