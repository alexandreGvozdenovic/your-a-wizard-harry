function Search() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-450">
        <img src="/images/hogwartsIllustration.png" />
      </div>
      <div className="w-full -mt-20">
        <p className="text-4xl text-white text-center leading-relaxed mb-10">
          Discover everything you ever wanted to know about the Harry Potter
          universe.
        </p>

        <form className="px-10">
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block p-4  w-full text-sm text-black bg-white rounded-full h-15"
              placeholder="Search for a character"
            />
            <button type="submit" className="absolute right-1.5 top-1.5">
              <div className="flex justify-center items-center bg-coral w-12 h-12 rounded-3xl">
                O
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
