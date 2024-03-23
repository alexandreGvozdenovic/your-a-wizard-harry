import useSWR from "swr";

export function useCharacters() {
  const { data, error } = useSWR(`https://hp-api.onrender.com/api/characters`);
  return { characters: data, isLoading: !error && !data, isError: error };
}
