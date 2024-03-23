export enum GENDER {
  Male = "male",
  Female = "female",
}

export enum SPECIES {
  Human = "human",
  HalfGiant = "half-giant",
  Werewolf = "werewolf",
  Cat = "cat",
  Goblin = "goblin",
  Owl = "owl",
  Ghost = "ghost",
  Poltergeist = "poltergeist",
  ThreeHeadedGhost = "three-headed-dog",
  Dragon = "dragon",
  Centaur = "centaur",
  HouseElf = "house-elf",
  Acromantula = "acromantula",
  Hippogriff = "hippogriff",
}

export enum HOUSE {
  Unknown = "",
  Gryffindor = "Gryffindor",
  Slytherin = "Slytherin",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
}

export enum ANCESTRY {
  Unknow = "",
  HalfBlood = "half-blood",
  Muggleborn = "muggleborn",
  PureBlood = "pure-blood",
  Squib = "squib",
  Muggle = "muggle",
}

export interface IWand {
  wood: string;
  core: string;
  length?: number;
}
export interface ICharacter {
  id: string;
  name: string;
  alternate_names: string[];
  species: SPECIES;
  gender: GENDER;
  house: HOUSE;
  dateOfBirth?: string;
  yearOfBirth?: number;
  wizard: boolean;
  ancestry: ANCESTRY;
  eyeColour: string;
  hairColour: string;
  wand: IWand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}
