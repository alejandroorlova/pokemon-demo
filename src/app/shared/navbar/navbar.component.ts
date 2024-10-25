import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokeapiService } from 'src/app/pokemon-info/services/pokeapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  selectedFilter: string = '';
  searchTerm: string = '';
  @Output() searchResults = new EventEmitter<any[]>();

  filterOptions = [
    { value: 'pokemon', viewValue: 'Pokemon' },
    { value: 'move', viewValue: 'Movimientos' },
    { value: 'location', viewValue: 'Ubicaciones' },
    { value: 'item', viewValue: 'Elementos' },
    { value: 'generation', viewValue: 'Generaciones' },
    { value: 'contest-type', viewValue: 'Concursos' },
  ];

  menuOpen = false;

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onSearch() {
    this.searchResults.emit(null);
    this.pokeapiService
      .getInfo(this.selectedFilter, this.searchTerm)
      .subscribe((data) => {
        this.searchResults.emit(data);
      });
  }

  isSearchEnabled(): boolean {
    return (
      (this.selectedFilter !== '' && this.searchTerm.trim() !== '') ||
      this.selectedFilter == 'pokemon'
    );
  }

  onFilterChange(): void {
    this.searchTerm = '';
  }
}
