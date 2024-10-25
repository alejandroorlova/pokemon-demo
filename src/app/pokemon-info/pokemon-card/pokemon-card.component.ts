import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() image: string = ''; 
  @Input() id: string = ''; 
  @Input() name: string = ''; 
  @Input() weight: string = ''; 
  @Input() height: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

}
