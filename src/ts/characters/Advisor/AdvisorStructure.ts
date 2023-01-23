import { type CharacterStructure } from "../Character/CharacterStructure";
import { type Character } from "../Character/Character";

export interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
