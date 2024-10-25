import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemon';
  results: any[] = []; 

  getResults(results: any[]): void {
    this.results = results;
  }
}
