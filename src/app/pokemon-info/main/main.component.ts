import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {

  @Input() results: any[] = [];
  showInfoInCards = false;
  showInfoInJson = false;
  pokemonList: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.results);
    if (this.results && 'results' in this.results) {
      this.showInfoInCards = true;
      this.showInfoInJson = false;
      this.pokemonList = this.results['results'];
    } else if (this.results !== null && !this.isArray(this.results)){
      this.showInfoInCards = false;
      this.showInfoInJson = true;
    } else {
      this.showInfoInJson = false;
    }
  }

}
