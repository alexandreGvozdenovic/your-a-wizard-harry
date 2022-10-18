import { boldHighlight } from "../utils";
import { useRouter } from "next/router";
function Input({
  handleChange = () => {},
  value,
  suggestions = [],
  handleReset = () => {},
}) {
  const history = useRouter();
  return (
    <div>
      <div
        className={`${
          value.length > 0 ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50`}
        onClick={handleReset}
      />
      <div className="relative">
        <input
          type="search"
          id="search"
          value={value}
          className="block p-4  w-full  text-sm text-black bg-white rounded-full h-15"
          placeholder="Search for a character"
          onChange={handleChange}
        />
        <button type="submit" className="absolute right-1.5 top-1.5">
          <div className="flex justify-center items-center bg-purple w-12 h-12 rounded-3xl">
            <img src="/icons/search.svg" />
          </div>
        </button>
        {value.length > 0 && (
          <div className="bg-white px-8 pt-8 pb-5 mt-5 rounded-lg absolute w-full">
            {suggestions.length > 0 ? (
              <>
                <div>
                  <p className="font-body text-2xl mb-4">
                    {suggestions.length} result
                    {suggestions.length > 1 ? "s" : ""}
                  </p>
                  {suggestions.map((character, i) => {
                    return (
                      <div
                        className="flex items-center mb-4 cursor-pointer"
                        key={`suggestions${character.name + i}`}
                        onClick={() => history.push(`/${character.name}`)}
                      >
                        <div>
                          {!!character.image ? (
                            <div className="rounded-full w-12 h-12 mr-4">
                              <img
                                src={character.image}
                                className="object-cover w-full h-full rounded-full"
                              />
                            </div>
                          ) : (
                            <div className="flex items-center justify-center rounded-full w-12 h-12 mr-4 bg-lavender/20">
                              <img src="/icons/user.svg" />
                            </div>
                          )}
                        </div>
                        <p
                          className="font-body"
                          dangerouslySetInnerHTML={{
                            __html: boldHighlight(character.name, value),
                          }}
                        ></p>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <p>No results found</p>
                <p>
                  Looks like there is no results for you, try next time with
                  some Felix Felicis
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
