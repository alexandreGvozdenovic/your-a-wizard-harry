import Link from "next/link";
import { useState } from "react";
import {
  getAlphabet,
  filterByLastname,
  scrollToElement,
} from "../common/utils";
import LetterCard from "./LetterCard";
function Directory({ characters }) {
  const [currentLetter, setCurrentLetter] = useState("A");
  const alphabet = getAlphabet();

  function handleClick(type: string, value: string) {
    if (type === "letter") {
      setCurrentLetter(value);
      scrollToElement(`letter-${value}`);
    }
  }
  return (
    <div className="mt-14">
      <h2 className="text-2xl text-white mb-8">All characters</h2>
      <div className="flex justify-between gap-0">
        {alphabet.map((letter) => {
          return (
            <div
              key={`indexLetter${letter}`}
              className={`flex ${
                letter == currentLetter ? "bg-purple" : null
              } w-8 h-8 items-center justify-center rounded cursor-pointer`}
              onClick={() => handleClick("letter", letter)}
            >
              <p className="text-white cursor-pointer">{letter}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-10">
        {alphabet.map((letter) => {
          return (
            <div
              key={`cardLetter${letter}`}
              className="mb-6"
              id={`letter-${letter}`}
            >
              <LetterCard
                letter={letter}
                character={filterByLastname(characters, letter)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Directory;
