import useSWR from "swr";
import { ICharacter } from "../common/types";

type useCharactersReturn = {
  characters: ICharacter[];
  isLoading: boolean;
  isError: any;
};
export function useCharacters(): useCharactersReturn {
  const { data, error } = useSWR(`https://hp-api.onrender.com/api/characters`);
  return { characters: data, isLoading: !error && !data, isError: error };
}
