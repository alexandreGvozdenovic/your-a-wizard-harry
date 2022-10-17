import { useState, useEffect } from "react";
import { searchSuggestions } from "../utils";
import Input from "./Input";

function Search({ characters }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    if (inputValue !== "") {
      setSuggestions(searchSuggestions(inputValue, characters));
    }
  }, [inputValue]);

  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          className="h-[250px] sm:h-[350px] md:h-[380px] lg:h-[430px] "
          src="/images/hogwartsIllustration.png"
        />
      </div>
      <div className="-mt-[155px] flex flex-col sm:w-full md:w-4/5">
        <p className="text-2xl sm:text-3xl lg:text-4xl text-white text-center leading-relaxed mb-10">
          Discover everything you ever wanted to know about the Harry Potter
          universe.
        </p>
        <form className="px-10">
          <Input
            value={inputValue}
            handleChange={handleChange}
            suggestions={suggestions}
            handleReset={() => setInputValue("")}
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
