import { capitalizeFirstLetter } from "../../common/utils";

function IdentityCard({ character }) {
  const {
    image,
    actor,
    alive,
    name,
    alternate_names,
    species,
    gender,
    eyeColour,
    hairColour,
    dateOfBirth,
    yearOfBirth,
  } = character;
  return (
    <div className="bg-white rounded flex flex-1 flex-col px-10 pt-10 pb-[65px] mb-7 xl:mr-7 xl:mb-0">
      <div className="flex items-center mb-8">
        <h2 className="text-2xl mr-8">Identity Card</h2>
        <div className="bg-purple px-4 py-2 rounded-full">
          <p className="font-body text-white text-xs">
            {alive ? "Alive" : "Dead"}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        {image ? (
          <div className="mr-6 relative max-w-[150px]">
            <img src={image} className="rounded" />
            {actor && (
              <div className="absolute w-full left-1/2 -translate-x-1/2 -translate-y-1/2 -bottom-9">
                <p className="text-xs font-body text-silver text-center">
                  Actor: <b>{actor}</b>
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="min-w-[150px] h-[200px] bg-lavender/20 rounded mr-6 flex items-center justify-center">
            <img src="/icons/user.svg" width={80} />
          </div>
        )}

        <div className="font-body">
          <div className="flex mb-6">
            <div className="mr-10">
              <p className="text-xs">Name</p>
              <p className="font-bold">{name}</p>
            </div>
            <div
              className={`${
                alternate_names.length > 0 ? "text-black" : "text-silver"
              }`}
            >
              <p className="text-xs">Alternate Name(s)</p>
              <div className="flex">
                {alternate_names.map((characterName, index) => {
                  const lastIndex = index === alternate_names.length - 1;
                  return (
                    <p
                      className={`${lastIndex ? "mr-0" : "mr-1"} font-bold`}
                      key={characterName}
                    >
                      {characterName}
                      {!lastIndex ? "," : ""}
                    </p>
                  );
                })}
                {alternate_names.length === 0 && <p>-</p>}
              </div>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="mr-10">
              <p className="text-xs">Specie</p>
              <p className="font-bold">{capitalizeFirstLetter(species)}</p>
            </div>
            <div>
              <p className="text-xs">Gender</p>
              <p className="font-bold">{capitalizeFirstLetter(gender)}</p>
            </div>
          </div>
          <div className="flex mb-6">
            <div className="mr-10">
              <p
                className={`text-xs ${
                  !dateOfBirth && !yearOfBirth ? "text-silver" : "text-black"
                }`}
              >
                Date of birth
              </p>
              {!!dateOfBirth && <p className="font-bold">{dateOfBirth}</p>}
              {!dateOfBirth && !!yearOfBirth && (
                <p className="font-bold">{yearOfBirth}</p>
              )}
              {!dateOfBirth && !yearOfBirth && (
                <p className="font-bold text-silver">-</p>
              )}
            </div>
          </div>
          <div className="flex">
            <div className="mr-10">
              <p
                className={`text-xs ${
                  eyeColour ? "text-black" : "text-silver"
                }`}
              >
                Eye colour
              </p>
              <p
                className={`font-bold ${
                  eyeColour ? "text-black" : "text-silver"
                }`}
              >
                {eyeColour ? capitalizeFirstLetter(eyeColour) : "-"}
              </p>
            </div>
            <div>
              <p
                className={`text-xs ${
                  hairColour ? "text-black" : "text-silver"
                }`}
              >
                Hair colour
              </p>
              <p
                className={`font-bold ${
                  hairColour ? "text-black" : "text-silver"
                }`}
              >
                {hairColour ? capitalizeFirstLetter(hairColour) : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdentityCard;
