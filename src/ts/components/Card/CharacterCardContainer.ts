import { type CharacterCardComponentsStructure } from "./CharacterCardComponentsStructure";

export class CharacterCardContainer
  implements CharacterCardComponentsStructure
{
  element: Element;

  constructor(parentElement: Element, className: string) {
    this.element = document.createElement("div");
    this.element.className = className;
    parentElement.appendChild(this.element);
  }
}
