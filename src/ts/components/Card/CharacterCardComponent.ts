import { type King } from "../../characters/King/King";
import { type CharacterCardComponentsStructure } from "./CharacterCardComponentsStructure";
import { type Character } from "../../characters/Character/Character";

export class CharacterCardComponent
  implements CharacterCardComponentsStructure
{
  element: Element;
  character: Character;

  constructor(parentElement: Element, character: Character, className: string) {
    this.element = document.createElement("div");
    this.character = character;
    this.element.className = className;
    parentElement.appendChild(this.element);
    this.render();
  }

  render() {
    this.element.innerHTML = `<h2> ${this.character.characterData.name} ${this.character.characterData.family} </h2>`;
  }
}
