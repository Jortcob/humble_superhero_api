import { Injectable, BadRequestException } from '@nestjs/common';


export interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];
  private idCounter = 1;

  addSuperhero(name: string, superpower: string, humilityScore: number): Superhero {
    if (humilityScore < 1 || humilityScore > 10) {
      throw new BadRequestException('Humility score must be between 1 and 10');
    }
  
    const superhero: Superhero = {
      id: this.idCounter++,
      name,
      superpower,
      humilityScore,
    };
  
    this.superheroes.push(superhero);
    return superhero;
  }


  getSuperheroes(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
