import useSWR from "swr";

export function useUser() {
  const { data, error } = useSWR(`https://hp-api.herokuapp.com/api/characters`);

  return { data };
}
