import { joffrey } from "./characters/Character/characters";
import { CharacterCardComponent } from "./components/Card/CharacterCardComponent";
import { CharacterCardContainer } from "./components/Card/CharacterCardContainer";

const container = document.querySelector(".container")!;

const king = new CharacterCardComponent(container, joffrey, "card-body");

const characterCard = document.querySelector(".character__card")!;

const characterContainer = new CharacterCardContainer(
  container,
  ".character__card"
);
