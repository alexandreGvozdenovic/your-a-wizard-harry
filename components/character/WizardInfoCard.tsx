import { capitalizeFirstLetter } from "../../utils";

capitalizeFirstLetter;
function WizardInfoCard({ character }) {
  const {
    hogwartsStaff,
    hogwartsStudent,
    ancestry,
    house,
    wand,
    patronus,
    wizard,
  } = character;

  if (wizard) {
    return (
      <div className="bg-white rounded flex flex-1 flex-col p-10 bg-map">
        <div className="flex items-center mb-8">
          <h2 className="text-2xl mr-8">Wizard info</h2>
          {hogwartsStaff ||
            (hogwartsStudent && (
              <div className="bg-purple px-4 py-2 rounded-full">
                <p className="font-body text-white text-xs">
                  {hogwartsStaff && "Hogwarts Staff"}
                  {hogwartsStudent && "Hogwarts Student"}
                </p>
              </div>
            ))}
        </div>
        <div className="flex jusify-between font-body">
          <div>
            <div className="mb-6">
              <p className={`text-xs ${house ? "text-black" : "text-silver"}`}>
                House
              </p>
              <p
                className={`font-bold ${house ? "text-black" : "text-silver"}`}
              >
                {house ? capitalizeFirstLetter(house) : "-"}
              </p>
            </div>
            <div className="mb-6">
              <p
                className={`text-xs ${ancestry ? "text-black" : "text-silver"}`}
              >
                Ancestry
              </p>
              <p
                className={`font-bold ${
                  ancestry ? "text-black" : "text-silver"
                }`}
              >
                {ancestry ? capitalizeFirstLetter(ancestry) : "-"}
              </p>
            </div>
            <div className="mb-6">
              {!!wand.core && !!wand.wood && (
                <>
                  <p className="text-xs">Wand</p>
                  <p className="font-bold">{`${capitalizeFirstLetter(
                    wand.wood
                  )} wood and ${wand.core} core`}</p>
                </>
              )}
              {!wand.core && !!wand.wood && (
                <>
                  <p className="text-xs">Wand</p>
                  <p className="font-bold">{`${capitalizeFirstLetter(
                    wand.wood
                  )} wood`}</p>
                </>
              )}
              {!!wand.core && !wand.wood && (
                <>
                  <p className="text-xs">Wand</p>
                  <p className="font-bold">{`${capitalizeFirstLetter(
                    wand.core
                  )} core`}</p>
                </>
              )}
              {!wand.core && !wand.wood && (
                <>
                  <p className="text-xs text-silver">Wand</p>
                  <p className="font-bold text-silver">-</p>
                </>
              )}
            </div>
            <div>
              <p
                className={`text-xs ${patronus ? "text-black" : "text-silver"}`}
              >
                Patronus
              </p>
              <p
                className={`font-bold ${
                  patronus ? "text-black" : "text-silver"
                }`}
              >
                {patronus ? capitalizeFirstLetter(patronus) : "-"}
              </p>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-end">
            <img src="/images/ministryofmagic.png" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-white rounded flex flex-1 flex-col p-12 items-center">
        <img className="rounded mb-6" src="/images/youawizardharry.gif" />
        <h3 className="text-2xl mb-4">
          You're <b>not</b> a wizard
        </h3>
        <p className="text-center font-body">
          Looks like this character is either a muggle or a mystical creature
        </p>
      </div>
    );
  }
}

export default WizardInfoCard;
