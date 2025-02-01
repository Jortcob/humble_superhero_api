import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService, Superhero } from './superheroes.service';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  addSuperhero(
    @Body('name') name: string,
    @Body('superpower') superpower: string,
    @Body('humilityScore') humilityScore: number,
  ): Superhero {  //specify that it returns a Superhero type object
    return this.superheroesService.addSuperhero(name, superpower, humilityScore);
  }

  @Get()
  getSuperheroes(): Superhero[] {  //specify that it returns an array of superheroes
    return this.superheroesService.getSuperheroes();
  }
}
