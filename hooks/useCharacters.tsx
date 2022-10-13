import useSWR from "swr";

export function useCharacters() {
  const { data, error } = useSWR(`https://hp-api.herokuapp.com/api/characters`);

  return { characters: data, isLoading: !error && !data, isError: error };
}
