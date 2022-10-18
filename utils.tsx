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

export function filterByLastname(arr: any[], letter: string) {
  return arr.filter((character) => {
    const doesCharHaveLastname: boolean = !!character.name.split(" ")[1];
    const splitted = character.name.split(" ");
    if (doesCharHaveLastname) {
      return splitted[1].charAt(0).toLowerCase() === letter.toLowerCase();
    } else {
      return splitted[0].charAt(0).toLowerCase() === letter.toLowerCase();
    }
  });
}

export function searchSuggestions(search: string, characters: any[]) {
  const regex = new RegExp(`${search}`, "gi");
  return characters.filter((e) => e.name.match(regex));
}

export function boldHighlight(string: string, highlitedSubstring: string) {
  const regex = new RegExp(highlitedSubstring, "gi");
  return string.replace(regex, `<strong>${highlitedSubstring}</strong>`);
}

export function getAlphabet() {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  return alphabet;
}

export function scrollToElement(elID: string) {
  window.scrollTo({
    top: document.getElementById(elID).offsetTop - 60,
    behavior: "smooth",
  });
}

export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
