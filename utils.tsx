export function sortByLastname(arr: any[]) {
  return arr.sort((a, b) => {
    const doesAHaveLastname: boolean = !!a.name.split(" ")[1];
    const doesBHaveLastname: boolean = !!b.name.split(" ")[1];
    const splittedA: string[] = a.name.split(" ");
    const splittedB: string[] = b.name.split(" ");

    if (doesAHaveLastname && doesBHaveLastname) {
      return splittedA[1].localeCompare(splittedB[1]);
    }
    if (!doesAHaveLastname && doesBHaveLastname) {
      return splittedA[0].localeCompare(splittedB[1]);
    }
    if (doesAHaveLastname && !doesBHaveLastname) {
      return splittedA[1].localeCompare(splittedB[0]);
    }
  });
}
