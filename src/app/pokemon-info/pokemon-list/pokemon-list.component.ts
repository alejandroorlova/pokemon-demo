import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnChanges {
  @Input() data: any;
  cards: any[] = [];

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    for (let pokemon of this.data) {
      this.pokeapiService.getPokemonInfo(pokemon['url']).subscribe((data) => {
        let pokemon = {};
        pokemon['id'] = data['id'];
        pokemon['image'] = data['sprites']['front_default'];
        pokemon['name'] = data['name'];
        pokemon['weight'] = data['weight'];
        pokemon['height'] = data['height'];
        this.cards.push(pokemon);
      });
    }
  }
}
